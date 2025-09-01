let username=localStorage.getItem("currentUser");
let user=JSON.parse(localStorage.getItem("user_"+username)).data;
let buyCounts={water:0,fert:0};

function updateUI(){
  document.getElementById("goldDisplay").innerText="Gold: "+user.gold;
  document.getElementById("waterDisplay").innerText="Wasser: "+user.water;
  document.getElementById("fertDisplay").innerText="Dünger: "+user.fertilizer;
  document.getElementById("levelDisplay").innerText="Level: "+user.level;

  let seedsDiv=document.getElementById("seedsList");
  seedsDiv.innerHTML="";
  for(let s in user.seedsInventory){
    let btn=document.createElement("button");
    btn.innerText=s+" - Preis: "+Math.floor(5*Math.random()+1)+" Gold";
    btn.onclick=()=>{buySeed(s)};
    seedsDiv.appendChild(btn);
  }
}
function adjust(item,amt){
  if(item=="water"){ buyCounts.water=Math.max(0,buyCounts.water+amt); document.getElementById("waterAmount").innerText=buyCounts.water; }
  if(item=="fert"){ buyCounts.fert=Math.max(0,buyCounts.fert+amt); document.getElementById("fertAmount").innerText=buyCounts.fert; }
}
function buy(item){
  if(item=="water"){
    let cost=buyCounts.water*2;
    if(user.gold<cost){ alert("Nicht genug Gold!"); return; }
    user.gold-=cost;
    user.water+=buyCounts.water;
    buyCounts.water=0; document.getElementById("waterAmount").innerText="0";
  }
  if(item=="fert"){
    let cost=buyCounts.fert*3;
    if(user.gold<cost){ alert("Nicht genug Gold!"); return; }
    user.gold-=cost;
    user.fertilizer+=buyCounts.fert;
    buyCounts.fert=0; document.getElementById("fertAmount").innerText="0";
  }
  saveUser();
  updateUI();
}
function buySeed(name){
  let price=Math.floor(5*Math.random()+1);
  if(user.gold<price){ alert("Nicht genug Gold!"); return; }
  user.gold-=price;
  user.seedsInventory[name]=(user.seedsInventory[name]||0)+1;
  saveUser();
  updateUI();
}
function saveUser(){ let stored=JSON.parse(localStorage.getItem("user_"+username)); stored.data=user; localStorage.setItem("user_"+username,JSON.stringify(stored)); }
function goBack(){ window.location="startseite.html"; }
updateUI();
