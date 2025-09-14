window.onload = function () {
    ui_setzen();
    ueberschrift();
}

function ueberschrift() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    document.getElementById("ueberschrift_felder").innerHTML = `<b> 🌍 Der Weltmarkt </b>`;
}