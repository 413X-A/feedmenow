// Beispiel-Benutzerdaten
let username = localStorage.getItem("currentUser");
let user = username ? JSON.parse(localStorage.getItem("user_" + username)).data : null;

// --- Load Startseite ---
function loadStartPage() {
  if(!user) return;
  document.getElementById("goldDisplay").innerText = "Gold: " + user.gold;
  document.getElementById("xpDisplay").innerText = "XP: " + user.xp;
  document.getElementById("levelDisplay").innerText = "Level: " + user.level;
  document.getElementById("waterDisplay").innerText = "Wasser: " + user.water;
  document.getElementById("fertDisplay").innerText = "Dünger: " + user.fertilizer;

  let fieldsContainer = document.getElementById("fieldsContainer");
  fieldsContainer.innerHTML = "";

  const fieldTypes = ["normal", "water", "night", "sand", "greenhouse"];
  fieldTypes.forEach((type, index) => {
    let fieldDiv = document.createElement("div");
    fieldDiv.className = "field-container";

    let title = document.createElement("div");
    title.className = "field-title";
    title.innerText = type.charAt(0).toUpperCase() + type.slice(1) + " Feld";
    fieldDiv.appendChild(title);

    // Prüfen ob Feld freigeschaltet
    let requiredLevel = index + 1; // z.B. Feld 1 ab Level 1, Feld 2 ab Level 2
    if(user.level < requiredLevel) {
      let lockedDiv = document.createElement("div");
      lockedDiv.className = "locked-field";
      lockedDiv.innerText = "Freischalten bei Level " + requiredLevel;
      fieldDiv.appendChild(lockedDiv);
    } else {
      // Grid anzeigen
      let grid = document.createElement("div");
      grid.className = "field-grid";
      let rows = user.fields[type]?.rows || 3;
      let cols = 5;
      for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
          let cell = document.createElement("div");
          cell.className = "cell " + type;
          cell.innerText = "";
          grid.appendChild(cell);
        }
      }
      fieldDiv.appendChild(grid);

      // Erweiterungsbutton
      let btn = document.createElement("button");
      btn.className = "extend-button";
      btn.innerText = "Feld erweitern (50 Gold)";
      btn.onclick = () => extendField(type);
      fieldDiv.appendChild(btn);
    }

    fieldsContainer.appendChild(fieldDiv);
  });
}

// --- Feld erweitern ---
function extendField(type){
  let cost = 50;
  if(user.gold < cost){
    alert("Nicht genug Gold!");
    return;
  }
  user.gold -= cost;
  if(!user.fields[type]) user.fields[type] = {rows:3};
  user.fields[type].rows +=1; // Jede Erweiterung +1 Zeile
  saveUserData();
  loadStartPage();
}

// --- User-Daten speichern ---
function saveUserData(){
  let stored = JSON.parse(localStorage.getItem("user_" + username));
  stored.data = user;
  localStorage.setItem("user_" + username, JSON.stringify(stored));
}

// --- Level-Up Beispiel beim Ernten ---
function addXP(amount){
  user.xp += amount;
  // z.B. jede 100 XP = +1 Level
  if(user.xp >= user.level * 100){
    user.level +=1;
    alert("Level Up! Neues Level: " + user.level);
  }
  saveUserData();
  loadStartPage();
}

// --- Initialisierung ---
loadStartPage();
