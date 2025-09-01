/* script.js
   Komplettes Spiel-Backend (LocalStorage), UI-Helper-Funktionen und Mechaniken:
   - Login / Register
   - Per-user save (localStorage key: user_<username>)
   - 75 plants, 5 field types (normal, water, night, sand, greenhouse)
   - Shop: Seeds, Wasser (Tonnen), Dünger
   - Field page: 5x3 Grid, plant seeds, harvest, apply fertilizer, clear blocked/spoiled
   - AFK support: plantedAt timestamp => reift unabhängig vom Spiel-Tab
   - Offline events: beim Laden werden zufällige Events (spoiled/rock) angewendet basierend auf Offline-Dauer
   - Runtime events: ticker erzeugt gelegentlich Events
   - Weltmarkt: täglich ein Lieblingsitem mit +50% Verkaufspreis
   - Backup Export/Import (JSON)
   - Leveling: XP, Level Up schaltet Felder frei
   - Beim Ernten: Chance auf Seed-Drop, damit man "selbst Seeds erzeugen kann"
*/

// ---------------------- PLANTS (75) ----------------------
// id: 1..75, name, fieldType, seedCost, sellPrice, growthSec, waterReq
const PLANTS = [
  // normal 1-15
  {id:1,name:"Kresse",fieldType:"normal",seedCost:1,sellPrice:3,growthSec:30,waterReq:1},
  {id:2,name:"Radieschen",fieldType:"normal",seedCost:2,sellPrice:6,growthSec:60,waterReq:1},
  {id:3,name:"Weizen",fieldType:"normal",seedCost:3,sellPrice:9,growthSec:120,waterReq:1},
  {id:4,name:"Mais",fieldType:"normal",seedCost:5,sellPrice:15,growthSec:180,waterReq:1},
  {id:5,name:"Kartoffel",fieldType:"normal",seedCost:12,sellPrice:36,growthSec:420,waterReq:2},
  {id:6,name:"Zwiebel",fieldType:"normal",seedCost:15,sellPrice:45,growthSec:600,waterReq:2},
  {id:7,name:"Tomate",fieldType:"normal",seedCost:20,sellPrice:60,growthSec:720,waterReq:2},
  {id:8,name:"Gurke",fieldType:"normal",seedCost:25,sellPrice:75,growthSec:900,waterReq:2},
  {id:9,name:"Kürbis",fieldType:"normal",seedCost:30,sellPrice:90,growthSec:1200,waterReq:3},
  {id:10,name:"Paprika",fieldType:"normal",seedCost:40,sellPrice:120,growthSec:1500,waterReq:3},
  {id:11,name:"Erbse",fieldType:"normal",seedCost:50,sellPrice:150,growthSec:1800,waterReq:3},
  {id:12,name:"Erdbeere",fieldType:"normal",seedCost:60,sellPrice:180,growthSec:2400,waterReq:3},
  {id:13,name:"Himbeere",fieldType:"normal",seedCost:70,sellPrice:210,growthSec:3000,waterReq:3},
  {id:14,name:"Apfelbaum",fieldType:"normal",seedCost:100,sellPrice:300,growthSec:5400,waterReq:4},
  {id:15,name:"Birne",fieldType:"normal",seedCost:120,sellPrice:360,growthSec:7200,waterReq:4},

  // water 16-30
  {id:16,name:"Reis",fieldType:"water",seedCost:200,sellPrice:600,growthSec:10800,waterReq:5},
  {id:17,name:"Lotus",fieldType:"water",seedCost:250,sellPrice:750,growthSec:14400,waterReq:6},
  {id:18,name:"Wasserkresse",fieldType:"water",seedCost:300,sellPrice:900,growthSec:18000,waterReq:6},
  {id:19,name:"Seerose",fieldType:"water",seedCost:350,sellPrice:1050,growthSec:21600,waterReq:7},
  {id:20,name:"Algen",fieldType:"water",seedCost:400,sellPrice:1200,growthSec:25200,waterReq:7},
  {id:21,name:"Bambus",fieldType:"water",seedCost:450,sellPrice:1350,growthSec:28800,waterReq:7},
  {id:22,name:"Wasabi",fieldType:"water",seedCost:500,sellPrice:1500,growthSec:32400,waterReq:8},
  {id:23,name:"Cranberry",fieldType:"water",seedCost:550,sellPrice:1650,growthSec:36000,waterReq:8},
  {id:24,name:"Preiselbeere",fieldType:"water",seedCost:600,sellPrice:1800,growthSec:39600,waterReq:8},
  {id:25,name:"Wasserminze",fieldType:"water",seedCost:650,sellPrice:1950,growthSec:43200,waterReq:8},
  {id:26,name:"Lotusblüte",fieldType:"water",seedCost:700,sellPrice:2100,growthSec:46800,waterReq:9},
  {id:27,name:"Teichrose",fieldType:"water",seedCost:750,sellPrice:2250,growthSec:50400,waterReq:9},
  {id:28,name:"Schilfrohr",fieldType:"water",seedCost:800,sellPrice:2400,growthSec:54000,waterReq:9},
  {id:29,name:"Seetang",fieldType:"water",seedCost:850,sellPrice:2550,growthSec:57600,waterReq:9},
  {id:30,name:"Lotusfrucht",fieldType:"water",seedCost:900,sellPrice:2700,growthSec:61200,waterReq:10},

  // night 31-45
  {id:31,name:"Mondblume",fieldType:"night",seedCost:200,sellPrice:600,growthSec:10800,waterReq:5},
  {id:32,name:"Fledermausblume",fieldType:"night",seedCost:250,sellPrice:750,growthSec:14400,waterReq:5},
  {id:33,name:"Nachtkerze",fieldType:"night",seedCost:300,sellPrice:900,growthSec:18000,waterReq:5},
  {id:34,name:"Alraune",fieldType:"night",seedCost:350,sellPrice:1050,growthSec:21600,waterReq:6},
  {id:35,name:"Nachtschatten",fieldType:"night",seedCost:400,sellPrice:1200,growthSec:25200,waterReq:6},
  {id:36,name:"Traumkraut",fieldType:"night",seedCost:450,sellPrice:1350,growthSec:28800,waterReq:6},
  {id:37,name:"Nachtorchidee",fieldType:"night",seedCost:500,sellPrice:1500,growthSec:32400,waterReq:6},
  {id:38,name:"Vampirrose",fieldType:"night",seedCost:550,sellPrice:1650,growthSec:36000,waterReq:7},
  {id:39,name:"Dämmerpilz",fieldType:"night",seedCost:600,sellPrice:1800,growthSec:39600,waterReq:7},
  {id:40,name:"Nebelblume",fieldType:"night",seedCost:650,sellPrice:1950,growthSec:43200,waterReq:7},
  {id:41,name:"Schattenkraut",fieldType:"night",seedCost:700,sellPrice:2100,growthSec:46800,waterReq:7},
  {id:42,name:"Geisterflor",fieldType:"night",seedCost:750,sellPrice:2250,growthSec:50400,waterReq:8},
  {id:43,name:"Sternenlilie",fieldType:"night",seedCost:800,sellPrice:2400,growthSec:54000,waterReq:8},
  {id:44,name:"Mondorchidee",fieldType:"night",seedCost:850,sellPrice:2550,growthSec:57600,waterReq:8},
  {id:45,name:"Traumblüte",fieldType:"night",seedCost:900,sellPrice:2700,growthSec:61200,waterReq:8},

  // sand 46-60
  {id:46,name:"Kaktus",fieldType:"sand",seedCost:200,sellPrice:600,growthSec:10800,waterReq:2},
  {id:47,name:"Agave",fieldType:"sand",seedCost:250,sellPrice:750,growthSec:14400,waterReq:2},
  {id:48,name:"Dattel",fieldType:"sand",seedCost:300,sellPrice:900,growthSec:18000,waterReq:2},
  {id:49,name:"Yucca",fieldType:"sand",seedCost:350,sellPrice:1050,growthSec:21600,waterReq:2},
  {id:50,name:"Aloe Vera",fieldType:"sand",seedCost:400,sellPrice:1200,growthSec:25200,waterReq:2},
  {id:51,name:"Drachenfrucht",fieldType:"sand",seedCost:450,sellPrice:1350,growthSec:28800,waterReq:3},
  {id:52,name:"Kakteenblüte",fieldType:"sand",seedCost:500,sellPrice:1500,growthSec:32400,waterReq:3},
  {id:53,name:"Wüstenrose",fieldType:"sand",seedCost:550,sellPrice:1650,growthSec:36000,waterReq:3},
  {id:54,name:"Sandlilie",fieldType:"sand",seedCost:600,sellPrice:1800,growthSec:39600,waterReq:3},
  {id:55,name:"Salbei",fieldType:"sand",seedCost:650,sellPrice:1950,growthSec:43200,waterReq:3},
  {id:56,name:"Thymian",fieldType:"sand",seedCost:700,sellPrice:2100,growthSec:46800,waterReq:3},
  {id:57,name:"Rosmarin",fieldType:"sand",seedCost:750,sellPrice:2250,growthSec:50400,waterReq:3},
  {id:58,name:"Wüstengras",fieldType:"sand",seedCost:800,sellPrice:2400,growthSec:54000,waterReq:3},
  {id:59,name:"Dattelpalme",fieldType:"sand",seedCost:850,sellPrice:2550,growthSec:57600,waterReq:3},
  {id:60,name:"Sandlotus",fieldType:"sand",seedCost:900,sellPrice:2700,growthSec:61200,waterReq:3},

  // greenhouse 61-75
  {id:61,name:"Vanille",fieldType:"greenhouse",seedCost:500,sellPrice:1500,growthSec:32400,waterReq:4},
  {id:62,name:"Zimt",fieldType:"greenhouse",seedCost:550,sellPrice:1650,growthSec:36000,waterReq:4},
  {id:63,name:"Kakao",fieldType:"greenhouse",seedCost:600,sellPrice:1800,growthSec:39600,waterReq:4},
  {id:64,name:"Kaffee",fieldType:"greenhouse",seedCost:650,sellPrice:1950,growthSec:43200,waterReq:4},
  {id:65,name:"Tee",fieldType:"greenhouse",seedCost:700,sellPrice:2100,growthSec:46800,waterReq:4},
  {id:66,name:"Ingwer",fieldType:"greenhouse",seedCost:750,sellPrice:2250,growthSec:50400,waterReq:4},
  {id:67,name:"Kurkuma",fieldType:"greenhouse",seedCost:800,sellPrice:2400,growthSec:54000,waterReq:4},
  {id:68,name:"Chili",fieldType:"greenhouse",seedCost:850,sellPrice:2550,growthSec:57600,waterReq:5},
  {id:69,name:"Basilikum",fieldType:"greenhouse",seedCost:900,sellPrice:2700,growthSec:61200,waterReq:5},
  {id:70,name:"Oregano",fieldType:"greenhouse",seedCost:950,sellPrice:2850,growthSec:64800,waterReq:5},
  {id:71,name:"Petersilie",fieldType:"greenhouse",seedCost:1000,sellPrice:3000,growthSec:68400,waterReq:5},
  {id:72,name:"Minze",fieldType:"greenhouse",seedCost:1050,sellPrice:3150,growthSec:72000,waterReq:5},
  {id:73,name:"Lavendel",fieldType:"greenhouse",seedCost:1100,sellPrice:3300,growthSec:75600,waterReq:5},
  {id:74,name:"Safran",fieldType:"greenhouse",seedCost:1200,sellPrice:3600,growthSec:79200,waterReq:6},
  {id:75,name:"Drachenbaum",fieldType:"greenhouse",seedCost:1500,sellPrice:4500,growthSec:86400,waterReq:6},
];

// helper maps
const PLANT_BY_ID = {};
PLANTS.forEach(p => PLANT_BY_ID[p.id] = p);
function plantsByField(ft) { return PLANTS.filter(p => p.fieldType === ft); }
function plantByName(name) { return PLANTS.find(p => p.name === name) || null; }

// ---------------------- Storage keys & helpers ----------------------
function userKey(user) { return 'user_' + user; }
function currentUser() { return localStorage.getItem('currentUser'); }
function loadUser(username) {
  if(!username) return null;
  const raw = localStorage.getItem(userKey(username));
  return raw ? JSON.parse(raw) : null;
}
function saveUser(username, data) {
  localStorage.setItem(userKey(username), JSON.stringify(data));
}
function getCurrentData() {
  const u = currentUser(); if(!u) return null;
  return loadUser(u);
}
function saveCurrent(data) {
  const u = currentUser(); if(!u) return;
  saveUser(u, data);
}

// ---------------------- Default new user ----------------------
function makeNewUser(pass) {
  // default starter package
  const fields = {};
  ['normal','water','night','sand','greenhouse'].forEach(ft=>{
    fields[ft] = Array(15).fill(null); // 5x3 = 15 cells
  });
  return {
    pass,
    gold: 100,
    xp: 0,
    level: 1,
    water: 20,       // Tonnen
    fertilizer: 1,   // sacks
    seeds: {},       // {plantId: count}
    plants: {},      // harvested plants: {plantId: count}
    fields,          // grid data
    createdAt: Date.now(),
    lastSync: Date.now()
  };
}

// ---------------------- LOGIN / REGISTER (used by index.html) ----------------------
function register() {
  const username = (document.getElementById('regUser') || {}).value || '';
  const pass = (document.getElementById('regPass') || {}).value || '';
  if (!username || !pass) { alert('Bitte Benutzername & Passwort angeben.'); return; }
  if (localStorage.getItem(userKey(username))) { alert('Benutzername existiert bereits.'); return; }
  const data = makeNewUser(pass);
  saveUser(username, data);
  localStorage.setItem('currentUser', username);
  location.href = 'startseite.html';
}
function login() {
  const username = (document.getElementById('loginUser') || {}).value || '';
  const pass = (document.getElementById('loginPass') || {}).value || '';
  const data = loadUser(username);
  if (!data || data.pass !== pass) { alert('Falscher Benutzername oder Passwort.'); return; }
  localStorage.setItem('currentUser', username);
  // update lastSync on login to now (prevents weird huge offline events)
  data.lastSync = Date.now();
  saveUser(username, data);
  location.href = 'startseite.html';
}

// ---------------------- WORLD-MARKET / DAILY FAVORITE ----------------------
// returns the plant name that is favorite today (rotating every 24h)
function getDailyFavoriteName() {
  // deterministic per UTC day
  const dayIndex = Math.floor(Date.now() / (24*60*60*1000));
  const all = PLANTS.map(p=>p.name);
  return all[dayIndex % all.length];
}
// price modifier for selling: if today's favorite -> +50%
function getSellPriceForPlantId(id) {
  const p = PLANT_BY_ID[id];
  if (!p) return 0;
  const fav = getDailyFavoriteName();
  if (p.name === fav) return Math.round(p.sellPrice * 1.5);
  return p.sellPrice;
}

// also expose friendly helper for shop page to display favorite
function getDailyFavoriteDisplay() { return getDailyFavoriteName(); }

// ---------------------- BACKUP EXPORT / IMPORT ----------------------
function exportBackup() {
  const u = currentUser(); if(!u) { alert('Kein Nutzer angemeldet.'); return; }
  const raw = localStorage.getItem(userKey(u));
  const blob = new Blob([raw], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${u}_farm_backup.json`;
  a.click();
}
function importBackup(evt) {
  const file = evt.target.files && evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const obj = JSON.parse(e.target.result);
      const u = currentUser();
      if (!u) { alert('Bitte zuerst einloggen.'); return; }
      // overwrite current user data with imported (simple behavior)
      localStorage.setItem(userKey(u), JSON.stringify(obj));
      alert('Backup importiert.');
      location.reload();
    } catch (err) {
      console.error(err);
      alert('Fehler beim Einlesen der Datei.');
    }
  };
  reader.readAsText(file);
}

// ---------------------- SHOP: Water & Fertilizer buy controls ----------------------
let _waterBuy = 0;
let _fertBuy = 0;
function changeWater(delta) {
  _waterBuy = Math.max(0, _waterBuy + delta);
  const el = document.getElementById('waterBuy');
  if (el) el.textContent = _waterBuy;
}
function buyWater() {
  const d = getCurrentData();
  if (!d) return;
  const costPerTon = 10; // 10 Gold per unit
  const cost = _waterBuy * costPerTon;
  if (cost <= 0) { alert('Wähle Menge > 0'); return; }
  if (d.gold < cost) { alert('Nicht genug Gold'); return; }
  d.gold -= cost;
  d.water = (d.water || 0) + _waterBuy;
  saveCurrent(d);
  _waterBuy = 0;
  document.getElementById('waterBuy').textContent = _waterBuy;
  loadShop();
  alert('Wasser gekauft.');
}
function changeFertilizer(delta) {
  _fertBuy = Math.max(0, _fertBuy + delta);
  const el = document.getElementById('fertBuy');
  if (el) el.textContent = _fertBuy;
}
function buyFertilizer() {
  const d = getCurrentData();
  if (!d) return;
  const costPerBag = 15; // gold
  const cost = _fertBuy * costPerBag;
  if (cost <= 0) { alert('Wähle Menge > 0'); return; }
  if (d.gold < cost) { alert('Nicht genug Gold'); return; }
  d.gold -= cost;
  d.fertilizer = (d.fertilizer || 0) + _fertBuy;
  saveCurrent(d);
  _fertBuy = 0;
  document.getElementById('fertBuy').textContent = _fertBuy;
  loadShop();
  alert('Dünger gekauft.');
}

// Seeds purchase in shop by plant id
function buySeedById(id) {
  const d = getCurrentData(); if(!d) return;
  const p = PLANT_BY_ID[id];
  if (!p) { alert('Ungültiges Saatgut.'); return; }
  if (d.gold < p.seedCost) { alert('Nicht genug Gold.'); return; }
  d.gold -= p.seedCost;
  d.seeds[id] = (d.seeds[id] || 0) + 1;
  saveCurrent(d);
  loadShop();
  alert(`${p.name} Saat gekauft.`);
}

// sell harvested plants (with world market bonus)
function sellHarvest(id, qty) {
  qty = Math.floor(qty || 1);
  const d = getCurrentData(); if(!d) return;
  if (!d.plants[id] || d.plants[id] < qty) { alert('Nicht genug geerntete Pflanzen.'); return; }
  const priceEach = getSellPriceForPlantId(id);
  const total = priceEach * qty;
  d.plants[id] -= qty;
  if (d.plants[id] <= 0) delete d.plants[id];
  d.gold += total;
  d.xp += Math.floor(total / 10);
  // leveling
  checkLevelUp(d);
  saveCurrent(d);
  loadShop();
  alert(`Verkauft ${qty} × ${PLANT_BY_ID[id].name} für ${total} Gold.`);
}

// ---------------------- LEVELING ----------------------
function checkLevelUp(data) {
  // simple leveling: XP threshold = level * 50
  while (data.xp >= data.level * 50) {
    data.xp -= data.level * 50;
    data.level += 1;
    // small reward on level-up
    data.gold += Math.floor(20 * data.level);
    alert(`Level Up! Du bist jetzt Level ${data.level}. Neue Felder wurden ggf. freigeschaltet.`);
  }
}

// ---------------------- AFK / Offline & Event Handling ----------------------
function ensureFieldsInit() {
  const d = getCurrentData();
  if (!d) return;
  ['normal','water','night','sand','greenhouse'].forEach(ft=>{
    if (!d.fields) d.fields = {};
    if (!d.fields[ft]) d.fields[ft] = Array(15).fill(null);
  });
  saveCurrent(d);
}

// When loading game or returning, apply offline events / mark lastSync
function applyOfflineEffects() {
  const u = currentUser(); if(!u) return;
  const d = getCurrentData(); if(!d) return;
  ensureFieldsInit();
  const prev = d.lastSync || Date.now();
  const now = Date.now();
  const ms = now - prev;
  const daysOffline = Math.floor(ms / (1000*60*60*24));
  // small chance per day to affect random cells
  const baseChancePerDay = 0.03; // 3% per day per cell
  if (daysOffline > 0) {
    for (let day=0; day<daysOffline; day++) {
      // iterate all fields/cells
      Object.keys(d.fields).forEach(ft => {
        d.fields[ft].forEach((cell, idx) => {
          if (Math.random() < baseChancePerDay) {
            // if planted and not mature => spoil
            if (cell && cell.status === 'planted' && !isCellMature(cell)) {
              d.fields[ft][idx] = { status: 'spoiled' };
            } else if (!cell) {
              // empty -> rock falls
              d.fields[ft][idx] = { status: 'blocked' };
            }
          }
        });
      });
    }
  }
  d.lastSync = now;
  saveCurrent(d);
}

// real-time ticker for small chance of events while playing
let _eventTickerHandle = null;
function startEventTicker() {
  if (_eventTickerHandle) return;
  _eventTickerHandle = setInterval(() => {
    const d = getCurrentData(); if(!d) return;
    if (Math.random() < 0.08) { // 8% every minute
      const ftypes = Object.keys(d.fields);
      const ft = ftypes[Math.floor(Math.random() * ftypes.length)];
      const idx = Math.floor(Math.random() * d.fields[ft].length);
      const cell = d.fields[ft][idx];
      if (!cell) {
        if (Math.random() < 0.6) {
          d.fields[ft][idx] = { status: 'blocked' };
          saveCurrent(d);
          // notify simple
          console.log(`Event: Stein auf ${ft}[${idx}]`);
        }
      } else if (cell.status === 'planted' && !isCellMature(cell)) {
        if (Math.random() < 0.5) {
          d.fields[ft][idx] = { status: 'spoiled' };
          saveCurrent(d);
          console.log(`Event: Pflanze verdorben auf ${ft}[${idx}]`);
        }
      }
    }
  }, 60*1000);
}

// ---------------------- CELL / PLANT HELPERS ----------------------
function isCellMature(cell) {
  if (!cell || cell.status !== 'planted') return false;
  const elapsed = (Date.now() - cell.plantedAt) / 1000;
  return elapsed >= cell.durationSec;
}
function cellProgressFraction(cell) {
  if (!cell || cell.status !== 'planted') return 0;
  const elapsed = (Date.now() - cell.plantedAt) / 1000;
  return Math.min(1, elapsed / cell.durationSec);
}

// ---------------------- FIELD PAGE LOGIC (field.html) ----------------------
function loadField() {
  const ft = localStorage.getItem('currentField') || 'normal';
  const d = getCurrentData(); if(!d) { location.href='index.html'; return; }
  ensureFieldsInit();
  applyOfflineEffects(); // apply offline events before rendering
  startEventTicker();

  // top info
  const goldEl = document.getElementById('gold');
  const xpEl = document.getElementById('xp');
  const lvlEl = document.getElementById('level');
  if (goldEl) goldEl.textContent = d.gold;
  if (xpEl) xpEl.textContent = d.xp;
  if (lvlEl) lvlEl.textContent = d.level;
  const fieldNameEl = document.getElementById('fieldName');
  if (fieldNameEl) fieldNameEl.textContent = `${ft.charAt(0).toUpperCase()+ft.slice(1)}-Feld`;

  // render grid (5x3)
  const grid = document.getElementById('grid');
  if (!grid) return;
  grid.innerHTML = '';
  // style grid cells based on field type in CSS; we set per-cell content
  d.fields[ft].forEach((cell, idx) => {
    const div = document.createElement('div');
    div.className = 'cell';
    // background color variation for field type (optional)
    if (ft === 'water') div.style.background = 'linear-gradient(#cceeff,#e6f7ff)';
    if (ft === 'night') div.style.background = 'linear-gradient(#dcd6ff,#f0edff)';
    if (ft === 'sand') div.style.background = 'linear-gradient(#fff0d6,#fff8e6)';
    if (ft === 'greenhouse') div.style.background = 'linear-gradient(#e6ffe6,#f6fff6)';

    // content & buttons
    if (!cell) {
      div.innerHTML = `<div style="font-size:12px">Leer</div><div style="font-size:11px;color:#444;margin-top:4px">Klicken zum Pflanzen</div>`;
      div.onclick = () => openSeedMenu(ft, idx);
    } else if (cell.status === 'blocked') {
      div.innerHTML = `<div style="font-size:12px">Stein</div><div style="font-size:11px">Kosten: 5G</div>`;
      div.onclick = () => {
        if (confirm('Stein entfernen (5G)?')) {
          clearCell(ft, idx);
        }
      };
    } else if (cell.status === 'spoiled') {
      div.innerHTML = `<div style="font-size:12px;color:maroon">Verdorben</div><div style="font-size:11px">Reinigen: 2G</div>`;
      div.onclick = () => {
        if (confirm('Verderbnis reinigen (2G)?')) {
          clearCell(ft, idx);
        }
      };
    } else if (cell.status === 'planted') {
      const p = PLANT_BY_ID[cell.plantId];
      const mature = isCellMature(cell);
      const prog = Math.round(cellProgressFraction(cell) * 100);
      div.innerHTML = `<div style="font-size:12px">${p.name}</div>
                       <div style="font-size:11px">${mature ? 'Reif!' : '⏳ '+formatRemaining(cell.durationSec - Math.floor((Date.now()-cell.plantedAt)/1000))}</div>
                       <div style="font-size:11px">Progress: ${prog}%</div>`;
      div.onclick = () => {
        if (mature) {
          harvestCell(ft, idx);
        } else {
          // offer options: apply fertilizer (if available) or remove (lose)
          const opt = prompt('Option: (1) Dünger anwenden, (2) Entfernen (kein Gewinn) - tippe 1 oder 2', '1');
          if (opt === '1') applyFertilizerToCell(ft, idx);
          else if (opt === '2') {
            if (confirm('Pflanze entfernen (kein Ertrag)?')) {
              removePlantNoGain(ft, idx);
            }
          }
        }
      };
    }
    grid.appendChild(div);
  });
  // also update inventory / top UI if present
  refreshTopUI();
}

// helper for remaining time display
function formatRemaining(sec) {
  if (sec <= 0) return '0s';
  if (sec < 60) return sec + 's';
  if (sec < 3600) return Math.floor(sec/60) + 'm';
  if (sec < 86400) return Math.floor(sec/3600) + 'h';
  return Math.floor(sec/86400) + 'd';
}

// open seed menu showing seeds available for this field type
function openSeedMenu(ft, index) {
  const menu = document.getElementById('seedMenu');
  if (!menu) return;
  menu.innerHTML = `<h3>Saatgut (${ft})</h3>`;
  const pool = plantsByField(ft);
  const d = getCurrentData();
  pool.forEach(p => {
    const haveSeeds = d.seeds[p.id] || 0;
    const row = document.createElement('div');
    row.style.marginBottom = '8px';
    row.innerHTML = `${p.name} — Saat: ${p.seedCost}G — Wasser: ${p.waterReq} — Du hast: ${haveSeeds}
      <button id="buy_seed_${p.id}">Kaufen</button>
      <button id="plant_seed_${p.id}">Pflanzen</button>`;
    menu.appendChild(row);
    document.getElementById(`buy_seed_${p.id}`).onclick = () => {
      if (d.gold < p.seedCost) { alert('Nicht genug Gold'); return; }
      d.gold -= p.seedCost;
      d.seeds[p.id] = (d.seeds[p.id]||0) + 1;
      saveCurrent(d);
      loadField(); loadShop(); // refresh UIs
      openSeedMenu(ft, index);
    };
    document.getElementById(`plant_seed_${p.id}`).onclick = () => {
      // plant from seeds in inventory
      const dd = getCurrentData();
      if (!dd.seeds[p.id] || dd.seeds[p.id] <= 0) { alert('Keine Saat im Inventar.'); return; }
      if (dd.water < p.waterReq) { alert('Nicht genug Wasser.'); return; }
      // occupy cell
      dd.seeds[p.id] -= 1; if (dd.seeds[p.id] <= 0) delete dd.seeds[p.id];
      dd.water -= p.waterReq;
      dd.fields[ft][index] = {
        status: 'planted',
        plantId: p.id,
        plantedAt: Date.now(),
        durationSec: p.growthSec
      };
      saveCurrent(dd);
      loadField();
      menu.innerHTML = '';
      alert(`${p.name} gepflanzt.`);
    };
  });
  // close button
  const closeBtn = document.createElement('div');
  closeBtn.style.marginTop = '10px';
  closeBtn.innerHTML = `<button id="closeSeedMenu">Schließen</button>`;
  menu.appendChild(closeBtn);
  document.getElementById('closeSeedMenu').onclick = () => { menu.innerHTML = ''; };
}

// apply fertilizer to planted cell
function applyFertilizerToCell(ft, idx) {
  const d = getCurrentData(); if(!d) return;
  const cell = d.fields[ft][idx];
  if (!cell || cell.status !== 'planted') { alert('Keine Pflanze hier.'); return; }
  if (!d.fertilizer || d.fertilizer <= 0) { alert('Kein Dünger im Inventar.'); return; }
  // reduce remaining time by 20% by shifting plantedAt back
  const elapsed = (Date.now() - cell.plantedAt) / 1000;
  const remaining = Math.max(0, cell.durationSec - elapsed);
  const reduction = Math.ceil(remaining * 0.2);
  cell.plantedAt = cell.plantedAt - (reduction * 1000);
  d.fertilizer -= 1;
  saveCurrent(d);
  loadField();
  alert(`Dünger angewendet. Verbleibende Zeit ~-${reduction}s.`);
}

// harvest mature cell
function harvestCell(ft, idx) {
  const d = getCurrentData(); if(!d) return;
  const cell = d.fields[ft][idx];
  if (!cell || cell.status !== 'planted') { alert('Keine reife Pflanze hier.'); return; }
  if (!isCellMature(cell)) { alert('Pflanze noch nicht reif.'); return; }
  const p = PLANT_BY_ID[cell.plantId];
  // add harvested plant to inventory
  d.plants[p.id] = (d.plants[p.id] || 0) + 1;
  // chance to drop a seed (e.g. 20%)
  if (Math.random() < 0.20) {
    d.seeds[p.id] = (d.seeds[p.id] || 0) + 1;
  }
  // xp & small gold reward? We keep selling in shop; harvesting gives xp
  d.xp = (d.xp || 0) + Math.max(1, Math.floor(p.sellPrice / 10));
  // free the cell
  d.fields[ft][idx] = null;
  checkLevelUp(d);
  saveCurrent(d);
  loadField();
  loadShop(); // refresh shop inventory display
  alert(`Geerntet: ${p.name}`);
}

// remove plant without reward
function removePlantNoGain(ft, idx) {
  const d = getCurrentData(); if(!d) return;
  d.fields[ft][idx] = null;
  saveCurrent(d);
  loadField();
  alert('Pflanze entfernt.');
}

// clear blocked/spoiled cell: cost applied
function clearCell(ft, idx) {
  const d = getCurrentData(); if(!d) return;
  const cell = d.fields[ft][idx];
  if (!cell) { alert('Zelle ist leer.'); return; }
  if (cell.status === 'blocked') {
    const cost = 5;
    if (d.gold < cost) { alert(`Zum Entfernen des Steins werden ${cost} Gold benötigt.`); return; }
    d.gold -= cost; d.fields[ft][idx] = null; saveCurrent(d);
    loadField(); return;
  }
  if (cell.status === 'spoiled') {
    const cost = 2;
    if (d.gold < cost) { alert(`Zum Reinigen der Zelle werden ${cost} Gold benötigt.`); return; }
    d.gold -= cost; d.fields[ft][idx] = null; saveCurrent(d);
    loadField(); return;
  }
  alert('Diese Zelle benötigt keine Reinigung.');
}

// ---------------------- SHOP PAGE UI (shop.html) ----------------------
function loadShop() {
  const d = getCurrentData(); if(!d) { location.href='index.html'; return; }
  // top UI
  const goldEl = document.getElementById('gold');
  if (goldEl) goldEl.textContent = d.gold;
  // water buy & fert buy displays
  const waterBuyEl = document.getElementById('waterBuy');
  if (waterBuyEl) waterBuyEl.textContent = _waterBuy;
  const fertBuyEl = document.getElementById('fertBuy');
  if (fertBuyEl) fertBuyEl.textContent = _fertBuy;

  // seed shop listing
  const seedShop = document.getElementById('seedShop'); if (seedShop) seedShop.innerHTML = '';
  // group by fieldType for clarity
  ['normal','water','night','sand','greenhouse'].forEach(ft => {
    const pool = plantsByField(ft);
    const header = document.createElement('div');
    header.innerHTML = `<h4>${ft.charAt(0).toUpperCase()+ft.slice(1)}-Saaten</h4>`;
    seedShop.appendChild(header);
    pool.forEach(p => {
      const div = document.createElement('div');
      const have = d.seeds[p.id] || 0;
      div.innerHTML = `${p.name} — Saat: ${p.seedCost}G — Du hast: ${have}
        <button id="seedbuy_${p.id}">Kaufen</button>`;
      seedShop.appendChild(div);
      document.getElementById(`seedbuy_${p.id}`).onclick = () => buySeedById(p.id);
    });
  });

  // sellBox (harvested)
  const sellBox = document.getElementById('sellBox'); if (sellBox) sellBox.innerHTML = '';
  Object.keys(d.plants).forEach(idStr => {
    const id = +idStr;
    const qty = d.plants[id];
    const p = PLANT_BY_ID[id];
    const price = getSellPriceForPlantId(id);
    const div = document.createElement('div');
    div.style.marginBottom = '8px';
    div.innerHTML = `${p.name} — Menge: ${qty} — Preis/Stück: ${price}G
      <button id="sell1_${id}">Verkaufen 1</button>
      <button id="sellall_${id}">Verkaufen alle</button>`;
    sellBox.appendChild(div);
    document.getElementById(`sell1_${id}`).onclick = () => sellHarvest(id,1);
    document.getElementById(`sellall_${id}`).onclick = () => sellHarvest(id, qty);
  });

  // worldmarket display
  const wm = document.getElementById('weltmarkt');
  if (wm) {
    const fav = getDailyFavoriteDisplay();
    wm.innerHTML = `<div><b>Beliebt heute:</b> ${fav} — +50% Verkaufspreis</div>`;
  }

  // top-updates for water/fertilizer counts visible if you have elements elsewhere
  // ensure event ticker running
  applyOfflineEffects();
  startEventTicker();
}

// ---------------------- STARTPAGE UI (startseite.html) ----------------------
function loadGame() {
  const d = getCurrentData(); if(!d) { location.href='index.html'; return; }
  ensureFieldsInit();
  applyOfflineEffects();
  startEventTicker();

  // update top UI
  const goldEl = document.getElementById('gold'); if (goldEl) goldEl.textContent = d.gold;
  const xpEl = document.getElementById('xp'); if (xpEl) xpEl.textContent = d.xp;
  const lvlEl = document.getElementById('level'); if (lvlEl) lvlEl.textContent = d.level;

  // unlock field boxes by level (HTML has ids for locked boxes)
  if (d.level >= 2 && document.getElementById('waterField')) document.getElementById('waterField').classList.remove('locked');
  if (d.level >= 3 && document.getElementById('nightField')) document.getElementById('nightField').classList.remove('locked');
  if (d.level >= 4 && document.getElementById('sandField')) document.getElementById('sandField').classList.remove('locked');
  if (d.level >= 5 && document.getElementById('greenhouseField')) document.getElementById('greenhouseField').classList.remove('locked');

  // periodic UI refresher
  setInterval(()=>{
    const cur = getCurrentData();
    if (!cur) return;
    if (goldEl) goldEl.textContent = cur.gold;
    if (xpEl) xpEl.textContent = cur.xp;
    if (lvlEl) lvlEl.textContent = cur.level;
  }, 2000);
}

// navigation from start page
function goToField(ft) {
  // level gating
  if ((ft === 'water' && d.level < 2) || (ft === 'night' && d.level < 3) || (ft === 'sand' && d.level < 4) || (ft === 'greenhouse' && d.level < 5)) {
    alert('Dieses Feld ist noch nicht freigeschaltet. Level aufsteigen um es freizuschalten.');
    return;
  }
  localStorage.setItem('currentField', ft);
  location.href = 'field.html';
}

// ---------------------- UTIL: refresh top UI for field/shop ----------------------
function refreshTopUI() {
  const d = getCurrentData(); if(!d) return;
  const goldEl = document.getElementById('gold'); if (goldEl) goldEl.textContent = d.gold;
  const xpEl = document.getElementById('xp'); if (xpEl) xpEl.textContent = d.xp;
  const lvlEl = document.getElementById('level'); if (lvlEl) lvlEl.textContent = d.level;
}

// ---------------------- Utilities for pages that need to call functions by name ----------------------
// export functions so HTML onclick attributes can access them
window.register = register;
window.login = login;
window.loadGame = loadGame;
window.loadShop = loadShop;
window.loadField = loadField;
window.goToField = goToField;
window.changeWater = changeWater;
window.buyWater = buyWater;
window.changeFertilizer = changeFertilizer;
window.buyFertilizer = buyFertilizer;
window.exportBackup = exportBackup;
window.importBackup = importBackup;
window.buySeedById = buySeedById;
window.applyFertilizerToCell = applyFertilizerToCell;
window.clearCell = clearCell;
window.openSeedMenu = openSeedMenu;
window.sellHarvest = sellHarvest;
window.getDailyFavoriteDisplay = getDailyFavoriteDisplay;
window.getSellPriceForPlantId = getSellPriceForPlantId;

// ensure currentUser redirect if not logged in on pages that call loadGame/loadShop/loadField
// (HTML onload handlers will call these, they check currentUser)

// ---------------------- Initialization tip ----------------------
// If you want to test quickly: create a test user via register form, then go to startseite -> shop -> fields.
// The code stores everything in localStorage as user_<username>. You can export backup per user.

// End of script.js
