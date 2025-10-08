window.onload = function () {
    ui_setzen();
    ueberschrift();
    betriebsmittelAnzeigen();
    gebaeudeAnzeigen();
    gebaeude_felder_faerben();
}

function ueberschrift() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));

    document.getElementById("ueberschrift_gebaeude").innerHTML = `<b> ⛏️ Deine Produktionshalle </b>`;
}

function gebaeude_felder_faerben() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    if (!aktuellerBenutzer) return;

    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten || !daten.gebaeudeFelder) return;

    Object.keys(daten.gebaeudeFelder).forEach(gebaeudeID => {
        const felder = daten.gebaeudeFelder[gebaeudeID];
        if (!felder) return;

        const container = document.getElementById(`gebaeudeFelder_${gebaeudeID}`);
        if (!container) return;

        Object.keys(felder).forEach((feldNummer, index) => {
            const feldObjekt = felder[feldNummer];
            const item = container.children[index]; // Index nutzen, kein -1
            if (!feldObjekt || !item) return;

            // Status-Färbung
            if (feldObjekt.status === "leer") {
                item.style.backgroundColor = "#b0b0b0"; // Grau
            } else if (feldObjekt.status === "inProduktion") {
                item.style.backgroundColor = (Date.now() >= feldObjekt.zeit_fertig) ? "#2e7d32" : "#ffa500";
            } else if (feldObjekt.status === "fertig") {
                item.style.backgroundColor = "#2e7d32";
            } else {
                item.style.backgroundColor = "#b0b0b0"; // Standard
            }
        });
    });
}
setInterval(gebaeude_felder_faerben, 500);


function gebaeudeAnzeigen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    const container = document.getElementById("gebaeudeContainer");
    container.innerHTML = "";

    let gebaeudeIndex = 0;

    Object.keys(daten.produkte).forEach(gebaeudeName => {
        const eintraege = daten.produkte[gebaeudeName];
        if (!eintraege || eintraege.length === 0) return;

        const gebaeudeInfo = eintraege[0];
        gebaeudeIndex++;

        const gebaeudeBox = document.createElement("div");
        gebaeudeBox.className = "gebaeudeBox";

        const title = document.createElement("h2");
        title.textContent = gebaeudeInfo.name;
        gebaeudeBox.appendChild(title);

        if (gebaeudeInfo.beschreibung) {
            const beschr = document.createElement("p");
            beschr.textContent = gebaeudeInfo.beschreibung;
            gebaeudeBox.appendChild(beschr);
        }

        if (gebaeudeInfo.freigeschaltet) {
            const felderContainer = document.createElement("div");
            felderContainer.id = `gebaeudeFelder_${gebaeudeInfo.fortschritt}`;
            felderContainer.className = "felderContainer";

            const gebaeudeFelder = daten.gebaeudeFelder[gebaeudeInfo.fortschritt];
            if (gebaeudeFelder) {
                Object.keys(gebaeudeFelder).forEach(feldNummer => {
                    const feld = gebaeudeFelder[feldNummer];

                    const feldDiv = document.createElement("div");
                    feldDiv.className = "feldBox";
                    feldDiv.style.backgroundColor = "#b0b0b0"; // Standard Grau


                    feldDiv.addEventListener("click", () => produktionsFeld_angeklickt(daten, gebaeudeInfo, feldNummer));
                    felderContainer.appendChild(feldDiv);
                });
            }

            gebaeudeBox.appendChild(felderContainer);

        } else {
            // 🔒 Nicht freigeschaltetes Gebäude → Freischalten Button
            const preis = 100 + (gebaeudeIndex - 1) * 50; // Preis steigert sich
            const freischaltenBtn = document.createElement("button");
            freischaltenBtn.textContent = `Freischalten für ${preis} Gold`;
            freischaltenBtn.className = "ui_unten";

            freischaltenBtn.addEventListener("click", () => {
                if (daten.ressourcen.gold >= preis && daten.benutzer_level >= gebaeudeInfo.level) {
                    daten.ressourcen.gold -= preis;
                    daten.produkte[gebaeudeName][0].freigeschaltet = true;
                    alleBenutzer[aktuellerBenutzer] = daten;
                    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                    gebaeudeAnzeigen();
                } else {
                    const overlay = document.createElement("div");
                    Object.assign(overlay.style, {
                        position: "fixed", top: 0, left: 0,
                        width: "100vw", height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    });

                    const dialog = document.createElement("div");
                    Object.assign(dialog.style, {
                        backgroundColor: "white", padding: "2rem", borderRadius: "12px",
                        textAlign: "center", minWidth: "300px"
                    });

                    let dialogTitel = "";
                    let dialogText = "";

                    if (daten.ressourcen.gold < preis && daten.benutzer_level < gebaeudeInfo.level) {
                        dialogTitel = "Freischalten nicht möglich!";
                        dialogText = `<p>Zu wenig Gold! Du benötigst ${preis} Gold.</p>
                  <p>Zu niedriges Level! Du benötigst Level ${gebaeudeInfo.level}.</p>`;
                    } else if (daten.ressourcen.gold < preis) {
                        dialogTitel = "Zu wenig Gold!";
                        dialogText = `<p>Du benötigst ${preis} Gold, um dieses Gebäude freizuschalten.</p>`;
                    } else if (daten.benutzer_level < gebaeudeInfo.level) {
                        dialogTitel = "Level zu niedrig!";
                        dialogText = `<p>Du benötigst Level ${gebaeudeInfo.level}, um dieses Gebäude freizuschalten.</p>`;
                    }

                    dialog.innerHTML = `<h2>${dialogTitel}</h2>${dialogText}`;


                    const closeBtn = document.createElement("button");
                    closeBtn.textContent = "Zurück";
                    closeBtn.className = "ui_unten";
                    closeBtn.addEventListener("click", () => overlay.remove());

                    dialog.appendChild(closeBtn);
                    overlay.appendChild(dialog);
                    document.body.appendChild(overlay);
                }
            });

            gebaeudeBox.appendChild(freischaltenBtn);
        }

        container.appendChild(gebaeudeBox);
    });
}



function produktionsFeld_angeklickt(daten, gebaeudeInfo, feldNummer) {
    const aktuellerBenutzerName = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const feldObjekt = daten.gebaeudeFelder[gebaeudeInfo.fortschritt][feldNummer];
    if (!feldObjekt) return;

    // ----------------------------------------------------
    // 📦 1. Feld ist in Produktion → Timer oder Fertig
    // ----------------------------------------------------
    if (feldObjekt.status === "inProduktion") {
        if (Date.now() < feldObjekt.zeit_fertig) {
            const overlay = document.createElement("div");
            Object.assign(overlay.style, {
                position: "fixed", top: 0, left: 0,
                width: "100vw", height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex", justifyContent: "center", alignItems: "center"
            });

            const dialog = document.createElement("div");
            Object.assign(dialog.style, {
                backgroundColor: "white", padding: "2rem", borderRadius: "12px",
                textAlign: "center", minWidth: "300px"
            });

            dialog.innerHTML = `
                <h2>Produktion läuft</h2>
                <p>Fertig um: <b>${new Date(feldObjekt.zeit_fertig).toLocaleTimeString()}</b></p>
            `;

            const closeBtn = document.createElement("button");
            closeBtn.textContent = "Schließen";
            closeBtn.className = "ui_unten";
            closeBtn.addEventListener("click", () => overlay.remove());

            dialog.appendChild(closeBtn);
            overlay.appendChild(dialog);
            document.body.appendChild(overlay);
            return;
        }

        // Produktion fertig → direkt ernten
        feldObjekt.status = "fertig";
        alleBenutzer[aktuellerBenutzerName] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
        // erneut aufrufen, damit Ernte direkt ausgeführt wird
        produktionsFeld_angeklickt(daten, gebaeudeInfo, feldNummer);
        return;
    }

    // ----------------------------------------------------
    // 🟩 2. Feld ist fertig → Produkt ernten
    // ----------------------------------------------------
    if (feldObjekt.status === "fertig") {
        const produkt = daten.produkte[gebaeudeInfo.name].find(p => p.fortschritt === feldObjekt.produktID);
        if (!produkt) return;

        if (daten.ressourcen.anz_produkte < daten.lagerplatz.produkte) {
            daten.ressourcen.anz_produkte += 1;
            daten.benutzer_exp += produkt.xp || 0;
            daten.benutzer_ansehen += produkt.ansehen || 0;

            if (produkt.geerntet == null) produkt.geerntet = 0;
            produkt.geerntet += 1;

            feldObjekt.status = "leer";
            feldObjekt.produktID = null;
            feldObjekt.zeit_fertig = null;

            alleBenutzer[aktuellerBenutzerName] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const dialog = document.createElement("div");
            dialog.className = "dialog";
            dialog.innerHTML = `
                <h2>${produkt.name} geerntet!</h2>
                <p>📚 +${produkt.ansehen || 0} Ansehen</p>
                <p>💰 +${produkt.verkaufspreis || 0} Gold</p>
                <p>🍀 Geerntet: ${produkt.geerntet}x</p>
            `;

            const closeBtn = document.createElement("button");
            closeBtn.className = "ui_unten";
            closeBtn.textContent = "OK";
            closeBtn.addEventListener("click", () => {
                overlay.remove();
                gebaeudeAnzeigen();
            });

            dialog.appendChild(closeBtn);
            overlay.appendChild(dialog);
            document.body.appendChild(overlay);

        } else {
            // Lager voll → Overlay
            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const dialog = document.createElement("div");
            dialog.className = "dialog";
            dialog.innerHTML = `
                <h2>Nicht genug Lagerplatz!</h2>
                <p>Du hast keinen freien Platz, um dieses Produkt zu ernten.</p>
            `;

            const closeBtn = document.createElement("button");
            closeBtn.className = "ui_unten";
            closeBtn.textContent = "Zurück";
            closeBtn.addEventListener("click", () => overlay.remove());

            dialog.appendChild(closeBtn);
            overlay.appendChild(dialog);
            document.body.appendChild(overlay);
        }
        return;
    }

    // ----------------------------------------------------
    // ➕ 3. Feld ist leer → Produkt auswählen
    // ----------------------------------------------------
    if (feldObjekt.status === "leer") {
        const verfuegbareProdukte = daten.produkte[gebaeudeInfo.name]
            .filter(p => p.anzahlfelder === null && p.freigeschaltet);

        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            display: "flex", justifyContent: "center", alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)"
        });

        const dialog = document.createElement("div");
        Object.assign(dialog.style, {
            width: "700px", backgroundColor: "white",
            padding: "2rem", borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            maxHeight: "90vh", overflowY: "auto",
            display: "flex", flexDirection: "column", gap: "1rem"
        });

        const titel = document.createElement("h2");
        titel.textContent = `Produkt auswählen (${gebaeudeInfo.name})`;
        titel.style.textAlign = 'center';
        dialog.appendChild(titel);

        const grid = document.createElement("div");
        Object.assign(grid.style, {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.5rem"
        });

        let ausgewaehltesProdukt = null;

        verfuegbareProdukte.forEach(p => {
            const card = document.createElement("div");
            card.className = "produkt_card";
            card.style.border = "1px solid #ccc";
            card.style.padding = "0.5rem";
            card.style.borderRadius = "8px";
            card.style.cursor = "pointer";

            card.innerHTML = `
                <h3>${p.name}</h3>
                <p>🕛 ${p.dauer} min</p>
                <p>⚡ -${p.energieverbrauch} Energie</p>
                <p>📚 ${p.ansehen} Ansehen</p>
            `;

            card.addEventListener('click', () => {
                ausgewaehltesProdukt = p;
                Array.from(grid.children).forEach(c => c.style.border = "1px solid #ccc");
                card.style.border = "2px solid green";
                startBtn.disabled = false;
                startBtn.style.backgroundColor = "#2e7d32";
                startBtn.style.cursor = "pointer";
            });

            grid.appendChild(card);
        });

        dialog.appendChild(grid);

        const btnDiv = document.createElement("div");
        btnDiv.style.display = "flex";
        btnDiv.style.justifyContent = "space-between";

        const abbrechenBtn = document.createElement("button");
        abbrechenBtn.textContent = "Abbrechen";
        abbrechenBtn.className = "ui_unten";
        abbrechenBtn.addEventListener('click', () => overlay.remove());

        const startBtn = document.createElement("button");
        startBtn.textContent = "Produktion starten";
        startBtn.className = "ui_unten";
        startBtn.disabled = true;
        startBtn.style.backgroundColor = "#888";
        startBtn.style.cursor = "not-allowed";

        startBtn.addEventListener('click', () => {
            if (!ausgewaehltesProdukt) return;

            // Ressourcen prüfen
            if (daten.ressourcen.wasser < ausgewaehltesProdukt.wasserverbrauch ||
                daten.ressourcen.energie < ausgewaehltesProdukt.energieverbrauch) {

                const ressOverlay = document.createElement("div");
                Object.assign(ressOverlay.style, {
                    position: "fixed", top: 0, left: 0,
                    width: "100vw", height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex", justifyContent: "center", alignItems: "center"
                });

                const ressDialog = document.createElement("div");
                Object.assign(ressDialog.style, {
                    backgroundColor: "white", padding: "2rem",
                    borderRadius: "12px", textAlign: "center",
                    minWidth: "300px"
                });

                if (daten.ressourcen.wasser < ausgewaehltesProdukt.wasserverbrauch &&
                    daten.ressourcen.energie < ausgewaehltesProdukt.energieverbrauch) {
                    ressDialog.innerHTML = `
                        <h2>Nicht genug Ressourcen!</h2>
                        <p>Du hast weder genug Wasser noch Energie, um dieses Produkt anzufertigen.</p>
                    `;
                } else if (daten.ressourcen.wasser < ausgewaehltesProdukt.wasserverbrauch) {
                    ressDialog.innerHTML = `
                        <h2>Nicht genug Wasser!</h2>
                        <p>Du hast nicht genügend Wasser, um dieses Produkt anzufertigen.</p>
                    `;
                } else {
                    ressDialog.innerHTML = `
                        <h2>Nicht genug Energie!</h2>
                        <p>Du hast nicht genügend Energie, um dieses Produkt anzufertigen.</p>
                    `;
                }

                const closeBtn = document.createElement("button");
                closeBtn.textContent = "Zurück";
                closeBtn.className = "ui_unten";
                closeBtn.addEventListener("click", () => ressOverlay.remove());

                ressDialog.appendChild(closeBtn);
                ressOverlay.appendChild(ressDialog);
                document.body.appendChild(ressOverlay);
                return;
            }

            // Pflanzen prüfen
            if (ausgewaehltesProdukt.pflanzen && typeof ausgewaehltesProdukt.pflanzen === "object") {
                const fehlendePflanzen = [];
                Object.entries(ausgewaehltesProdukt.pflanzen).forEach(([pflanzenName, benoetigt]) => {
                    const pflanze = Object.values(daten.pflanzenDaten).find(p => p.name === pflanzenName);
                    const vorhanden = pflanze ? pflanze.geerntet || 0 : 0;
                    if (vorhanden < benoetigt) {
                        fehlendePflanzen.push(`${pflanzenName} (${vorhanden}/${benoetigt})`);
                    }
                });

                if (fehlendePflanzen.length > 0) {
                    const fehlOverlay = document.createElement("div");
                    Object.assign(fehlOverlay.style, {
                        position: "fixed", top: 0, left: 0,
                        width: "100vw", height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    });

                    const fehlDialog = document.createElement("div");
                    Object.assign(fehlDialog.style, {
                        backgroundColor: "white", padding: "2rem",
                        borderRadius: "12px", textAlign: "center",
                        minWidth: "300px"
                    });

                    fehlDialog.innerHTML = `
                        <h2>Nicht genug Pflanzen!</h2>
                        <p>Du benötigst noch:</p>
                        <ul style="text-align:left;">
                            ${fehlendePflanzen.map(f => `<li>${f}</li>`).join("")}
                        </ul>
                    `;

                    const closeBtn = document.createElement("button");
                    closeBtn.textContent = "Zurück";
                    closeBtn.className = "ui_unten";
                    closeBtn.addEventListener("click", () => fehlOverlay.remove());

                    fehlDialog.appendChild(closeBtn);
                    fehlOverlay.appendChild(fehlDialog);
                    document.body.appendChild(fehlOverlay);
                    return;
                }

                // Pflanzen abziehen
                Object.entries(ausgewaehltesProdukt.pflanzen).forEach(([pflanzenName, benoetigt]) => {
                    const pflanze = Object.values(daten.pflanzenDaten).find(p => p.name === pflanzenName);
                    if (pflanze) pflanze.geerntet = (pflanze.geerntet || 0) - benoetigt;
                });
            }

            // Produktion starten
            if (daten.einstellungen.effekte) {
                const sound = new Audio("gepflanzt_normale.mp3");
                sound.volume = 0.25;
                sound.play().catch(() => { });
            }

            daten.ressourcen.energie -= ausgewaehltesProdukt.energieverbrauch;
            daten.ressourcen.wasser -= ausgewaehltesProdukt.wasserverbrauch;
            feldObjekt.status = "inProduktion";
            feldObjekt.produktID = ausgewaehltesProdukt.fortschritt;
            feldObjekt.zeit_fertig = Date.now() + (ausgewaehltesProdukt.dauer * 60 * 1000);

            alleBenutzer[aktuellerBenutzerName] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

            overlay.remove();
            gebaeudeAnzeigen();
        });

        btnDiv.appendChild(abbrechenBtn);
        btnDiv.appendChild(startBtn);
        dialog.appendChild(btnDiv);

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    }
}



function rezeptKaufen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    const rezeptPreis = 25;

    if (daten.ressourcen.gold < rezeptPreis) {
        const ressOverlay = document.createElement("div");
        Object.assign(ressOverlay.style, {
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center"
        });

        const ressDialog = document.createElement("div");
        Object.assign(ressDialog.style, {
            backgroundColor: "white", padding: "2rem",
            borderRadius: "12px", textAlign: "center",
            minWidth: "300px"
        });
        ressDialog.innerHTML = `
            <h2>Nicht genug Gold!</h2>
            <p>Du hast nicht genügend Gold, um ein Rezept zu kaufen.</p>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Zurück";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => ressOverlay.remove());

        ressDialog.appendChild(closeBtn);
        ressOverlay.appendChild(ressDialog);
        document.body.appendChild(ressOverlay);
        return;
    }

    // Alle freigeschalteten Gebäude sammeln
    const freigeschalteteGebaeude = Object.keys(daten.produkte).filter(gName => {
        const gebaeude = daten.produkte[gName][0];
        return gebaeude && gebaeude.freigeschaltet;
    });

    // Alle Rezepte, die noch nicht freigeschaltet sind
    let verfuegbareRezepte = [];
    freigeschalteteGebaeude.forEach(gName => {
        const gebaeudeRezepte = daten.produkte[gName];
        gebaeudeRezepte.forEach(r => {
            if (!r.freigeschaltet) {
                verfuegbareRezepte.push(r);
            }
        });
    });

    if (verfuegbareRezepte.length === 0) {
        const ressOverlay = document.createElement("div");
        Object.assign(ressOverlay.style, {
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center"
        });

        const ressDialog = document.createElement("div");
        Object.assign(ressDialog.style, {
            backgroundColor: "white", padding: "2rem",
            borderRadius: "12px", textAlign: "center",
            minWidth: "300px"
        });
        ressDialog.innerHTML = `
            <h2>Keine Rezepte auffindbar!</h2>
            <p>Du hast alle derzeit verfügbaren Rezepte für deine Gebäude freigeschaltet.</p>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Zurück";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => ressOverlay.remove());

        ressDialog.appendChild(closeBtn);
        ressOverlay.appendChild(ressDialog);
        document.body.appendChild(ressOverlay);
        return;
    }

    // Zufälliges Rezept auswählen
    const zufallIndex = Math.floor(Math.random() * verfuegbareRezepte.length);
    const gekauftesRezept = verfuegbareRezepte[zufallIndex];

    // Gold abziehen und Rezept freischalten
    daten.ressourcen.gold -= rezeptPreis;
    gekauftesRezept.freigeschaltet = true;

    alleBenutzer[aktuellerBenutzer] = daten;
    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    // 🔸 Sound abspielen
    if (daten.einstellungen.effekte) {
        const sound = new Audio("deine_reise_freigeschaltet.mp3");
        sound.volume = 1.0;
        sound.play().catch(() => { });
    }

    // Overlay anzeigen
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed", top: 0, left: 0,
        width: "100vw", height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center"
    });

    const dialog = document.createElement("div");
    Object.assign(dialog.style, {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "12px",
        textAlign: "center",
        minWidth: "300px"
    });

    dialog.innerHTML = `
        <h2>Rezept gekauft!</h2>
        <p>Du hast das Rezept für <b>${gekauftesRezept.name}</b> freigeschaltet.</p>
        <p>💰 -${rezeptPreis} Gold</p>
    `;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "OK";
    closeBtn.className = "ui_unten";
    closeBtn.addEventListener("click", () => {
        overlay.remove();
        // UI sofort aktualisieren, damit das neue Rezept sichtbar ist
        gebaeudeAnzeigen();
    });

    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}


// 🏭 BETRIEBSMITTEL
let betriebsmittelTimer = [];

function betriebsmittelAnzeigen() {
    const container = document.getElementById("betriebsmittelContainer");
    container.innerHTML = "";

    // ⏹ Alle alten Timer stoppen
    betriebsmittelTimer.forEach(id => clearInterval(id));
    betriebsmittelTimer = [];

    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    // 🕓 Offline-Earnings berechnen (einmal beim Laden!)
    const letzteSitzung = daten.letzterBesuch || Date.now();
    const jetzt = Date.now();
    const offlineDauerMinuten = Math.floor((jetzt - letzteSitzung) / 60000); // ganze Minuten

    if (offlineDauerMinuten > 0) {
        Object.keys(daten.betriebsmittel).forEach(betriebsmittelName => {
            const info = daten.betriebsmittel[betriebsmittelName];
            if (!info || !info.freigeschaltet) return;

            if (!info.basisDauer) info.basisDauer = info.dauer;
            const effektiveDauer = Math.max(0.25, info.basisDauer - ((info.betriebsmittel_level - 1) * 0.03));
            const möglicheZyklen = Math.floor(offlineDauerMinuten / effektiveDauer);

            if (möglicheZyklen > 0) {
                if (info.wasser > 0) {
                    info.lager.wasser = Math.min(
                        daten.betriebsmittel_lager["wasser"],
                        info.lager.wasser + möglicheZyklen
                    );
                } else if (info.energie > 0) {
                    info.lager.energie = Math.min(
                        daten.betriebsmittel_lager["energie"],
                        info.lager.energie + möglicheZyklen
                    );
                } else if (info.gold > 0) {
                    info.lager.gold = Math.min(
                        daten.betriebsmittel_lager["gold"],
                        info.lager.gold + möglicheZyklen
                    );
                } else if (info.juwelen > 0) {
                    info.lager.juwelen = Math.min(
                        daten.betriebsmittel_lager["juwelen"],
                        info.lager.juwelen + möglicheZyklen
                    );
                }
            }
        });
    }

    // 📝 neuen letzten Besuch setzen
    daten.letzterBesuch = jetzt;
    alleBenutzer[aktuellerBenutzer] = daten;
    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    // 🧱 Anzeige bauen
    Object.keys(daten.betriebsmittel).forEach(betriebsmittelName => {
        const info = daten.betriebsmittel[betriebsmittelName];
        if (!info) return;

        const box = document.createElement("div");
        box.className = "gebaeudeBox";

        // Titel
        const title = document.createElement("h2");
        title.textContent = `${info.name || betriebsmittelName}`;
        box.appendChild(title);

        const btnContainer = document.createElement("div");
        btnContainer.style.display = "flex";
        btnContainer.style.gap = "8px";
        btnContainer.style.marginTop = "8px";

        // 🟠 Freischalten
        if (!info.freigeschaltet) {
            const freischaltenBtn = document.createElement("button");
            freischaltenBtn.textContent = `Freischalten für ${info.ansehen} Ansehen`;
            freischaltenBtn.className = "ui_unten";
            freischaltenBtn.addEventListener("click", () => {
                if (daten.benutzer_ansehen >= info.ansehen && daten.benutzer_level >= info.level) {
                    daten.benutzer_ansehen -= info.ansehen;
                    info.freigeschaltet = true;
                    info.lager = { wasser: 0, energie: 0, gold: 0, juwelen: 0 };
                    info.letzteBerechnung = Date.now();
                    if (!info.basisDauer) info.basisDauer = info.dauer;

                    alleBenutzer[aktuellerBenutzer] = daten;
                    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                    betriebsmittelAnzeigen();
                } else {
                    showOverlay("Freischalten nicht möglich!",
                        daten.benutzer_ansehen < info.ansehen ?
                            `Zu wenig Ansehen! Du benötigst ${info.ansehen} Ansehen.` :
                            `Level zu niedrig! Du benötigst Level ${info.level}.`);
                }
            });
            btnContainer.appendChild(freischaltenBtn);
        }
        else {
            // Effizienz
            if (!info.basisDauer) info.basisDauer = info.dauer;
            const effektiveDauer = Math.max(0.25, info.basisDauer - ((info.betriebsmittel_level - 1) * 0.03));

            const effizienzText = document.createElement("p");
            effizienzText.style.fontWeight = "bold";
            effizienzText.textContent = `⏱ Effizienz: ${effektiveDauer.toFixed(2)} min / +1`;
            box.appendChild(effizienzText);

            // Lager
            const lagerText = document.createElement("p");
            box.appendChild(lagerText);

            // Countdown
            const countdownText = document.createElement("p");
            countdownText.style.fontSize = "0.9em";
            countdownText.style.color = "#666";
            box.appendChild(countdownText);

            // 🧠 Hilfsfunktion Lager prüfen
            function istLagerVoll() {
                if (info.wasser > 0) return info.lager.wasser >= daten.betriebsmittel_lager["wasser"];
                if (info.energie > 0) return info.lager.energie >= daten.betriebsmittel_lager["energie"];
                if (info.gold > 0) return info.lager.gold >= daten.betriebsmittel_lager["gold"];
                if (info.juwelen > 0) return info.lager.juwelen >= daten.betriebsmittel_lager["juwelen"];
                return false;
            }

            const updateLager = () => {
                const jetzt = Date.now();

                // ⛔ Lager voll → Timer pausieren
                if (istLagerVoll()) {
                    countdownText.textContent = "🔴 Produktion wurde pausiert !";

                    // Lagerstand trotzdem anzeigen
                    if (info.wasser > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.wasser)} / ${daten.betriebsmittel_lager["wasser"]}`;
                    else if (info.energie > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.energie)} / ${daten.betriebsmittel_lager["energie"]}`;
                    else if (info.gold > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.gold)} / ${daten.betriebsmittel_lager["gold"]}`;
                    else if (info.juwelen > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.juwelen)} / ${daten.betriebsmittel_lager["juwelen"]}`;

                    if (info._timerId) {
                        clearInterval(info._timerId);
                        info._timerId = null;
                    }
                    return;
                }


                if (!info.fertiggewachsen) {
                    info.fertiggewachsen = jetzt + effektiveDauer * 60000;
                }

                if (jetzt >= info.fertiggewachsen) {
                    if (info.wasser > 0) info.lager.wasser = Math.min(daten.betriebsmittel_lager["wasser"], info.lager.wasser + 1);
                    else if (info.energie > 0) info.lager.energie = Math.min(daten.betriebsmittel_lager["energie"], info.lager.energie + 1);
                    else if (info.gold > 0) info.lager.gold = Math.min(daten.betriebsmittel_lager["gold"], info.lager.gold + 1);
                    else if (info.juwelen > 0) info.lager.juwelen = Math.min(daten.betriebsmittel_lager["juwelen"], info.lager.juwelen + 1);

                    info.fertiggewachsen = jetzt + effektiveDauer * 60000;
                }

                // Lagertext
                if (info.wasser > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.wasser)} Wasser / ${daten.betriebsmittel_lager["wasser"]}`;
                else if (info.energie > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.energie)} Energie / ${daten.betriebsmittel_lager["energie"]}`;
                else if (info.gold > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.gold)} Gold / ${daten.betriebsmittel_lager["gold"]}`;
                else if (info.juwelen > 0) lagerText.textContent = `Im Lager: ${Math.floor(info.lager.juwelen)} Juwelen / ${daten.betriebsmittel_lager["juwelen"]}`;

                // Countdown
                const rest = Math.max(0, info.fertiggewachsen - jetzt);
                const min = Math.floor(rest / 60000);
                const sek = Math.floor((rest % 60000) / 1000);
                countdownText.textContent = `🟢 Produziert in: ${min}:${sek.toString().padStart(2, "0")} min`;

                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
            };

            const intervalId = setInterval(updateLager, 1000);
            betriebsmittelTimer.push(intervalId);
            updateLager();

            // 🟢 Einsammeln
            const einsammelnBtn = document.createElement("button");
            einsammelnBtn.textContent = "Einsammeln";
            einsammelnBtn.className = "ui_unten";
            einsammelnBtn.addEventListener("click", () => {
                let gesammelt = 0;

                function einsammelnRessource(typ) {
                    const imLager = info.lager[typ];
                    if (imLager <= 0) return 0;

                    const aktuell = daten.ressourcen[typ] || 0;
                    const max = daten.lagerplatz[typ];
                    const frei = max - aktuell;
                    if (frei <= 0) return 0;

                    const menge = Math.min(imLager, frei);
                    daten.ressourcen[typ] = aktuell + menge;
                    info.lager[typ] -= menge;
                    return menge;
                }

                if (info.wasser > 0) gesammelt = einsammelnRessource("wasser");
                else if (info.energie > 0) gesammelt = einsammelnRessource("energie");
                else if (info.gold > 0) gesammelt = einsammelnRessource("gold");
                else if (info.juwelen > 0) gesammelt = einsammelnRessource("juwelen");

                if (gesammelt > 0) {
                    showOverlay("Eingesammelt!", `Du hast ${gesammelt} der Ressource eingesammelt.`);
                } else {
                    showOverlay("Lager voll!", `Du kannst keine weiteren Ressourcen einlagern.`);
                }

                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

                // 🟢 Timer neu starten, falls pausiert
                if (!info._timerId) {
                    info.fertiggewachsen = Date.now() + effektiveDauer * 60000;

                    const newTimerId = setInterval(updateLager, 1000);
                    info._timerId = newTimerId;
                    betriebsmittelTimer.push(newTimerId);
                }
                updateLager();
            });


            btnContainer.appendChild(einsammelnBtn);

            // 🛠 Verbessern
            const verbessernBtn = document.createElement("button");
            verbessernBtn.className = "ui_unten";

            if (info.betriebsmittel_level >= info.anzahl_slots) {
                verbessernBtn.textContent = "Ausgebaut";
                verbessernBtn.style.backgroundColor = "gray";
                verbessernBtn.disabled = true;
            } else {
                const kosten = info.ansehen + (info.betriebsmittel_level * 3);
                verbessernBtn.textContent = `Verbessern (${kosten} Ansehen)`;

                verbessernBtn.addEventListener("click", () => {
                    if (daten.benutzer_ansehen >= kosten) {
                        daten.benutzer_ansehen -= kosten;
                        info.betriebsmittel_level += 1;

                        alleBenutzer[aktuellerBenutzer] = daten;
                        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

                        betriebsmittelAnzeigen();
                        showOverlay(`${info.name} verbessert!`, `Produktion läuft jetzt schneller!`);
                    } else {
                        showOverlay("Zu wenig Ansehen!", `Du benötigst ${kosten} Ansehen.`);
                    }
                });
            }
            btnContainer.appendChild(verbessernBtn);
        }

        box.appendChild(btnContainer);
        container.appendChild(box);
    });

    // 🪄 Overlay-Helfer
    function showOverlay(titel, text) {
        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
        });

        const dialog = document.createElement("div");
        Object.assign(dialog.style, {
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            textAlign: "center",
            minWidth: "300px"
        });

        dialog.innerHTML = `<h2>${titel}</h2><p>${text}</p>`;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Bestätigen";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => overlay.remove());

        dialog.appendChild(closeBtn);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    }
}
