window.onload = function () {
    ui_setzen();
    ueberschrift();
    generiereFortschritte();
}

// Überschrift anzeigen
function ueberschrift() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    const anzahlFelder = Object.values(daten.pflanzenDaten).length;
    const freigeschaltetAnzahl = Object.values(daten.pflanzenDaten)
        .filter(p => p.freigeschaltet === true).length;

    document.getElementById("ueberschrift_felder").innerHTML = `<b> 🚀 Deine Reise </b> <br>${freigeschaltetAnzahl} / ${anzahlFelder}`;
}

// Fortschritte generieren
function generiereFortschritte() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    const container = document.getElementById("fortschritteContainer");
    container.innerHTML = "";

    Object.values(daten.pflanzenDaten).forEach((eintrag) => {
        const item = document.createElement("div");
        item.className = "einzelner_fortschritt";

        const text = document.createElement("span");
        text.innerHTML = `${eintrag.exp_fortschritt} Erfahrung: ${eintrag.name}`;

        const button = document.createElement("button");

        if (eintrag.freigeschaltet) {
            item.classList.add("abgeholt");
            button.textContent = "Freigeschaltet";
            button.disabled = true;
        } else if (daten.benutzer_exp >= eintrag.exp_fortschritt) {
            button.textContent = "Freischalten";
            button.disabled = false;

            button.onclick = () => {
                // Fortschritt freischalten und Ressourcen hinzufügen
                richtigeFreischaltung(eintrag.fortschritt);

                // Overlay erstellen
                const overlay = document.createElement('div');
                Object.assign(overlay.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '9999',
                });

                const box = document.createElement('div');
                Object.assign(box.style, {
                    backgroundColor: 'white',
                    padding: '2rem 3rem',
                    borderRadius: '12px',
                    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                    maxWidth: '90%',
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                });

                // Tutorial auslesen
                const felderTutorial = Object.values(daten.felder_tutorial).find(t => t.fortschritt === eintrag.fortschritt);
                const weltmarktTutorial = Object.values(daten.weltmarkt_tutorial).find(t => t.fortschritt === eintrag.fortschritt);

                const msg = document.createElement('p');

                if (felderTutorial) {
                    msg.innerHTML = `
                        <b>${felderTutorial.feld}</b><br>
                        ${felderTutorial.beschreibung_zeile1}<br>
                        ${felderTutorial.beschreibung_zeile2}<br>
                        ${felderTutorial.beschreibung_zeile3}
                    `;
                    felderTutorial.freigeschaltet = true;
                } else if (eintrag.feld === "Weltmarkt" && weltmarktTutorial) {
                    msg.innerHTML = `
                        <b>Weltmarkt</b><br>
                        ${weltmarktTutorial.beschreibung_zeile1}<br>
                        ${weltmarktTutorial.beschreibung_zeile2}<br>
                        ${weltmarktTutorial.beschreibung_zeile3}
                    `;
                    weltmarktTutorial.freigeschaltet = true;
                } else {
                    msg.innerHTML = `<b>${eintrag.name}</b><br>Du hast ${eintrag.name} freigeschaltet!`;
                }

                msg.style.marginBottom = '1.5rem';
                msg.style.fontSize = '1.2rem';
                msg.style.color = '#333';

                const btn = document.createElement('button');
                btn.textContent = 'OK';
                Object.assign(btn.style, {
                    backgroundColor: '#4a7c59',
                    width: '35%',
                    border: 'none',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                });
                btn.addEventListener('click', () => document.body.removeChild(overlay));

                box.appendChild(msg);
                box.appendChild(btn);
                overlay.appendChild(box);
                document.body.appendChild(overlay);
            };
        } else {
            item.classList.add("abgeholt");
            button.textContent = "Nicht freigeschaltet";
            button.disabled = true;
        }

        item.appendChild(text);
        item.appendChild(button);
        container.appendChild(item);
    });

    ui_setzen();
    
}

// Richtige Freischaltung mit Ressourcen und Update
function richtigeFreischaltung(fortschrittNummer) {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];

    const fortschritt = Object.values(daten.pflanzenDaten)
        .find(p => p.fortschritt === fortschrittNummer);

    if (!fortschritt.freigeschaltet && daten.benutzer_exp >= fortschritt.exp_fortschritt) {
        fortschritt.freigeschaltet = true;

        if (fortschritt.ansehen) daten.benutzer_ansehen += fortschritt.ansehen;
        if (fortschritt.gold) daten.ressourcen.gold += fortschritt.gold;
        if (fortschritt.wasser) daten.ressourcen.wasser += fortschritt.wasser;
        if (fortschritt.energie) daten.ressourcen.energie += fortschritt.energie;
        
        // Sound Effekt
        if (daten.einstellungen.effekte) {
            const purchaseSound = new Audio("deine_reise_freigeschaltet.mp3");
            purchaseSound.volume = 1.00;
            purchaseSound.play().catch(() => {});
        }


        // Speicher aktualisieren
        alleBenutzer[aktuellerBenutzer] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

        ui_setzen();
        generiereFortschritte();
        ueberschrift();
    }
}

