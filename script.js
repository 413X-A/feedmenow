// --- Benutzerverwaltung ---
function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;
  if(localStorage.getItem("user_" + username)) {
    alert("Benutzername existiert schon!");
    return;
  }
  let userData = {
    gold: 100, xp:0, level:1,
    water:10, fertilizer:5,
    seeds:{}, plants:{},
    fields:{ normal:[], water:[], night:[], sand:[], greenhouse:[] }
  };
  localStorage.setItem("user_" + username, JSON.stringify({password, data:userData}));
  alert("Registrierung erfolgreich!");
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;
  let user = JSON.parse(localStorage.getItem("user_" + username));
  if(!user || user.password !== password) {
    alert("Login fehlgeschlagen!");
    return;
  }
  localStorage.setItem("currentUser", username);
  window.location.href = "startseite.html";
}

// --- Startseite ---
function loadUserData() {
  let username = localStorage.getItem("currentUser");
  if(!username) return;
  let user = JSON.parse(localStorage.getItem("user_" + username)).data;
  document.getElementById("goldDisplay").innerText = "Gold: " + user.gold;
  document.getElementById("xpDisplay").innerText = "XP: " + user.xp;
  document.getElementById("levelDisplay").innerText = "Level: " + user.level;
}

// --- Feld-Logik ---
function loadField(fieldType) {
  let grid = document.getElementById("fieldGrid");
  grid.innerHTML = "";
  for(let i=0;i<15;i++){
    let div = document.createElement("div");
    div.className = "cell " + fieldType;
    div.innerText = "";
    grid.appendChild(div);
  }
}

function backToStart(){ window.location.href="startseite.html"; }
function openShop(){ window.location.href="shop.html"; }

// --- Wasser & Dünger ---
function changeWater(amount){
  let username = localStorage.getItem("currentUser");
  let user = JSON.parse(localStorage.getItem("user_" + username));
  user.data.water += amount;
  if(user.data.water < 0) user.data.water = 0;
  localStorage.setItem("user_" + username, JSON.stringify(user));
  document.getElementById("waterAmount").innerText = user.data.water;
}

function changeFertilizer(amount){
  let username = localStorage.getItem("currentUser");
  let user = JSON.parse(localStorage.getItem("user_" + username));
  user.data.fertilizer += amount;
  if(user.data.fertilizer < 0) user.data.fertilizer = 0;
  localStorage.setItem("user_" + username, JSON.stringify(user));
  document.getElementById("fertAmount").innerText = user.data.fertilizer;
}

// --- Backup / Import ---
function exportBackup(){
  let username = localStorage.getItem("currentUser");
  let user = JSON.parse(localStorage.getItem("user_" + username));
  let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(user));
  let dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", "plants_tycoon_backup.json");
  dlAnchor.click();
}

function importBackup(){
  let fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.json';
  fileInput.onchange = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = event => {
      let username = localStorage.getItem("currentUser");
      let data = JSON.parse(event.target.result);
      let user = JSON.parse(localStorage.getItem("user_" + username));
      user.data = data.data;
      localStorage.setItem("user_" + username, JSON.stringify(user));
      alert("Backup erfolgreich importiert!");
      location.reload();
    };
    reader.readAsText(file);
  };
  fileInput.click();
}
