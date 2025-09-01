document.getElementById("loginBtn").onclick=function(){
  let uname=document.getElementById("username").value.trim();
  let pwd=document.getElementById("password").value;
  if(!uname||!pwd){ document.getElementById("loginMsg").innerText="Bitte alle Felder ausfüllen."; return; }

  let userData=localStorage.getItem("user_"+uname);
  if(!userData){
    let newUser={
      data:{
        gold:100,
        xp:0,
        level:1,
        water:5,
        fertilizer:2,
        fields:{normal:{rows:3,cells:{}},water:{rows:3,cells:{}},night:{rows:3,cells:{}},sand:{rows:3,cells:{}},greenhouse:{rows:3,cells:{}}},
        seedsInventory:{Tomate:5,Salat:5,Kaktus:2},
        plantsInventory:{},
        lastLogin:Date.now()
      }
    };
    localStorage.setItem("user_"+uname,JSON.stringify(newUser));
  }
  localStorage.setItem("currentUser",uname);
  window.location="startseite.html";
}
