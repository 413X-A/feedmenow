window.onload = function () {
    ui_setzen();
}

function ui_setzen() {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));

    if (!benutzername || !aktuellerBenutzer) {
        alert("Kein Benutzer eingeloggt!");
        window.location.href = "index.html";
        return;
    } else {
        const daten = alleBenutzer[aktuellerBenutzer];

        // Basis-Infos anzeigen
        document.getElementById("benutzername").textContent = daten.benutzername;

        document.getElementById("menge_ansehen").textContent = daten.benutzer_ansehen;


        if (daten.lagerplatz.gold >= 1000) {
            const gold_in_tausen = (daten.ressourcen.gold / 1000).toFixed(2);
            const gold_in_tausen_lager = (daten.lagerplatz.gold / 1000).toFixed(2);


            document.getElementById("menge_gold").innerHTML = `${gold_in_tausen}k / ${gold_in_tausen_lager}k`;

        } else if (daten.lagerplatz.gold >= 1000000) {
            const gold_in_millionen = (daten.ressourcen.gold / 1000000).toFixed(2);
            const gold_in_tausen_millionen = (daten.lagerplatz.gold / 1000000).toFixed(2);

            document.getElementById("menge_gold").innerHTML = `${gold_in_millionen}m / ${gold_in_tausen_millionen}m`;
        } else {
            document.getElementById("menge_gold").innerHTML = `${daten.ressourcen.gold} / ${daten.lagerplatz.gold}`;
        }

        if (daten.lagerplatz.wasser >= 1000) {
            const wasser_in_tonnen = (daten.ressourcen.wasser / 1000).toFixed(2);
            const wasser_in_tonnen_lager = (daten.lagerplatz.wasser / 1000).toFixed(2);
            document.getElementById("menge_wasser").innerHTML = `${wasser_in_tonnen}T / ${wasser_in_tonnen_lager}T`;
        } else {
            document.getElementById("menge_wasser").innerHTML = `${daten.ressourcen.wasser}L / ${daten.lagerplatz.wasser}L`;
        }

        if (daten.ressourcen.energie >= 1000) {
            const energie_in_tonnen = (daten.ressourcen.energie / 1000).toFixed(2);
            const energie_in_tonnen_lager = (daten.lagerplatz.energie / 1000).toFixed(2);
            document.getElementById("menge_energie").innerHTML = `${energie_in_tonnen}kW / ${energie_in_tonnen_lager}kW`;
        } else {
            document.getElementById("menge_energie").innerHTML = `${daten.ressourcen.energie}W / ${daten.lagerplatz.energie}W`;
        }

        if (daten.ressourcen.magie >= 1000) {
            const magie_in_kMyr = (daten.ressourcen.magie / 1000).toFixed(2);
            const magie_in_kMyr_lager = (daten.lagerplatz.magie / 1000).toFixed(2);
            document.getElementById("menge_magie").innerHTML = `${magie_in_kMyr}kMyr / ${magie_in_kMyr_lager}kMyr`;
        } else {
            document.getElementById("menge_magie").innerHTML = `${daten.ressourcen.magie}Myr / ${daten.lagerplatz.magie}Myr`;
        }



        document.getElementById("menge_level").innerHTML = `[${daten.benutzer_level}] ${daten.benutzer_exp}`;
        document.getElementById("menge_pflanzen").innerHTML = `${daten.ressourcen.anz_pflanzen}st. / ${daten.lagerplatz.pflanzen}st.`;
    }
}


// Button-Funktionen
function zum_login() {
    window.location.href = "index.html";
}
function zur_startseite() {
    window.location.href = "hauptseite.html";
}
function zum_weltmarkt() {
    window.location.href = "weltmarkt.html";
}
function zur_reise() {
    window.location.href = "deinereise.html";
}
function zeige_einstellungen() {
    document.getElementById("einstellungen_fenster").style.display = "block";
}
function verstecke_einstellungen() {
    document.getElementById("einstellungen_fenster").style.display = "none";
}

function zur_normalefarm() {
    window.location.href = "normalefarmen.html";
}
function zur_magischefarm() {
    window.location.href = "magischefarmen.html";
}



function levelsystem() {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    let alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    let daten = alleBenutzer[aktuellerBenutzer];

    if (daten.benutzer_explevel >= daten.benutzer_levelsystem) {
        daten.benutzer_explevel -= daten.benutzer_levelsystem;
        daten.benutzer_level += 1;
        daten.benutzer_levelsystem += 5;

        // Falls schon ein Overlay existiert → entfernen
        const vorhandenesOverlay = document.getElementById("levelup_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        // Neues Overlay anzeigen
        const ressOverlay = document.createElement("div");
        ressOverlay.id = "levelup_overlay"; // eindeutige ID vergeben
        Object.assign(ressOverlay.style, {
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 9999
        });

        const ressDialog = document.createElement("div");
        Object.assign(ressDialog.style, {
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            textAlign: "center",
            minWidth: "300px"
        });

        ressDialog.innerHTML = `
            <h2>Levelaufstieg!</h2>
            <p>Level ${daten.benutzer_level - 1} → ${daten.benutzer_level}</p>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Zurück";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => ressOverlay.remove());

        ressDialog.appendChild(closeBtn);
        ressOverlay.appendChild(ressDialog);
        document.body.appendChild(ressOverlay);
    }

    // Geänderte Daten wieder abspeichern
    alleBenutzer[aktuellerBenutzer] = daten;
    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    ui_setzen();
}

setInterval(levelsystem, 1000);
