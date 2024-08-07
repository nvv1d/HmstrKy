const games = {
    1: {
        name: 'Riding Extreme 3D',
        appToken: 'd28721be-fd2d-4b45-869e-9f253b554e50',
        promoId: '43e35910-c168-4634-ad4f-52fd764a843f',
    },
    2: {
        name: 'Chain Cube 2048',
        appToken: 'd1690a07-3780-4068-810f-9b5bbf2931b2',
        promoId: 'b4170868-cef0-424f-8eb9-be0622e8e8e3',
    },
    3: {
        name: 'My Clone Army',
        appToken: '74ee0b5b-775e-4bee-974f-63e7f4d5bacb',
        promoId: 'fe693b26-b342-4159-8808-15e3ff7f8767',
    },
    4: {
        name: 'Train Miner',
        appToken: '82647f43-3f87-402d-88dd-09a90025313f',
        promoId: 'c4480ac7-e178-4973-8061-9ed5b2e17954',
    }
};

function generateClientId() {
    const timestamp = Date.now();
    const randomNumbers = Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join('');
    return `${timestamp}-${randomNumbers}`;
}

async function loginClient(game) {
    const clientId = generateClientId();
    const url = 'https://api.gamepromo.io/promo/login-client';
    const data = {
        appToken: game.appToken,
        clientId: clientId,
        clientOrigin: 'deviceid'
    };
    const headers = {
        'Content-Type': 'application/json; charset=utf-8',
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result.clientToken;
    } catch (error) {
        console.error('Error logging in client:', error.message);
        await new Promise(resolve => setTimeout(resolve, 5000));
        return loginClient(game); // Retry on error
    }
}

async function registerEvent(game, token) {
    const eventId = generateRandomUUID();
    const url = 'https://api.gamepromo.io/promo/register-event';
    const data = {
        promoId: game.promoId,
        eventId: eventId,
        eventOrigin: 'undefined'
    };
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
    };
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (!result.hasCode) {
            console.log('Retry register event');
            await new Promise(resolve => setTimeout(resolve, 5000));
            return registerEvent(game, token); // Retry on error
        } else {
            return true;
        }
    } catch (error) {
        console.error('Error registering event:', error.message);
        await new Promise(resolve => setTimeout(resolve, 5000));
        return registerEvent(game, token); // Retry on error
    }
}

async function createCode(game, token) {
    let response;
    do {
        try {
            const url = 'https://api.gamepromo.io/promo/create-code';
            const data = {
                promoId: game.promoId
            };
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json; charset=utf-8',
            };
            response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.promoCode) {
                return result.promoCode;
            }
        } catch (error) {
            console.error('Error creating code:', error.message);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } while (!response || !response.promoCode); // Repeat request if no promo code returned
}

function generateRandomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
              v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

async function startProcess() {
    const startButton = document.getElementById('startButton');
    startButton.disabled = true; // Disable the button

    const progressBarFill = document.getElementById('progressBarFill');
    const codeList = document.getElementById('codeList');
    const gameSelect = document.getElementById('gameSelect');
    const keyCountInput = document.getElementById('keyCount');
    const selectedGame = parseInt(gameSelect.value);
    const keyCount = parseInt(keyCountInput.value);

    const game = games[selectedGame];

    codeList.innerHTML = ''; // Clear previous codes

    // Start generating codes in parallel
    const tasks = [];
    for (let i = 0; i < keyCount; i++) {
        tasks.push((async (index) => {
            try {
                const token = await loginClient(game);
                await registerEvent(game, token);
                const codeData = await createCode(game, token);
                // Display the code
                codeList.innerHTML += `Code ${index + 1}: ${codeData}<br>`;
            } catch (error) {
                codeList.innerHTML += `Process ${index + 1} - Error: ${error.message}<br>`;
            }
            // Update the progress bar
            const progress = ((index + 1) / keyCount) * 100;
            progressBarFill.style.width = `${progress}%`;
            progressBarFill.textContent = `${Math.round(progress)}%`;
        })(i));
    }

    await Promise.all(tasks); // Wait for all tasks to complete
    progressBarFill.style.width = '100%';
    progressBarFill.textContent = '100%';
    startButton.disabled = false; // Enable the button
}
