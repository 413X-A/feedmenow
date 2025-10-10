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
    const box = document.getElementById("weltmarkt_betriebsmittel");

    const items = box.querySelectorAll(".weltmarkt-item");

    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    const level = daten.benutzer_level || 1;
    const ressKosten = { wasser: 1, energie: 2, duenger: 3 };

    items.forEach(item => {
        const resName = item.dataset.res;

        if (resName === "magie", resName === "juwelen") {
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

            // Sound Effekt
            if (daten.einstellungen.effekte) {
                const purchaseSound = new Audio("purchase.mp3");
                purchaseSound.volume = 1.00;
                purchaseSound.play().catch(() => { });
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


// 🌱 Normaler Pflanzen-Shop
function zeige_samenShopNormale() {
    const typ = "normale";
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    const pflanzenListe = Object.values(daten.pflanzenDaten || {}).filter(p => p.freigeschaltet && p.bonus === false && p.anzahlfelder === null);
    zeigeSamenOverlay(typ, pflanzenListe, daten, alleBenutzer, aktuellerBenutzer);
}

// 🔮 Magischer Pflanzen-Shop
function zeige_samenShopMagische() {
    const typ = "magische";
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    const pflanzenListe = Object.values(daten.pflanzenDatenMagische || {}).filter(p => p.freigeschaltet && p.bonus === false && p.anzahlfelder === null);
    zeigeSamenOverlay(typ, pflanzenListe, daten, alleBenutzer, aktuellerBenutzer);
}


// 🪄 Gemeinsame Overlay-Funktion für beide Typen
function zeigeSamenOverlay(typ, pflanzenListe, daten, alleBenutzer, aktuellerBenutzer) {

    // 🔸 Fehler-Overlay
    function zeigeFehlerOverlay(titel, nachricht) {
        const vorhandenesOverlay = document.getElementById("meldung_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        const overlay = document.createElement("div");
        overlay.id = "meldung_overlay";
        Object.assign(overlay.style, {
            position: "fixed",
            top: 0, left: 0,
            width: "100vw", height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 10000
        });

        const dialog = document.createElement("div");
        Object.assign(dialog.style, {
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "10px",
            textAlign: "center",
            minWidth: "280px"
        });

        dialog.innerHTML = `<h3>${titel}</h3><p>${nachricht}</p>`;
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.className = "ui_unten";
        btn.addEventListener("click", () => overlay.remove());

        dialog.appendChild(btn);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    }

    if (!pflanzenListe || pflanzenListe.length === 0) {
        zeigeFehlerOverlay("Keine Samen verfügbar!", `Du hast noch keine ${typ}n Samen freigeschaltet !`);
        return;
    }

    // 🌿 Hauptoverlay
    const overlay = document.createElement("div");
    Object.assign(overlay.style, {
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", justifyContent: "center", alignItems: "center",
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
        gap: "1.5rem"
    });

    const titel = document.createElement("h2");
    titel.textContent = typ === "normale" ? "🌱 Samen/Pflanzen-Shop" : "🔮 Samen/Pflanzen-Shop";
    titel.style.textAlign = "center";
    dialog.appendChild(titel);

    const gruppiert = {};
    pflanzenListe.forEach(pflanze => {
        if (!pflanze.freigeschaltet) return;
        const feldtyp = pflanze.feld;

        if (!gruppiert[feldtyp]) gruppiert[feldtyp] = [];
        gruppiert[feldtyp].push(pflanze);
    });

    // 🚀 Feldtypen durchlaufen und Abschnitte anzeigen
    Object.entries(gruppiert).forEach(([feldtyp, pflanzen]) => {
        // Abschnitt Titel
        const feldTitel = document.createElement("h3");
        feldTitel.textContent = feldtyp.charAt(0).toUpperCase() + feldtyp.slice(1);
        feldTitel.style.borderBottom = "2px solid #ccc";
        feldTitel.style.paddingBottom = "0.3rem";
        feldTitel.style.marginTop = "1rem";
        dialog.appendChild(feldTitel);

        // Grid für Pflanzenkarten
        const grid = document.createElement("div");
        Object.assign(grid.style, {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem"
        });

        pflanzen.forEach(pflanze => {
            const card = document.createElement("div");
            Object.assign(card.style, {
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                background: "#f9fff9",
                textAlign: "center"
            });

            pflanze.samen = pflanze.samen || 0;
            pflanze.geerntet = pflanze.geerntet || 0;

            card.innerHTML = `
                <h3>${pflanze.name}</h3>
                <p>💰 Kaufpreis: ${pflanze.kaufpreis} Gold</p>
                <p>💵 Verkaufspreis: ${pflanze.verkaufspreis} Gold</p>
                <p>🌱 Samen: <span class="samen_count">${pflanze.samen}</span></p>
                <p>🟢 Geerntet: <span class="geerntet_count">${pflanze.geerntet}</span></p>
            `;

            // Kaufen-Button
            const kaufBtn = document.createElement("button");
            kaufBtn.textContent = "Kaufen";
            kaufBtn.className = "ui_unten";
            kaufBtn.style.background = "#2e7d32";
            kaufBtn.style.color = "white";
            kaufBtn.addEventListener("click", () => {
                if (daten.ressourcen.gold < pflanze.kaufpreis) {
                    zeigeFehlerOverlay("Nicht genug Gold", `Du hast nicht genug Gold für ${pflanze.name}.`);
                    return;
                }

                // Sound Effekt
                if (daten.einstellungen.effekte) {
                    const purchaseSound = new Audio("purchase.mp3");
                    purchaseSound.volume = 1.00;
                    purchaseSound.play().catch(() => { });
                }

                daten.ressourcen.gold -= pflanze.kaufpreis;
                pflanze.samen += 1;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                card.querySelector(".samen_count").textContent = pflanze.samen;
            });

            // Verkaufen-Button
            const verkaufBtn = document.createElement("button");
            verkaufBtn.textContent = "Verkaufen";
            verkaufBtn.className = "ui_unten";
            verkaufBtn.style.background = "#b71c1c";
            verkaufBtn.style.color = "white";
            verkaufBtn.style.marginLeft = "0.5rem";
            verkaufBtn.addEventListener("click", () => {
                if (pflanze.geerntet < 1) {
                    zeigeFehlerOverlay("Nichts zu verkaufen", `Du hast keine geernteten ${pflanze.name}!`);
                    return;
                }

                const maxGold = daten.lagerplatz.gold ?? 0;
                const aktuellesGold = daten.ressourcen.gold;
                const neuerGoldwert = aktuellesGold + pflanze.verkaufspreis;

                if (neuerGoldwert > maxGold) {
                    zeigeFehlerOverlay("Goldlager voll", `Goldlager (${maxGold}) ist überfüllt!`);
                    return;
                }

                // Sound Effekt
                if (daten.einstellungen.effekte) {
                    const purchaseSound = new Audio("purchase.mp3");
                    purchaseSound.volume = 1.00;
                    purchaseSound.play().catch(() => { });
                }

                pflanze.geerntet -= 1;
                daten.ressourcen.anz_pflanzen -= 1;
                daten.ressourcen.gold = neuerGoldwert;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                card.querySelector(".geerntet_count").textContent = pflanze.geerntet;
            });

            const btnDiv = document.createElement("div");
            btnDiv.style.marginTop = "0.5rem";
            btnDiv.appendChild(kaufBtn);
            btnDiv.appendChild(verkaufBtn);

            card.appendChild(btnDiv);
            grid.appendChild(card);
        });

        dialog.appendChild(grid);
    });

    // Zurück-Button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Zurück";
    closeBtn.className = "ui_unten";
    closeBtn.style.marginTop = "1rem";
    closeBtn.addEventListener("click", () => overlay.remove());

    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}
