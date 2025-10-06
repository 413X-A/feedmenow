window.onload = function () {

    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));

    const daten = alleBenutzer[aktuellerBenutzer];

    const anzahlFelder = Object.values(daten.pflanzenDaten)
        .filter(eintrag => eintrag.anzahlfelder !== null).length;
    const anzahlFelderMagische = Object.values(daten.pflanzenDatenMagische)
        .filter(eintrag => eintrag.anzahlfelder !== null).length;
    const anzahlFelderGesamt = anzahlFelder + anzahlFelderMagische;


    const freigeschalteteFelder = Object.values(daten.pflanzenDaten)
        .filter(eintrag => eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true).length;
    const freigeschalteteFelderMagische = Object.values(daten.pflanzenDatenMagische)
        .filter(eintrag => eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true).length;

    const freigeschalteteFelderGesamt = freigeschalteteFelder + freigeschalteteFelderMagische;


    if (freigeschalteteFelderGesamt < 1) {
        document.getElementById("ueberschrift_felder").innerHTML = `<b> 🚜 Deine Farmen </b> <br>${freigeschalteteFelderGesamt} / ${anzahlFelderGesamt} <br> Noch keine Felder freigeschaltet.`;
    } else {
        document.getElementById("ueberschrift_felder").innerHTML = `<b> 🚜 Deine Farmen </b> <br>${freigeschalteteFelderGesamt} / ${anzahlFelderGesamt}`;
    }

    ui_setzen();
    felderAnzeigen();
    felderAnzeigenMagische();
}

function felderAnzeigen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    const freigeschalteteFelder = Object.values(daten.pflanzenDaten).filter(eintrag => {
        return eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true;
    });

    const container = document.getElementById("felderContainer");
    container.innerHTML = "";

    freigeschalteteFelder.forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "feldItem";

        const felderTutorial = Object.values(daten.felder_tutorial).find(t => t.fortschritt === eintrag.fortschritt);

        const text = document.createElement("span");

        if (felderTutorial) {
            text.innerHTML = `
                <b>${felderTutorial.feld}</b><br>
                ${felderTutorial.beschreibung_zeile3}</b><br></b><br>
                ${felderTutorial.beschreibung_zeile2}</b><br></b><br>
                Freigeschaltet mit ${eintrag.exp_fortschritt} Erfahrung!
            `;
            felderTutorial.freigeschaltet = true;
        }

        const button = document.createElement("button");
        button.textContent = "Feld betreten";
        button.onclick = () => {
            if (felderTutorial) {
                daten.aktuelleFarm = felderTutorial.feld;

                // Änderungen speichern
                const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
                const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
                zur_normalefarm();
            }
        };

        item.appendChild(text);
        item.appendChild(button);
        container.appendChild(item);
    });
}


// MAGISCH 
function felderAnzeigenMagische() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    const freigeschalteteFelder = Object.values(daten.pflanzenDatenMagische).filter(eintrag => {
        return eintrag.freigeschaltet === true && eintrag.anzahlfelder !== null;
    });

    const container = document.getElementById("felderContainerMagische");
    container.innerHTML = "";

    freigeschalteteFelder.forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "feldItemMagische";

        const text = document.createElement("span");
        text.innerHTML = `
            <b>${eintrag.name}</b><br>
            ${eintrag.beschreibung || ""}<br>
            <i>Freigeschaltet mit Level ${eintrag.level}</i>
        `;

        const button = document.createElement("button");
        button.textContent = "Feld betreten";
        button.onclick = () => {
            daten.aktuelleFarm = eintrag.name;

            alleBenutzer[aktuellerBenutzer] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
            zur_magischefarm();
        };

        item.appendChild(text);
        item.appendChild(button);
        container.appendChild(item);
    });
}

function magischeFarmenFreischaltung() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    if (!aktuellerBenutzer) return;

    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    const spielerLevel = daten.benutzer_level;

    let neuFreigeschalteteFarmen = [];
    let neuFreigeschaltetePflanzen = [];

    Object.values(daten.pflanzenDatenMagische).forEach(feld => {
        if (feld.freigeschaltet === false && feld.anzahlfelder !== null && feld.level !== null) {
            if (spielerLevel >= feld.level) {
                feld.freigeschaltet = true;
                neuFreigeschalteteFarmen.push(feld.name);

                const feldname = feld.name;

                Object.values(daten.pflanzenDatenMagische).forEach(pflanze => {
                    if (pflanze.freigeschaltet === false && pflanze.feld === feldname && pflanze.bonus === false) {
                        pflanze.freigeschaltet = true;
                        neuFreigeschaltetePflanzen.push(pflanze.name);
                    }
                });
            }
        }
    });

    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    // 🪄 Wenn etwas freigeschaltet wurde → Overlay anzeigen
    if (neuFreigeschalteteFarmen.length > 0) {
        // Vorhandenes Overlay entfernen, falls vorhanden
        const vorhandenesOverlay = document.getElementById("farmfreischaltung_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        const overlay = document.createElement("div");
        overlay.id = "farmfreischaltung_overlay";
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
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            textAlign: "center",
            minWidth: "350px",
            maxWidth: "600px"
        });

        // Titel
        let html = `<h2>🌿 Neue magische Farm freigeschaltet!</h2>`;

        // Farmen anzeigen
        html += `<p><strong>Farm${neuFreigeschalteteFarmen.length > 1 ? "en" : ""}:</strong><br>${neuFreigeschalteteFarmen.join(", ")}</p>`;

        // Pflanzen anzeigen, falls vorhanden
        if (neuFreigeschaltetePflanzen.length > 0) {
            html += `<p><strong>Pflanzen:</strong><br>${neuFreigeschaltetePflanzen.join(", ")}</p>`;
        }

        dialog.innerHTML = html;

        // Schließen Button
        const closeBtn = document.createElement("button");
        closeBtn.textContent = "OK";
        closeBtn.className = "ui_unten";
        closeBtn.style.marginTop = "1rem";
        closeBtn.addEventListener("click", () => {
            overlay.remove();
            felderAnzeigenMagische(); // Felder neu anzeigen
        });

        dialog.appendChild(closeBtn);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        // Optionaler Soundeffekt ✨
        if (daten.einstellungen.effekte) {
            const sound = new Audio("freischaltung.mp3");
            sound.volume = 0.8;
            sound.play().catch(() => {});
        }
    }
}
magischeFarmenFreischaltung();
