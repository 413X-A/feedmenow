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
        document.getElementById("ueberschrift_felder").innerHTML = `<b> 🌱 Deine Farmen </b> <br>${freigeschalteteFelderGesamt} / ${anzahlFelderGesamt} <br> Noch keine Felder freigeschaltet.`;
    } else {
        document.getElementById("ueberschrift_felder").innerHTML = `<b> 🌱 Deine Farmen </b> <br>${freigeschalteteFelderGesamt} / ${anzahlFelderGesamt}`;
    }

    ui_setzen();
    felderAnzeigen();
    felderAnzeigenMagische();
}

function felderAnzeigen() {
    // Benutzer laden
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    // nur freigeschaltete Felder mit anzahlfelder !== null
    const freigeschalteteFelder = Object.values(daten.pflanzenDaten).filter(eintrag => {
        return eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true;
    });

    const container = document.getElementById("felderContainer");
    container.innerHTML = "";

    freigeschalteteFelder.forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "feldItem";

        // Tutorial auslesen
        const felderTutorial = Object.values(daten.felder_tutorial).find(t => t.fortschritt === eintrag.fortschritt);

        const text = document.createElement("span");

        if (felderTutorial) {
            text.innerHTML = `
                <b>${felderTutorial.feld}</b><br>
                ${felderTutorial.beschreibung_zeile3}</b><br></b><br>
                ${felderTutorial.beschreibung_zeile2}</b><br></b><br>
                Freigeschaltet mit ${eintrag.exp_fortschritt} Erfahrung!
            `;
            felderTutorial.freigeschaltet = true; // direkt als gelesen markieren
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
    // Benutzer laden
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    // nur freigeschaltete Felder mit anzahlfelder !== null
    const freigeschalteteFelder = Object.values(daten.pflanzenDatenMagische).filter(eintrag => {
        return eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true;
    });

    const container = document.getElementById("felderContainerMagische");
    container.innerHTML = "";

    freigeschalteteFelder.forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "feldItemMagische";

        // Tutorial auslesen
        const felderTutorial = Object.values(daten.felder_tutorial).find(t => t.fortschritt === eintrag.fortschritt);

        const text = document.createElement("span");

        if (felderTutorial) {
            text.innerHTML = `
                <b>${felderTutorial.feld}</b><br>
                ${felderTutorial.beschreibung_zeile3}</b><br></b><br>
                ${felderTutorial.beschreibung_zeile2}</b><br></b><br>
                Freigeschaltet mit Level ${eintrag.level}!
            `;
            felderTutorial.freigeschaltet = true; // direkt als gelesen markieren
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
                zur_magischefarm();
            }
        };

    item.appendChild(text);
    item.appendChild(button);
    container.appendChild(item);
});
}
