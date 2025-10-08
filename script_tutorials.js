window.onload = function () {
    tutorials();
}

function tutorials() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    
}