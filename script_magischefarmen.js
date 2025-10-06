window.onload = function () {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");

    if (!aktuellerBenutzer) {
        alert("Kein Benutzer eingeloggt!");
        window.location.href = "index.html";
        return;
    }

    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    if (!daten) {
        alert("Benutzerdaten konnten nicht geladen werden!");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("ueberschrift_felder").innerHTML = `<b> ✨ Dein ${daten.aktuelleFarm}</b>`;

    ui_setzen();
    felderAnzeigen();

    setInterval(felder_faerben, 100);
}


function felder_faerben() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten.aktuelleFarm) return;

    const pflanze = Object.values(daten.pflanzenDatenMagische)
        .find(t => t.feld && t.feld.includes(daten.aktuelleFarm));
    if (!pflanze) return;

    const feldName_felder = pflanze.anzahlfelder || 0;
    const container = document.getElementById("felderContainer");
    if (!container) return;

    for (let i = 1; i <= feldName_felder; i++) {
        const feldObjekt = pflanze.felder[i];
        const item = container.children[i - 1];
        if (!feldObjekt || !item) continue;

        if (feldObjekt.status === "bepflanzt") {
            if (Date.now() >= feldObjekt.zeit_gewachsen) {
                item.style.backgroundColor = "#2e7d32"; // Dunkelgrün
            } else {
                item.style.backgroundColor = "#6c9e58"; // Hellgrün
            }
        } else {
            item.style.backgroundColor = "gray"; // leer
        }
    }
}



// Felder anzeigen
function felderAnzeigen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten.aktuelleFarm) return;

    const pflanze = Object.values(daten.pflanzenDatenMagische)
        .find(t => t.feld && t.feld.includes(daten.aktuelleFarm));

    if (!pflanze) return;

    const feldName_felder = pflanze.anzahlfelder || 0;
    const container = document.getElementById("felderContainer");
    container.innerHTML = "";

    for (let i = 1; i <= feldName_felder; i++) {
        const feldObjekt = pflanze.felder[i];

        const item = document.createElement("div");
        item.className = "feld standard"; // Grundklasse

        if (feldObjekt.status === "bepflanzt") {
            if (Date.now() >= feldObjekt.zeit_gewachsen) {
                // Fertig gewachsen -> Dunkelgrün
                item.style.backgroundColor = "#2e7d32";
            } else {
                // Noch am Wachsen -> Hellgrün
                item.style.backgroundColor = "#6c9e58";
            }
        }

        item.addEventListener("click", () => feld_angeklickt(daten, pflanze, i));
        container.appendChild(item);
    }

    ui_setzen();

}

function feld_angeklickt(daten, pflanze, feld_nummer) {
    const aktuellerBenutzerName = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    let feldObjekt = pflanze.felder[feld_nummer];
    if (!feldObjekt) return;

    // --------------------
    // Feld ist bepflanzt
    // --------------------
    if (feldObjekt.status === "bepflanzt") {
        const pflanzeDaten = daten.pflanzenDatenMagische[feldObjekt.pflanze];

        if (!pflanzeDaten) {
            feldObjekt.status = "leer";
            feldObjekt.pflanze = null;
            feldObjekt.zeit_gepflanzt = null;
            feldObjekt.zeit_gewachsen = null;

            alleBenutzer[aktuellerBenutzerName] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

            felderAnzeigen();
            return;
        }
        
        const ansehen = pflanzeDaten.ansehen || 0;
        let gewinn = 0;

        // Bonus: 15% vom Verkaufspreis
        if (pflanzeDaten.bonus === true) {
            gewinn = pflanzeDaten.verkaufspreis;
            gewinn += Math.floor(pflanzeDaten.verkaufspreis * 0.15);
        }

        if (Date.now() < feldObjekt.zeit_gewachsen) {
            // Pflanze noch am Wachsen → Info Overlay
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
                <h2>${pflanzeDaten.name}</h2>
                <p>Wird fertig um: <b>${new Date(feldObjekt.zeit_gewachsen).toLocaleTimeString()}</b></p>
            `;

            const closeBtn = document.createElement("button");
            closeBtn.textContent = "Schließen";
            closeBtn.className = "ui_unten";
            closeBtn.addEventListener("click", () => overlay.remove());
            dialog.appendChild(closeBtn);

            overlay.appendChild(dialog);
            document.body.appendChild(overlay);

        } else {
            if (daten.ressourcen.anz_pflanzen < daten.lagerplatz.pflanzen) {
                // Pflanze fertig → ernten

                // Sound Effekt
            if (daten.einstellungen.effekte) {
                const purchaseSound = new Audio("gepflanzt_magische.mp3");
                purchaseSound.volume = 0.25;
                purchaseSound.play().catch(() => { });
            }

                daten.ressourcen.gold = (daten.ressourcen.gold || 0) + gewinn;
                daten.benutzer_exp = (daten.benutzer_exp || 0) + pflanzeDaten.xp;
                daten.benutzer_ansehen = (daten.benutzer_ansehen || 0) + ansehen;

                pflanzeDaten.geerntet = (pflanzeDaten.geerntet || 0) + 1; // GEERNETE PFLANZEN

                daten.ressourcen.anz_pflanzen += 1;

                // Feld zurücksetzen
                feldObjekt.status = "leer";
                feldObjekt.pflanze = null;
                feldObjekt.zeit_gepflanzt = null;
                feldObjekt.zeit_gewachsen = null;

                // LocalStorage speichern
                alleBenutzer[aktuellerBenutzerName] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

                // Overlay mit Ernte-Info
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
                    <h2>${pflanzeDaten.name} geerntet!</h2>
                    <p>📚 +${ansehen} Ansehen</p>
                    <p>✨ +${gewinn} Bonus-Gold</p>
                `;

                const closeBtn = document.createElement("button");
                closeBtn.textContent = "OK";
                closeBtn.className = "ui_unten";
                closeBtn.addEventListener("click", () => {
                    overlay.remove();
                    felderAnzeigen();
                });

                dialog.appendChild(closeBtn);
                overlay.appendChild(dialog);
                document.body.appendChild(overlay);
            } else {
                // Overlay für nicht genügend Lagerplatz
            const ressOverlay = document.createElement("div");
            Object.assign(ressOverlay.style, {
                position: "fixed",
                top: 0, left: 0,
                width: "100vw", height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex", justifyContent: "center", alignItems: "center"
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
                    <h2>Nicht genug Lagerplatz!</h2>
                    <p>Du hast weder genug Lagerplatz, um diese Pflanze zu ernten.</p>
                `;

            const closeBtn = document.createElement("button");
            closeBtn.textContent = "Zurück";
            closeBtn.className = "ui_unten";
            closeBtn.addEventListener("click", () => ressOverlay.remove());

            ressDialog.appendChild(closeBtn);
            ressOverlay.appendChild(ressDialog);
            document.body.appendChild(ressOverlay);
            }
        }

        return;
    }

    // --------------------
    // Feld ist leer → Pflanze auswählen
    // --------------------
    const aktuellePflanzen = Object.values(daten.pflanzenDatenMagische).filter(p => {
        return p.freigeschaltet === true &&
            p.anzahlfelder === null &&
            p.bonus === false &&
            p.feld === daten.aktuelleFarm;
    });

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
    titel.textContent = `Pflanzen für ${daten.aktuelleFarm}`;
    titel.style.textAlign = 'center';
    dialog.appendChild(titel);

    const grid = document.createElement("div");
    Object.assign(grid.style, {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "0.5rem" // Karten enger zusammen
    });

    let ausgewähltePflanze = null;

    aktuellePflanzen.forEach(p => {
        const card = document.createElement("div");
        card.className = "plant_card";

        card.innerHTML = `
            <h3>${p.name}</h3>
            <p>🕛 ${p.dauer}min Wachszeit</p>
            <p>🌱 Samen übrig: ${p.samen || 0}</p>
            <p>💧 -${p.wasserverbrauch} Wasser</p>
            <p>⚡ -${p.energieverbrauch} Energie</p>
            <p>🔮 -${p.magieverbrauch} Magie</p>
            <p>📚 ${p.ansehen} Ansehen</p>
            <p>💰 +${p.verkaufspreis} Verkaufspreis</p>
            <p>✨ ${p.bonus ? "Bonus aktiv" : "Kein Bonus"}</p>
        `;

        card.addEventListener('click', () => {
            ausgewähltePflanze = p;
            Array.from(grid.children).forEach(c => c.style.border = "1px solid #ccc");
            card.style.border = "2px solid green";

            // Setzen-Button aktivieren
            setzenButton.disabled = false;
            setzenButton.style.backgroundColor = "#2e7d32";
            setzenButton.style.cursor = "pointer";
        });

        grid.appendChild(card);
    });

    dialog.appendChild(grid);

    // Buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.justifyContent = 'space-between';
    buttonsDiv.style.marginTop = '0.5rem'; // enger

    const abbrechenButton = document.createElement("button");
    abbrechenButton.textContent = "Abbrechen";
    abbrechenButton.className = "ui_unten";
    abbrechenButton.addEventListener('click', () => overlay.remove());

    const setzenButton = document.createElement("button");
    setzenButton.textContent = "Setzen";
    setzenButton.className = "ui_unten";
    setzenButton.disabled = true;
    setzenButton.style.backgroundColor = "#888";
    setzenButton.style.cursor = "not-allowed";

    setzenButton.addEventListener('click', () => {
        if (!ausgewähltePflanze) return;

        if (ausgewähltePflanze.samen <= 0) {
            // Overlay für nicht genügend Ressourcen
            const ressOverlay = document.createElement("div");
            Object.assign(ressOverlay.style, {
                position: "fixed",
                top: 0, left: 0,
                width: "100vw", height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex", justifyContent: "center", alignItems: "center"
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
                    <h2>Nicht genug Samen!</h2>
                    <p>Du hast keine Samen, um diese Pflanze zu setzen.</p>
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

        if (daten.ressourcen.wasser >= ausgewähltePflanze.wasserverbrauch &&
            daten.ressourcen.energie >= ausgewähltePflanze.energieverbrauch &&
            daten.ressourcen.magie >= ausgewähltePflanze.magieverbrauch) {

            // Sound Effekt
            if (daten.einstellungen.effekte) {
                const purchaseSound = new Audio("geerntet_magische.mp3");
                purchaseSound.volume = 0.25;
                purchaseSound.play().catch(() => { });
            }

            const jetzt = Date.now();
            feldObjekt.status = "bepflanzt";
            feldObjekt.pflanze = ausgewähltePflanze.fortschritt;
            feldObjekt.zeit_gepflanzt = jetzt;
            feldObjekt.zeit_gewachsen = jetzt + (ausgewähltePflanze.dauer * 60 * 1000);

            ausgewähltePflanze.samen -= 1;
            daten.ressourcen.wasser -= ausgewähltePflanze.wasserverbrauch;
            daten.ressourcen.energie -= ausgewähltePflanze.energieverbrauch;
            daten.ressourcen.magie -= ausgewähltePflanze.magieverbrauch;

            alleBenutzer[aktuellerBenutzerName] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

            overlay.remove();
            felderAnzeigen();
            ui_setzen();
        } else {
            // Overlay für nicht genügend Ressourcen
            const ressOverlay = document.createElement("div");
            Object.assign(ressOverlay.style, {
                position: "fixed",
                top: 0, left: 0,
                width: "100vw", height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex", justifyContent: "center", alignItems: "center"
            });

            const ressDialog = document.createElement("div");
            Object.assign(ressDialog.style, {
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                minWidth: "300px"
            });

            if (daten.ressourcen.wasser < ausgewähltePflanze.wasserverbrauch &&
            daten.ressourcen.energie >= ausgewähltePflanze.energieverbrauch &&
            daten.ressourcen.magie >= ausgewähltePflanze.magieverbrauch) {
                ressDialog.innerHTML = `
                    <h2>Nicht genug Ressourcen!</h2>
                    <p>Du hast weder genug Wasser noch Energie noch Magie, um diese Pflanze zu setzen.</p>
                `;
            } else if (daten.ressourcen.wasser < ausgewähltePflanze.wasserverbrauch) {
                ressDialog.innerHTML = `
                    <h2>Nicht genug Wasser!</h2>
                    <p>Du hast nicht genügend Wasser, um diese Pflanze zu setzen.</p>
                `;
            } else if (daten.ressourcen.energie < ausgewähltePflanze.energieverbrauch) {
                ressDialog.innerHTML = `
                    <h2>Nicht genug Energie!</h2>
                    <p>Du hast nicht genügend Energie, um diese Pflanze zu setzen.</p>
                `;
            } else if (daten.ressourcen.magie < ausgewähltePflanze.magieverbrauch) {
                ressDialog.innerHTML = `
                    <h2>Nicht genug Magie!</h2>
                    <p>Du hast nicht genügend Magie, um diese Pflanze zu setzen.</p>
                `;
            }

            const closeBtn = document.createElement("button");
            closeBtn.textContent = "Zurück";
            closeBtn.className = "ui_unten";
            closeBtn.addEventListener("click", () => ressOverlay.remove());

            ressDialog.appendChild(closeBtn);
            ressOverlay.appendChild(ressDialog);
            document.body.appendChild(ressOverlay);
        }
    });

    buttonsDiv.appendChild(abbrechenButton);
    buttonsDiv.appendChild(setzenButton);
    dialog.appendChild(buttonsDiv);

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}
