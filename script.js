    const games = {
        1: {
            name: 'Chain Cube 2048',
            appToken: 'd1690a07-3780-4068-810f-9b5bbf2931b2',
            promoId: 'b4170868-cef0-424f-8eb9-be0622e8e8e3',
        },
        2: {
            name: 'Train Miner',
            appToken: '82647f43-3f87-402d-88dd-09a90025313f',
            promoId: 'c4480ac7-e178-4973-8061-9ed5b2e17954',
        },
        3: {
            name: 'Merge Away',
            appToken: '8d1cc2ad-e097-4b86-90ef-7a27e19fb833',
            promoId: 'dc128d28-c45b-411c-98ff-ac7726fbaea4',
        },
        4: {
            name: 'Twerk Race 3D',
            appToken: '61308365-9d16-4040-8bb0-2f4a4c69074c',
            promoId: '61308365-9d16-4040-8bb0-2f4a4c69074c',
        },
        5: {
            name: 'Polysphere',
            appToken: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
            promoId: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
        },
        6: {
            name: 'Mow and Trim',
            appToken: 'ef319a80-949a-492e-8ee0-424fb5fc20a6',
            promoId: 'ef319a80-949a-492e-8ee0-424fb5fc20a6',
        },
        7: {
            name: 'Zoopolis',
            appToken: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
            promoId: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
        },
        8: {
            name: 'Fluff Crusade',
            appToken: '112887b0-a8af-4eb2-ac63-d82df78283d9',
            promoId: '112887b0-a8af-4eb2-ac63-d82df78283d9',
        },
        9: {
            name: 'Tile Trio',
            appToken: 'e68b39d2-4880-4a31-b3aa-0393e7df10c7',
            promoId: 'e68b39d2-4880-4a31-b3aa-0393e7df10c7',
        },
        10: {
            name: 'Stone Age',
            appToken: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
            promoId: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
        },
        11: {
            name: 'BOUNC',
            appToken: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
            promoId: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
        },
        12: {
            name: 'kir',
            appToken: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
            promoId: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
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
            await new Promise(resolve => setTimeout(resolve, game.interval * 1000)); // Wait for the specified interval before retrying
            return registerEvent(game, token); // Retry on error
        } else {
            return true;
        }
    } catch (error) {
        console.error('Error registering event:', error.message);
        await new Promise(resolve => setTimeout(resolve, game.interval * 1000)); // Wait for the specified interval before retrying
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
            await new Promise(resolve => setTimeout(resolve, game.interval * 1000)); // Wait for the specified interval before retrying
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
                codeList.innerHTML += `${codeData}<br>`;
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
