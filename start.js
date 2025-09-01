let username=localStorage.getItem("currentUser");
let storedUser=JSON.parse(localStorage.getItem("user_"+username));
let user=storedUser.data;

// Beispiel-Pflanzen
let plants=[
  {name:"Tomate",time:1,price:2,water:1,fert:0,type:"normal"},
  {name:"Salat",time:2,price:4,water:2,fert:1,type:"normal"},
  {name:"Kaktus",time:3,price:8,water:0,fert:0,type:"sand"}
];

// AFK Zeit berechnen
let now=Date.now();
let deltaSec=Math.floor((now-user.lastLogin)/1000);
user.lastLogin=now;

// Pflanzen automatisch wachsen lassen
for(let f in user.fields){
  for(let pos in user.fields[f].cells){
    let cell=user.fields[f].cells[pos];
    if(cell&&cell.plant){
      cell.growTime=Math.max(0,cell.growTime-deltaSec);
    }
  }
}

// UI Update
function loadStartPage(){
  document.getElementById("goldDisplay").innerText="Gold: "+user.gold;
  document.getElementById("xpDisplay").innerText="XP: "+user.xp;
  document.getElementById("levelDisplay").innerText="Level: "+user.level;
  document.getElementById("waterDisplay").innerText="Wasser: "+user.water;
  document.getElementById("fertDisplay").innerText="Dünger: "+user.fertilizer;

  let container=document.getElementById("fieldsContainer");
  container.innerHTML="";
  let types=["normal","water","night","sand","greenhouse"];
  types.forEach((type,index)=>{
    let reqLevel=index+1;
    let div=document.createElement("div"); div.className="field-container";
    let title=document.createElement("div"); title.className="field-title"; title.innerText=type.charAt(0).toUpperCase()+type.slice(1)+" Feld"; div.appendChild(title);
    if(user.level<reqLevel){ let l=document.createElement("div"); l.className="locked-field"; l.innerText="Freischalten bei Level "+reqLevel; div.appendChild(l);}
    else{
      let grid=document.createElement("div"); grid.className="field-grid";
      let rows=user.fields[type].rows||3;
      for(let r=0;r<rows;r++){
        for(let c=0;c<5;c++){
          let pos=r*5+c;
          let cell=document.createElement("div"); cell.className="cell "+type;
          let existing=user.fields[type].cells[pos];
          if(existing&&existing.plant){
            cell.classList.add("blocked");
            let plantData=plants.find(p=>p.name==existing.plant);
            cell.innerText=existing.growTime>0?existing.growTime+"s":existing.plant;
          }
          cell.onclick=()=>openSeedMenu(type,pos);
          grid.appendChild(cell);
        }
      }
      div.appendChild(grid);
      let btn=document.createElement("button"); btn.className="extend-button"; btn.innerText="Feld erweitern (50 Gold)";
      btn.onclick=()=>extendField(type);
      div.appendChild(btn);
    }
    container.appendChild(div);
  });
  saveUser();
}
function openSeedMenu(type,pos){
  document.getElementById("seedMenu").style.display="block";
  let menu=document.getElementById("seedButtons"); menu.innerHTML="";
  plants.filter(p=>p.type==type).forEach(p=>{
    let b=document.createElement("button"); b.className="seed-button";
    b.innerText=p.name+" ("+ (user.seedsInventory[p.name]||0) +")";
    b.onclick=()=>plantSeed(type,pos,p);
    menu.appendChild(b);
  });
}
function closeSeedMenu(){ document.getElementById("seedMenu").style.display="none"; }
function plantSeed(type,pos,p){
  if(user.seedsInventory[p.name]<=0){ alert("Keine Seeds!"); return; }
  user.seedsInventory[p.name]-=1;
  user.fields[type].cells[pos]={plant:p.name,growTime:p.time*60}; // in Sekunden
  closeSeedMenu();
  loadStartPage();
}
function extendField(type){
  if(user.gold<50){ alert("Nicht genug Gold!"); return; }
  user.gold-=50;
  user.fields[type].rows=(user.fields[type].rows||3)+1;
  loadStartPage();
}
function saveUser(){ let s=JSON.parse(localStorage.getItem("user_"+username)); s.data=user; localStorage.setItem("user_"+username,JSON.stringify(s)); }
setInterval(()=>{
  for(let f in user.fields){
    for(let pos in user.fields[f].cells){
      let cell=user.fields[f].cells[pos];
      if(cell&&cell.plant&&cell.growTime>0){ cell.growTime--; }
    }
  }
  loadStartPage();
},1000);

document.getElementById("shopBtn").onclick=()=>{ window.location="shop.html"; };
document.getElementById("backupExportBtn").onclick=()=>{
  let data=JSON.stringify(user);
  prompt("Kopiere dies als Backup:",data);
};
document.getElementById("backupImportBtn").onclick=()=>{
  let data=prompt("Füge Backup-Daten ein:");
  try{ user=JSON.parse(data); saveUser(); loadStartPage(); alert("Backup geladen"); }
  catch(e){ alert("Ungültige Daten"); }
};

loadStartPage();
