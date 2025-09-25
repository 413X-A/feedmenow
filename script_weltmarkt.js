window.onload = function () {
    ui_setzen();
    ueberschrift();
    setupWeltmarkt();
}

function ueberschrift() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    document.getElementById("ueberschrift_felder").innerHTML = `<b> 🌍 Der Weltmarkt </b>`;
}


// ========================
// Overlay-Funktion (global)
// ========================
function zeigeOverlay(titelText, nachricht) {
    const vorhandenesOverlay = document.getElementById("overlay_global");
    if (vorhandenesOverlay) vorhandenesOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "overlay_global";
    Object.assign(overlay.style, {
        position: "fixed",
        top: 0, left: 0,
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

    dialog.innerHTML = `<h2>${titelText}</h2><p>${nachricht}</p>`;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Zurück";
    closeBtn.className = "ui_unten";
    closeBtn.addEventListener("click", () => overlay.remove());

    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}

function setupWeltmarkt() {
    const box = document.getElementById("weltmarkt_box");
    if (!box) return;

    const items = box.querySelectorAll(".weltmarkt-item");

    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    const level = daten.benutzer_level || 1;
    const ressKosten = { wasser: 1, energie: 2, duenger: 3 };

    items.forEach(item => {
        const resName = item.dataset.res;

        // Magie entfernen
        if (resName === "magie") {
            item.remove();
            return;
        }

        const minusBtn = item.querySelector(".weltmarkt-minus");
        const plusBtn = item.querySelector(".weltmarkt-plus");
        const input = item.querySelector("input");
        const kostenSpan = item.querySelector(".kosten");
        const kaufenBtn = item.querySelector(".weltmarkt-kaufen");
        input.readOnly = true;

        function getMaxKaufmenge() {
            const maxLager = daten.lagerplatz[resName] || 0;
            const aktuell = daten.ressourcen[resName] || 0;
            return maxLager - aktuell;
        }

        function getStandardKaufmenge() {
            return Math.ceil(getMaxKaufmenge() / 2);
        }

        function updateKosten() {
            const menge = parseInt(input.value) || 0;
            const kosten = menge * (ressKosten[resName] || 1) * level;
            kostenSpan.textContent = `Für ${kosten} Gold`;
        }

        // Standardwert beim Laden setzen
        input.value = getStandardKaufmenge();
        updateKosten();

        plusBtn.addEventListener("click", () => {
            let menge = parseInt(input.value) || 0;
            if (menge < getMaxKaufmenge()) {
                menge++;
                input.value = menge;
                updateKosten();
            }
        });

        minusBtn.addEventListener("click", () => {
            let menge = parseInt(input.value) || 0;
            if (menge > 0) {
                menge--;
                input.value = menge;
                updateKosten();
            }
        });

        kaufenBtn.addEventListener("click", () => {
            let menge = parseInt(input.value) || 0;
            resNameGroß = resName.charAt(0).toUpperCase() + resName.slice(1);
            if (menge <= 0) return;

            const maxKauf = getMaxKaufmenge();
            if (menge > maxKauf) {
                zeigeOverlay("Fehler", `Du kannst nur maximal ${maxKauf} ${resName} kaufen!`);
                return;
            }

            const kosten = menge * (ressKosten[resName] || 1) * level;
            if (daten.ressourcen.gold < kosten) {
                zeigeOverlay("Nicht genug Gold!", `Du hast nicht genügend Gold, um ${resNameGroß} zu kaufen.`);
                return;
            }

            // Kauf durchführen
            daten.ressourcen[resName] += menge;
            daten.ressourcen.gold -= kosten;

            alleBenutzer[aktuellerBenutzer] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

            // Standardwert nach Kauf neu setzen
            input.value = getStandardKaufmenge();
            updateKosten();
        });
    });
}


// Initialisierung
setupWeltmarkt();
updateRessourcenUI();




// 🌱 Normaler Pflanzen-Shop
function zeige_samenShopNormale() {
    zeige_samenShopAllgemein("normale");
}

// 🔮 Magischer Pflanzen-Shop
function zeige_samenShopMagische() {
    zeige_samenShopAllgemein("magische");
}

function zeige_samenShopAllgemein(typ) {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    // Funktion für kleine Overlay-Meldungen
    function zeigeFehlerOverlay(titelText, nachricht) {
        const vorhandenesOverlay = document.getElementById("levelup_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        const ressOverlay = document.createElement("div");
        ressOverlay.id = "levelup_overlay";
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
            <h2>${titelText}</h2>
            <p>${nachricht}</p>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Zurück";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => ressOverlay.remove());

        ressDialog.appendChild(closeBtn);
        ressOverlay.appendChild(ressDialog);
        document.body.appendChild(ressOverlay);
    }

    // Pflanzenliste filtern
    let aktuellePflanzen = [];
    if (typ === "normale") {
        aktuellePflanzen = Object.values(daten.pflanzenDaten || {}).filter(p => p.freigeschaltet && p.anzahlfelder === null);
    } else if (typ === "magische") {
        aktuellePflanzen = Object.values(daten.pflanzenDatenMagische || {}).filter(p => p.freigeschaltet && p.anzahlfelder === null);
    }

    if (aktuellePflanzen.length === 0) {
        zeigeFehlerOverlay("Keine Samen verfügbar!", "Es gibt aktuell keine Samen dieses Typs zum Kauf oder Verkauf.");
        return;
    }

    // Overlay erstellen
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed", top: 0, left: 0,
        width: "100vw", height: "100vh",
        display: "flex", justifyContent: "center", alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 9999
    });

    const dialog = document.createElement("div");
    Object.assign(dialog.style, {
        width: "700px",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        maxHeight: "90vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    });

    const titel = document.createElement("h2");
    titel.textContent = typ === "normale" ? "🌱 Samen-Shop (Normale Pflanzen)" : "🔮 Samen-Shop (Magische Pflanzen)";
    titel.style.textAlign = 'center';
    dialog.appendChild(titel);

    // Nach Farm gruppieren
    const farmGruppen = {};
    aktuellePflanzen.forEach(p => {
        const farm = p.feld || "Unbekannte Farm";
        if (!farmGruppen[farm]) farmGruppen[farm] = [];
        farmGruppen[farm].push(p);
    });

    for (const [farm, pflanzenListe] of Object.entries(farmGruppen)) {
        if (pflanzenListe.length === 0) continue;

        const farmTitel = document.createElement("h3");
        farmTitel.textContent = farm;
        farmTitel.style.marginTop = "1rem";
        farmTitel.style.textAlign = "left";
        farmTitel.style.color = "#2e3d2f";
        dialog.appendChild(farmTitel);

        const grid = document.createElement("div");
        Object.assign(grid.style, {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.5rem"
        });

        pflanzenListe.forEach(p => {
            // Aktuelle Daten aus LocalStorage holen
            const datenAktuell = JSON.parse(localStorage.getItem("benutzer"))[aktuellerBenutzer];
            const pflanzeKey = p.fortschritt;
            const pflanzeDaten = typ === "normale"
                ? datenAktuell.pflanzenDaten[pflanzeKey]
                : datenAktuell.pflanzenDatenMagische[pflanzeKey];

            // Sicherstellen, dass geerntet existiert
            pflanzeDaten.geerntet = pflanzeDaten.geerntet || 0;

            const card = document.createElement("div");
            card.className = "plant_card";
            Object.assign(card.style, {
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "0.8rem",
                background: "#f9fff9",
                textAlign: "center"
            });

            card.innerHTML = `
                <h3>${pflanzeDaten.name}</h3>
                <p>💰 Kaufpreis: ${pflanzeDaten.kaufpreis} Gold</p>
                <p>💵 Verkaufspreis: ${pflanzeDaten.verkaufspreis} Gold</p>
                <p>🌱 Samen übrig: ${pflanzeDaten.samen || 0}</p>
                <p>🟢 Geerntet: ${pflanzeDaten.geerntet}</p>
            `;

            // Kaufen-Button
            const kaufBtn = document.createElement("button");
            kaufBtn.textContent = "Kaufen";
            kaufBtn.className = "ui_unten";
            kaufBtn.style.backgroundColor = "#2e7d32";
            kaufBtn.style.color = "white";
            kaufBtn.style.marginRight = "0.5rem";

            kaufBtn.addEventListener("click", () => {
                if (daten.ressourcen.gold < pflanzeDaten.kaufpreis) {
                    zeigeFehlerOverlay("Nicht genug Gold!", `Du hast nicht genügend Gold, um ${pflanzeDaten.name}-Samen zu kaufen.`);
                    return;
                }

                daten.ressourcen.gold -= pflanzeDaten.kaufpreis;
                pflanzeDaten.samen = (pflanzeDaten.samen || 0) + 1;

                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                updateRessourcenUI();
                card.querySelector("p:nth-child(4)").textContent = `🌱 Samen übrig: ${pflanzeDaten.samen || 0}`;
            });

            // Verkaufen-Button
            const verkaufBtn = document.createElement("button");
            verkaufBtn.textContent = "Verkaufen";
            verkaufBtn.className = "ui_unten";
            verkaufBtn.style.backgroundColor = "#b71c1c";
            verkaufBtn.style.color = "white";

            verkaufBtn.addEventListener("click", () => {
                const geerntet = pflanzeDaten.geerntet || 0;
                if (geerntet <= 0) {
                    zeigeFehlerOverlay("Keine geernteten Pflanzen!", `Du hast keine geernteten ${pflanzeDaten.name} !`);
                    return;
                }

                daten.ressourcen.gold += pflanzeDaten.verkaufspreis;
                pflanzeDaten.geerntet -= 1;

                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                updateRessourcenUI();
                card.querySelector("p:nth-child(5)").textContent = `🟢 Geerntet: ${pflanzeDaten.geerntet}`;
            });

            // Buttons zusammen in div
            const buttonsDiv = document.createElement("div");
            buttonsDiv.style.display = "flex";
            buttonsDiv.style.justifyContent = "center";
            buttonsDiv.style.marginTop = "0.5rem";
            buttonsDiv.appendChild(kaufBtn);
            buttonsDiv.appendChild(verkaufBtn);

            card.appendChild(buttonsDiv);
            grid.appendChild(card);
        });

        dialog.appendChild(grid);
    }

    // Schließen-Button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Zurück";
    closeBtn.className = "ui_unten";
    closeBtn.style.marginTop = "1rem";
    closeBtn.addEventListener("click", () => overlay.remove());

    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}
