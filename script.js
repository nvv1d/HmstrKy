const _0x86f61e=_0x3534;(function(_0x488c9c,_0x22461e){const _0x4d8006=_0x3534,_0x3809c3=_0x488c9c();while(!![]){try{const _0x54513a=-parseInt(_0x4d8006(0x100))/0x1+parseInt(_0x4d8006(0xed))/0x2+-parseInt(_0x4d8006(0x158))/0x3+-parseInt(_0x4d8006(0x11d))/0x4*(parseInt(_0x4d8006(0x114))/0x5)+parseInt(_0x4d8006(0x11a))/0x6*(-parseInt(_0x4d8006(0x116))/0x7)+parseInt(_0x4d8006(0x133))/0x8*(-parseInt(_0x4d8006(0x12a))/0x9)+-parseInt(_0x4d8006(0x151))/0xa*(-parseInt(_0x4d8006(0x117))/0xb);if(_0x54513a===_0x22461e)break;else _0x3809c3['push'](_0x3809c3['shift']());}catch(_0x4186fb){_0x3809c3['push'](_0x3809c3['shift']());}}}(_0x310b,0xaa783));const defaultLanguage=document[_0x86f61e(0x10a)]['getAttribute'](_0x86f61e(0x153)),gamePromoConfigs={'MyCloneArmy':{'appToken':_0x86f61e(0x14f),'promoId':_0x86f61e(0x118),'eventsDelay':0x1d4c0,'attemptsNumber':0xb},'ChainCube2048':{'appToken':'d1690a07-3780-4068-810f-9b5bbf2931b2','promoId':_0x86f61e(0x12e),'eventsDelay':0x4e20,'attemptsNumber':0xa},'TrainMiner':{'appToken':_0x86f61e(0x11c),'promoId':_0x86f61e(0x113),'eventsDelay':0x4e20,'attemptsNumber':0xa},'BikeRide3D':{'appToken':_0x86f61e(0x159),'promoId':'43e35910-c168-4634-ad4f-52fd764a843f','eventsDelay':0x4e20,'attemptsNumber':0x16},'MergeAway':{'appToken':_0x86f61e(0xe4),'promoId':_0x86f61e(0x13d),'eventsDelay':0x4e20,'attemptsNumber':0xa},'TwerkRace':{'appToken':_0x86f61e(0x144),'promoId':_0x86f61e(0x144),'eventsDelay':0x4e20,'attemptsNumber':0xa},'Polysphere':{'appToken':_0x86f61e(0x127),'promoId':'2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71','eventsDelay':0x4e20,'attemptsNumber':0x14}};let currentAppConfig=gamePromoConfigs[_0x86f61e(0x150)];var currentLanguage,keygenActive=![];document[_0x86f61e(0xf6)](_0x86f61e(0x108),()=>{const _0x3459e6=_0x86f61e,_0x433eee=document[_0x3459e6(0x156)](_0x3459e6(0x130)),_0x349942=document[_0x3459e6(0x156)](_0x3459e6(0x10b)),_0x3eca4a=Array[_0x3459e6(0x13b)](_0x433eee[_0x3459e6(0x12c)])[_0x3459e6(0xfa)](_0x4658eb=>_0x4658eb[_0x3459e6(0xde)]),_0x2cc209=localStorage[_0x3459e6(0x137)](_0x3459e6(0xfe)),_0x493f56=_0x2cc209||navigator[_0x3459e6(0xfe)]||navigator[_0x3459e6(0x14a)],_0x5da24f=_0x3eca4a[_0x3459e6(0x13f)](_0x493f56)?_0x493f56:defaultLanguage;switchLanguage(_0x5da24f),_0x349942['addEventListener'](_0x3459e6(0xe6),()=>{const _0x3ed002=_0x3459e6,_0x49b749=_0x349942[_0x3ed002(0xde)];currentAppConfig=gamePromoConfigs[_0x49b749];});});async function loadTranslations(_0x11b69c){const _0xa78e21=_0x86f61e;try{const _0x3ce8aa=await fetch('locales/'+_0x11b69c+'.json');if(!_0x3ce8aa['ok'])throw new Error('Failed\x20to\x20load\x20translations:\x20'+_0x3ce8aa[_0xa78e21(0x15b)]);return await _0x3ce8aa[_0xa78e21(0x10e)]();}catch(_0x5d9c16){console[_0xa78e21(0x135)](_0xa78e21(0x13c),_0x5d9c16),alert('Failed\x20to\x20load\x20translations.\x20Check\x20the\x20console\x20for\x20details.');throw _0x5d9c16;}}async function getTranslation(_0x1b8c25){const _0x4c9290=await loadTranslations(currentLanguage);return _0x4c9290[_0x1b8c25]||_0x1b8c25;}function applyTranslations(_0x26be69){const _0xaaa71a=_0x86f61e;document['querySelector']('h1')[_0xaaa71a(0x129)]=_0x26be69['title'],document[_0xaaa71a(0x156)](_0xaaa71a(0x110))[_0xaaa71a(0x129)]=keygenActive?_0x26be69[_0xaaa71a(0x107)]+document[_0xaaa71a(0x156)](_0xaaa71a(0xef))[_0xaaa71a(0xde)]:_0x26be69[_0xaaa71a(0x104)],document[_0xaaa71a(0x156)](_0xaaa71a(0x139))[_0xaaa71a(0x129)]=_0x26be69[_0xaaa71a(0x10c)],document[_0xaaa71a(0x156)](_0xaaa71a(0x109))[_0xaaa71a(0x129)]=_0x26be69[_0xaaa71a(0x109)],document[_0xaaa71a(0x156)](_0xaaa71a(0x101))[_0xaaa71a(0x129)]=_0x26be69[_0xaaa71a(0x11f)],document[_0xaaa71a(0x156)](_0xaaa71a(0xea))[_0xaaa71a(0x129)]=_0x26be69[_0xaaa71a(0x14b)],document[_0xaaa71a(0x156)](_0xaaa71a(0x106))['innerText']=_0x26be69[_0xaaa71a(0xf7)],document[_0xaaa71a(0x146)](_0xaaa71a(0xfd))[_0xaaa71a(0x132)](_0x3bd38e=>{const _0x5ec2fd=_0xaaa71a;_0x3bd38e[_0x5ec2fd(0x129)]=_0x26be69[_0x5ec2fd(0xdf)]||_0x5ec2fd(0x149);});}async function switchLanguage(_0x3f4473){const _0x9d9ce5=_0x86f61e;try{const _0x42ec5e=await loadTranslations(_0x3f4473);applyTranslations(_0x42ec5e),currentLanguage=_0x3f4473,localStorage[_0x9d9ce5(0x13a)](_0x9d9ce5(0xfe),_0x3f4473),languageSelect[_0x9d9ce5(0xde)]=_0x3f4473;}catch(_0x2d21bb){console[_0x9d9ce5(0x135)]('Error\x20switching\x20language:',_0x2d21bb);}}languageSelect[_0x86f61e(0xf6)](_0x86f61e(0xe6),()=>{const _0x52c78f=languageSelect['value'];switchLanguage(_0x52c78f);}),document['getElementById']('startBtn')[_0x86f61e(0xf6)]('click',async()=>{const _0x35914e=_0x86f61e,_0x5a23ac=document[_0x35914e(0x156)](_0x35914e(0x139)),_0x48041b=document[_0x35914e(0x156)]('keyCountSelect'),_0x13c84c=document[_0x35914e(0x156)](_0x35914e(0x110)),_0xa79a0f=document[_0x35914e(0x156)]('progressContainer'),_0x55fa46=document['getElementById'](_0x35914e(0x15a)),_0x3e1791=document[_0x35914e(0x156)](_0x35914e(0xe7)),_0x3a076e=document[_0x35914e(0x156)](_0x35914e(0xf1)),_0x2bdf4e=document[_0x35914e(0x156)]('keysList'),_0x560839=document[_0x35914e(0x156)](_0x35914e(0xea)),_0x42c6fb=document['getElementById'](_0x35914e(0x109)),_0x526cd4=parseInt(_0x48041b[_0x35914e(0xde)]);document[_0x35914e(0x156)]('gameSelect')[_0x35914e(0xf8)]=!![],_0x55fa46[_0x35914e(0x140)][_0x35914e(0x120)]='0%',_0x3e1791['innerText']='0%',_0xa79a0f[_0x35914e(0x128)][_0x35914e(0x105)](_0x35914e(0x154)),_0x3a076e[_0x35914e(0x128)][_0x35914e(0x111)](_0x35914e(0x154)),_0x42c6fb[_0x35914e(0x128)]['add'](_0x35914e(0x154)),_0x2bdf4e[_0x35914e(0x124)]='',_0x48041b[_0x35914e(0x128)][_0x35914e(0x111)](_0x35914e(0x154)),_0x13c84c['innerText']=await getTranslation(_0x35914e(0x107))+_0x526cd4,_0x5a23ac[_0x35914e(0x128)]['add'](_0x35914e(0x154)),_0x560839['classList'][_0x35914e(0x111)](_0x35914e(0x154)),_0x5a23ac[_0x35914e(0xf8)]=!![];let _0x19b14f=0x0;keygenActive=!![];const _0x4a0f66=_0x564ebc=>{const _0x238f77=0xa,_0x2d512d=_0x564ebc/_0x238f77;let _0x3bad3e=0x0;const _0x3172e8=()=>{const _0x5137af=_0x3534;if(!keygenActive)return;_0x3bad3e<_0x238f77&&(_0x19b14f+=_0x2d512d,_0x55fa46[_0x5137af(0x140)][_0x5137af(0x120)]=_0x19b14f+'%',_0x3e1791['innerText']=Math['round'](_0x19b14f)+'%',_0x3bad3e++,setTimeout(_0x3172e8,0x7d0/_0x238f77+Math[_0x5137af(0xe8)]()*0x3e8));};_0x3172e8();},_0x1533e2=async()=>{const _0x105abd=_0x35914e,_0x3c222f=generateClientId();let _0x3afc72;try{_0x3afc72=await login(_0x3c222f);}catch(_0x141cf6){return alert(_0x105abd(0x12b)+_0x141cf6[_0x105abd(0x143)]),_0x5a23ac['disabled']=![],null;}for(let _0x5eab3b=0x0;_0x5eab3b<currentAppConfig[_0x105abd(0xf4)];_0x5eab3b++){await sleep(currentAppConfig[_0x105abd(0x14c)]*delayRandom());const _0x136d24=await emulateProgress(_0x3afc72);_0x4a0f66(0x64/currentAppConfig[_0x105abd(0xf4)]/_0x526cd4);if(_0x136d24)break;}try{const _0x510bd1=await generateKey(_0x3afc72);return _0x510bd1;}catch(_0x335c83){return alert('Failed\x20to\x20generate\x20key:\x20'+_0x335c83[_0x105abd(0x143)]),null;}},_0x5e1695=await Promise[_0x35914e(0x145)](Array['from']({'length':_0x526cd4},_0x1533e2));keygenActive=![],_0x55fa46[_0x35914e(0x140)][_0x35914e(0x120)]=_0x35914e(0xe2),_0x3e1791[_0x35914e(0x129)]=_0x35914e(0xe2);if(_0x5e1695[_0x35914e(0xf3)]>0x1){const _0x441ba8=_0x5e1695[_0x35914e(0xe0)](_0x513783=>_0x513783)[_0x35914e(0xfa)](async(_0x58330b,_0x5d7b3a)=>{const _0x14dfce=_0x35914e,_0xfc6104=await getTranslation(_0x14dfce(0xdf));return'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22key-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22key-number\x22>'+(_0x5d7b3a+0x1)+'</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20value=\x22'+_0x58330b+_0x14dfce(0x121)+_0x58330b+'\x22>'+_0xfc6104+_0x14dfce(0xdd);}),_0x228f70=await Promise[_0x35914e(0x145)](_0x441ba8);_0x2bdf4e['innerHTML']=_0x228f70[_0x35914e(0xff)](''),_0x560839[_0x35914e(0x128)]['remove'](_0x35914e(0x154));}else _0x5e1695[_0x35914e(0xf3)]===0x1&&(_0x2bdf4e[_0x35914e(0x124)]=_0x35914e(0x122)+_0x5e1695[0x0]+_0x35914e(0x125)+_0x5e1695[0x0]+'\x22>'+await getTranslation(_0x35914e(0xdf))+'</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20');_0x3a076e['classList'][_0x35914e(0x105)](_0x35914e(0x154)),_0x42c6fb['classList'][_0x35914e(0x105)](_0x35914e(0x154)),_0x13c84c['innerText']=await getTranslation(_0x35914e(0x104)),document['getElementById'](_0x35914e(0x10b))['disabled']=![],document['querySelectorAll'](_0x35914e(0xfd))[_0x35914e(0x132)](_0x1d7bb1=>{const _0xf6cda4=_0x35914e;_0x1d7bb1[_0xf6cda4(0xf6)](_0xf6cda4(0xe5),_0x497865=>{const _0x466d21=_0xf6cda4,_0x25207e=_0x497865[_0x466d21(0x14e)]['getAttribute'](_0x466d21(0xfb));navigator[_0x466d21(0x147)][_0x466d21(0xee)](_0x25207e)['then'](async()=>{const _0x352a4b=_0x466d21;_0x497865[_0x352a4b(0x14e)][_0x352a4b(0x129)]=await getTranslation(_0x352a4b(0x13e)),_0x497865[_0x352a4b(0x14e)]['style'][_0x352a4b(0x155)]=_0x352a4b(0xf0),setTimeout(async()=>{const _0x55e021=_0x352a4b;_0x497865['target'][_0x55e021(0x129)]=await getTranslation(_0x55e021(0xdf)),_0x497865[_0x55e021(0x14e)][_0x55e021(0x140)][_0x55e021(0x155)]='#6a0080';},0x7d0);});});}),_0x560839['addEventListener'](_0x35914e(0xe5),async _0xb9f548=>{const _0xb30411=_0x35914e,_0x35033f=_0x5e1695[_0xb30411(0xe0)](_0x4fdc4b=>_0x4fdc4b)[_0xb30411(0xff)]('\x0a');navigator[_0xb30411(0x147)][_0xb30411(0xee)](_0x35033f)[_0xb30411(0xeb)](async()=>{const _0x2fa3ed=_0xb30411;_0xb9f548[_0x2fa3ed(0x14e)][_0x2fa3ed(0x129)]=await getTranslation('allKeysCopied'),_0xb9f548['target'][_0x2fa3ed(0x140)]['backgroundColor']=_0x2fa3ed(0xf0),setTimeout(async()=>{const _0xaecf11=_0x2fa3ed;_0xb9f548[_0xaecf11(0x14e)][_0xaecf11(0x129)]=await getTranslation(_0xaecf11(0x14b)),_0xb9f548['target'][_0xaecf11(0x140)][_0xaecf11(0x155)]='#6a0080';},0x7d0);});}),_0x5a23ac['classList'][_0x35914e(0x105)]('hidden'),_0x48041b['classList']['remove'](_0x35914e(0x154)),_0x5a23ac[_0x35914e(0xf8)]=![];}),document[_0x86f61e(0x156)](_0x86f61e(0x101))[_0x86f61e(0xf6)](_0x86f61e(0xe5),()=>{const _0x2c83df=_0x86f61e;window[_0x2c83df(0x103)]['href']=_0x2c83df(0x11b);});function _0x3534(_0x20063a,_0x22041e){const _0x310bb0=_0x310b();return _0x3534=function(_0x3534e7,_0x30d851){_0x3534e7=_0x3534e7-0xdd;let _0x3615d1=_0x310bb0[_0x3534e7];return _0x3615d1;},_0x3534(_0x20063a,_0x22041e);}function generateClientId(){const _0x1b3300=_0x86f61e,_0x47e993=Date['now'](),_0x250d32=Array[_0x1b3300(0x13b)]({'length':0x13},()=>Math[_0x1b3300(0x134)](Math[_0x1b3300(0xe8)]()*0xa))[_0x1b3300(0xff)]('');return _0x47e993+'-'+_0x250d32;}async function login(_0x3250f6){const _0x212632=_0x86f61e,_0x4186a3=await fetch('https://api.gamepromo.io/promo/login-client',{'method':_0x212632(0xf5),'headers':{'Content-Type':_0x212632(0xec)},'body':JSON['stringify']({'appToken':currentAppConfig[_0x212632(0x148)],'clientId':_0x3250f6,'clientOrigin':'deviceid'})}),_0x3c1854=await _0x4186a3[_0x212632(0x10e)]();if(!_0x4186a3['ok']){if(_0x3c1854[_0x212632(0xfc)]==_0x212632(0xf9))throw new Error(_0x212632(0x112));else throw new Error(_0x3c1854[_0x212632(0x126)]||_0x212632(0xe3));}return _0x3c1854[_0x212632(0x10f)];}function _0x310b(){const _0x5952f5=['10xtOqKk','function','lang','hidden','backgroundColor','getElementById','stringify','2735130LKYuSu','d28721be-fd2d-4b45-869e-9f253b554e50','progressBar','statusText','</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','value','copyKeyButton','filter','crypto','100%','Failed\x20to\x20log\x20in','8d1cc2ad-e097-4b86-90ef-7a27e19fb833','click','change','progressText','random','crypto.getRandomValues\x20not\x20supported.\x20Falling\x20back\x20to\x20a\x20less\x20secure\x20method.','copyAllBtn','then','application/json','2279462DxyJcU','writeText','keyCountSelect','#28a745','keyContainer','Failed\x20to\x20generate\x20key','length','attemptsNumber','POST','addEventListener','selectGameLabel','disabled','TooManyIpRequest','map','data-key','error_code','.copyKeyBtn','language','join','798053ZgEAWA','creatorChannelBtn','Bearer\x20','location','selectKeyCountLabel','remove','gameSelectLabel','selectKeyCountLabel_selected','DOMContentLoaded','generatedKeysTitle','documentElement','gameSelect','generateButton','getRandomValues','json','clientToken','keyCountLabel','add','You\x20have\x20reached\x20the\x20rate\x20limit.\x20Please\x20wait\x20a\x20few\x20minutes\x20and\x20try\x20again.','c4480ac7-e178-4973-8061-9ed5b2e17954','25105LVxiEb','warn','777dvuBgY','27257263RvsCHU','fe693b26-b342-4159-8808-15e3ff7f8767','crypto.randomUUID()\x20failed,\x20falling\x20back\x20to\x20old\x20method.','34026CALotO','https://t.me/pdosi_project','82647f43-3f87-402d-88dd-09a90025313f','348yXROvS','https://api.gamepromo.io/promo/register-event','footerButton','width','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22copyKeyBtn\x20copy-button\x22\x20data-key=\x22','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22key-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22key-number\x22>1</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20value=\x22','padStart','innerHTML','\x22\x20readonly>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22copyKeyBtn\x20copy-button\x22\x20data-key=\x22','error_message','2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71','classList','innerText','2115Fliycl','Failed\x20to\x20log\x20in:\x20','options','hasCode','b4170868-cef0-424f-8eb9-be0622e8e8e3','undefined','languageSelect','msCrypto','forEach','4880yGUzDE','floor','error','toString','getItem','promoCode','startBtn','setItem','from','Error\x20loading\x20translations:','dc128d28-c45b-411c-98ff-ac7726fbaea4','keyCopied','includes','style','slice','randomUUID','message','61308365-9d16-4040-8bb0-2f4a4c69074c','all','querySelectorAll','clipboard','appToken','Copy\x20Key','userLanguage','copyAllKeysButton','eventsDelay','promoId','target','74ee0b5b-775e-4bee-974f-63e7f4d5bacb','MyCloneArmy'];_0x310b=function(){return _0x5952f5;};return _0x310b();}function generateUUID(){const _0x2595cf=_0x86f61e;if(typeof crypto[_0x2595cf(0x142)]===_0x2595cf(0x152))try{return crypto['randomUUID']();}catch(_0x3e265b){console[_0x2595cf(0x115)](_0x2595cf(0x119));}const _0x4da5c3=window[_0x2595cf(0xe1)]||window[_0x2595cf(0x131)];if(_0x4da5c3&&_0x4da5c3[_0x2595cf(0x10d)]){const _0x43c5cf=new Uint8Array(0x10);return _0x4da5c3[_0x2595cf(0x10d)](_0x43c5cf),_0x43c5cf[0x6]=_0x43c5cf[0x6]&0xf|0x40,_0x43c5cf[0x8]=_0x43c5cf[0x8]&0x3f|0x80,[_0x43c5cf['slice'](0x0,0x4)[_0x2595cf(0xfa)](_0xba8641=>_0xba8641[_0x2595cf(0x136)](0x10)[_0x2595cf(0x123)](0x2,'0'))[_0x2595cf(0xff)](''),_0x43c5cf[_0x2595cf(0x141)](0x4,0x6)['map'](_0x56d67a=>_0x56d67a[_0x2595cf(0x136)](0x10)[_0x2595cf(0x123)](0x2,'0'))[_0x2595cf(0xff)](''),_0x43c5cf[_0x2595cf(0x141)](0x6,0x8)[_0x2595cf(0xfa)](_0x444c45=>_0x444c45[_0x2595cf(0x136)](0x10)[_0x2595cf(0x123)](0x2,'0'))['join'](''),_0x43c5cf[_0x2595cf(0x141)](0x8,0xa)[_0x2595cf(0xfa)](_0x158c61=>_0x158c61[_0x2595cf(0x136)](0x10)[_0x2595cf(0x123)](0x2,'0'))[_0x2595cf(0xff)](''),_0x43c5cf[_0x2595cf(0x141)](0xa)[_0x2595cf(0xfa)](_0x1219e3=>_0x1219e3[_0x2595cf(0x136)](0x10)[_0x2595cf(0x123)](0x2,'0'))[_0x2595cf(0xff)]('')]['join']('-');}else return console[_0x2595cf(0x115)](_0x2595cf(0xe9)),'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'['replace'](/[xy]/g,function(_0x52ce65){const _0x53862b=_0x2595cf;var _0x575be1=Math[_0x53862b(0xe8)]()*0x10|0x0,_0x4db9b0=_0x52ce65==='x'?_0x575be1:_0x575be1&0x3|0x8;return _0x4db9b0['toString'](0x10);});}async function emulateProgress(_0x1266a6){const _0x5cc3df=_0x86f61e,_0x1e5631=await fetch(_0x5cc3df(0x11e),{'method':_0x5cc3df(0xf5),'headers':{'Content-Type':_0x5cc3df(0xec),'Authorization':_0x5cc3df(0x102)+_0x1266a6},'body':JSON[_0x5cc3df(0x157)]({'promoId':currentAppConfig[_0x5cc3df(0x14d)],'eventId':generateUUID(),'eventOrigin':_0x5cc3df(0x12f)})}),_0x95ecf8=await _0x1e5631[_0x5cc3df(0x10e)]();return _0x95ecf8[_0x5cc3df(0x12d)];}async function generateKey(_0x4d4140){const _0x5293f5=_0x86f61e,_0x224ba5=await fetch('https://api.gamepromo.io/promo/create-code',{'method':_0x5293f5(0xf5),'headers':{'Content-Type':'application/json','Authorization':_0x5293f5(0x102)+_0x4d4140},'body':JSON[_0x5293f5(0x157)]({'promoId':currentAppConfig[_0x5293f5(0x14d)]})}),_0x540bd4=await _0x224ba5[_0x5293f5(0x10e)]();if(!_0x224ba5['ok'])throw new Error(_0x540bd4[_0x5293f5(0x126)]||_0x5293f5(0xf2));return _0x540bd4[_0x5293f5(0x138)];}function sleep(_0x10c812){return new Promise(_0x8a15a7=>setTimeout(_0x8a15a7,_0x10c812));}function delayRandom(){const _0x1e0d59=_0x86f61e;return Math[_0x1e0d59(0xe8)]()/0x3+0x1;}
