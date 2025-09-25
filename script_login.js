window.onload = function () {
    // localStorage.clear();
}

// Enter-Taste abfangen
  document.getElementById('loginForm').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      login();
    }
  });

function login() {
    const benutzername = document.getElementById("benutzername").value.trim();
    const passwort = document.getElementById("passwort").value;
    const info = document.getElementById("info");

    if (!benutzername || !passwort) {
        info.textContent = "Bitte Benutzername und Passwort eingeben.";
        info.style.color = "red";
        return;
    }

    let benutzerDaten = JSON.parse(localStorage.getItem('benutzer')) || {};

    const progression = [

{ fortschritt: 0, feld: "Gemüsegarten freischalten", beschreibung: "Du hast den Gemüsegarten freigeschaltet!", name: "Gemüsegarten freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: 6 },

// 🌱 Pflanzen
{ fortschritt: 1, feld: "Gemüsegarten", beschreibung: "Karotten wachsen gleichmäßig.", name: "Karotte", dauer: 0.10, xp: 2, kaufpreis: 2, verkaufspreis: 3, ansehen: 1, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 3, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: null },
{ fortschritt: 2, feld: "Gemüsegarten", beschreibung: "Frischer Salat ist beliebt.", name: "Salat", dauer: 2, xp: 2, kaufpreis: 2, verkaufspreis: 4, ansehen: 1, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 10, anzahlfelder: null },
{ fortschritt: 3, feld: "Gemüsegarten", beschreibung: "Tomaten reifen saftig und rot.", name: "Tomate", dauer: 3, xp: 2, kaufpreis: 2, verkaufspreis: 5, ansehen: 1, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 15, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen
{ fortschritt: 4, feld: "Bonus", beschreibung: "Du erhältst 5 Gold für deine Erfolge im Garten!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 5, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 20, anzahlfelder: null },

// 🌱 Pflanzen 4–7
{ fortschritt: 5, feld: "Gemüsegarten", beschreibung: "Gurken wachsen schnell und erfrischend.", name: "Gurke", dauer: 3, xp: 3, kaufpreis: 3, verkaufspreis: 6, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 30, anzahlfelder: null },
{ fortschritt: 6, feld: "Gemüsegarten", beschreibung: "Zwiebeln sind würzig und nützlich.", name: "Zwiebel", dauer: 3, xp: 3, kaufpreis: 3, verkaufspreis: 6, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 40, anzahlfelder: null },
{ fortschritt: 7, feld: "Gemüsegarten", beschreibung: "Radieschen sind knackig und beliebt.", name: "Radieschen", dauer: 3, xp: 3, kaufpreis: 3, verkaufspreis: 7, ansehen: 2, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 50, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen
{ fortschritt: 8, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deine Pflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 5, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 60, anzahlfelder: null },

// 🌱 Pflanzen 8–10
{ fortschritt: 9, feld: "Gemüsegarten", beschreibung: "Kürbisse sind groß und wertvoll.", name: "Kürbis", dauer: 4, xp: 4, kaufpreis: 4, verkaufspreis: 8, ansehen: 2, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 75, anzahlfelder: null },
{ fortschritt: 10, feld: "Gemüsegarten", beschreibung: "Paprika leuchten in bunten Farben.", name: "Paprika", dauer: 4, xp: 4, kaufpreis: 4, verkaufspreis: 9, ansehen: 2, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 90, anzahlfelder: null },
{ fortschritt: 11, feld: "Gemüsegarten", beschreibung: "Brokkoli ist gesund und geschätzt.", name: "Brokkoli", dauer: 4, xp: 5, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 110, anzahlfelder: null },



{ fortschritt: 12, feld: "Getreideacker freischalten", beschreibung: "Du hast den Getreideacker freigeschaltet! Hier wachsen Weizen, Gerste & Co.", name: "Getreideacker freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 130, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 13, feld: "Getreideacker", beschreibung: "Weizen wächst gleichmäßig und stabil.", name: "Weizen", dauer: 3, xp: 3, benutzer_exp: 0, kaufpreis: 3, verkaufspreis: 6, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 150, anzahlfelder: null },
{ fortschritt: 14, feld: "Getreideacker", beschreibung: "Gerste ist widerstandsfähig.", name: "Gerste", dauer: 3, xp: 3, benutzer_exp: 0, kaufpreis: 3, verkaufspreis: 7, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 170, anzahlfelder: null },
{ fortschritt: 15, feld: "Getreideacker", beschreibung: "Roggen ist kernig und nahrhaft.", name: "Roggen", dauer: 3, xp: 3, benutzer_exp: 0, kaufpreis: 3, verkaufspreis: 7, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 190, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 16, feld: "Bonus", beschreibung: "Du erhältst 5 Gold für deine Getreideernte!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 5, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 210, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 17, feld: "Getreideacker", beschreibung: "Hafer ist nahrhaft und gesund.", name: "Hafer", dauer: 4, xp: 4, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 240, anzahlfelder: null },
{ fortschritt: 18, feld: "Getreideacker", beschreibung: "Mais wächst hoch und ertragreich.", name: "Mais", dauer: 4, xp: 4, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 9, ansehen: 2, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 270, anzahlfelder: null },
{ fortschritt: 19, feld: "Getreideacker", beschreibung: "Hirse ist klein, aber wertvoll.", name: "Hirse", dauer: 4, xp: 4, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 300, anzahlfelder: null },
{ fortschritt: 20, feld: "Getreideacker", beschreibung: "Buchweizen ist vielseitig und beliebt.", name: "Buchweizen", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 11, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 330, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Wasser
{ fortschritt: 21, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für dein Feld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 5, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 360, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 22, feld: "Getreideacker", beschreibung: "Dinkel ist kräftig und gesund.", name: "Dinkel", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 400, anzahlfelder: null },
{ fortschritt: 23, feld: "Getreideacker", beschreibung: "Reis wächst gut in nassen Böden.", name: "Reis", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 13, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 440, anzahlfelder: null },
{ fortschritt: 24, feld: "Getreideacker", beschreibung: "Quinoa ist modern und wertvoll.", name: "Quinoa", dauer: 5, xp: 6, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 14, ansehen: 3, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 480, anzahlfelder: null },



{ fortschritt: 25, feld: "Obstplantage freischalten", beschreibung: "Du hast die Obstplantage freigeschaltet! Äpfel, Birnen & Co. gedeihen hier.", name: "Obstplantage freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 500, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 26, feld: "Obstplantage", beschreibung: "Äpfel sind süß und beliebt.", name: "Apfel", dauer: 4, xp: 4, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 7, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 520, anzahlfelder: null },
{ fortschritt: 27, feld: "Obstplantage", beschreibung: "Birnen wachsen saftig und süß.", name: "Birne", dauer: 4, xp: 4, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 7, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 540, anzahlfelder: null },
{ fortschritt: 28, feld: "Obstplantage", beschreibung: "Kirschen sind klein, aber wertvoll.", name: "Kirsche", dauer: 4, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 560, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Energie
{ fortschritt: 29, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deine Obstplantage!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 5, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 580, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 30, feld: "Obstplantage", beschreibung: "Pflaumen sind saftig und gesund.", name: "Pflaume", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 9, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 610, anzahlfelder: null },
{ fortschritt: 31, feld: "Obstplantage", beschreibung: "Aprikosen duften herrlich.", name: "Aprikose", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 640, anzahlfelder: null },
{ fortschritt: 32, feld: "Obstplantage", beschreibung: "Pfirsiche sind saftig und süß.", name: "Pfirsich", dauer: 5, xp: 5, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 670, anzahlfelder: null },
{ fortschritt: 33, feld: "Mango", beschreibung: "Mango wächst tropisch und süß.", name: "Mango", dauer: 6, xp: 6, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 11, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 700, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Gold
{ fortschritt: 34, feld: "Bonus", beschreibung: "Du erhältst 10 Gold für deine Obsternte!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 10, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 730, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 35, feld: "Obstplantage", beschreibung: "Orange wächst saftig und aromatisch.", name: "Orange", dauer: 6, xp: 6, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 770, anzahlfelder: null },
{ fortschritt: 36, feld: "Obstplantage", beschreibung: "Zitrone wächst spritzig und frisch.", name: "Zitrone", dauer: 6, xp: 6, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 810, anzahlfelder: null },
{ fortschritt: 37, feld: "Obstplantage", beschreibung: "Granatapfel ist exotisch und wertvoll.", name: "Granatapfel", dauer: 6, xp: 6, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 13, ansehen: 3, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 850, anzahlfelder: null },



{ fortschritt: 38, feld: "Beerenhain freischalten", beschreibung: "Du hast den Beerenhain freigeschaltet! Erdbeeren, Himbeeren & Co. gedeihen hier.", name: "Beerenhain freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 900, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 39, feld: "Beerenhain", beschreibung: "Erdbeeren sind süß und aromatisch.", name: "Erdbeere", dauer: 3, xp: 5, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 12, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 920, anzahlfelder: null },
{ fortschritt: 40, feld: "Beerenhain", beschreibung: "Himbeeren sind klein, aber aromatisch.", name: "Himbeere", dauer: 3, xp: 5, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 940, anzahlfelder: null },
{ fortschritt: 41, feld: "Beerenhain", beschreibung: "Brombeeren sind kräftig und gesund.", name: "Brombeere", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 9, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 960, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 42, feld: "Bonus", beschreibung: "Du erhältst 5 Gold für deine Beerenernte!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 5, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 980, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 43, feld: "Beerenhain", beschreibung: "Heidelbeeren sind reich an Vitaminen.", name: "Heidelbeere", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 9, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1010, anzahlfelder: null },
{ fortschritt: 44, feld: "Beerenhain", beschreibung: "Johannisbeeren sind sauer, aber wertvoll.", name: "Johannisbeere", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1040, anzahlfelder: null },
{ fortschritt: 45, feld: "Beerenhain", beschreibung: "Stachelbeeren wachsen kräftig.", name: "Stachelbeere", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1070, anzahlfelder: null },
{ fortschritt: 46, feld: "Beerenhain", beschreibung: "Cranberrys sind herb und beliebt.", name: "Cranberry", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 11, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1100, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Wasser
{ fortschritt: 47, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deinen Beerenhain!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 5, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 1130, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 48, feld: "Beerenhain", beschreibung: "Goji-Beeren sind selten und wertvoll.", name: "Goji-Beere", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1160, anzahlfelder: null },
{ fortschritt: 49, feld: "Beerenhain", beschreibung: "Sanddorn wächst gesund am Strauch.", name: "Sanddorn", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1190, anzahlfelder: null },
{ fortschritt: 50, feld: "Beerenhain", beschreibung: "Holunder ist nahrhaft und beliebt.", name: "Holunder", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 13, ansehen: 3, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1220, anzahlfelder: null },



{ fortschritt: 51, feld: "Kräutergarten freischalten", beschreibung: "Du hast den Kräutergarten freigeschaltet! Basilikum, Petersilie & Co. gedeihen hier.", name: "Kräutergarten freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1270, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 52, feld: "Kräutergarten", beschreibung: "Basilikum duftet herrlich und frisch.", name: "Basilikum", dauer: 3, xp: 5, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1290, anzahlfelder: null },
{ fortschritt: 53, feld: "Kräutergarten", beschreibung: "Petersilie wächst gleichmäßig und kräftig.", name: "Petersilie", dauer: 3, xp: 5, benutzer_exp: 0, kaufpreis: 4, verkaufspreis: 8, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1310, anzahlfelder: null },
{ fortschritt: 54, feld: "Kräutergarten", beschreibung: "Dill ist aromatisch und beliebt.", name: "Dill", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 9, ansehen: 1, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1330, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Energie
{ fortschritt: 55, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deinen Kräutergarten!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 5, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 1350, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 56, feld: "Kräutergarten", beschreibung: "Thymian wächst kräftig und aromatisch.", name: "Thymian", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 9, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1380, anzahlfelder: null },
{ fortschritt: 57, feld: "Kräutergarten", beschreibung: "Rosmarin ist aromatisch und beliebt.", name: "Rosmarin", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1410, anzahlfelder: null },
{ fortschritt: 58, feld: "Kräutergarten", beschreibung: "Minze wächst frisch und aromatisch.", name: "Minze", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 2, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1440, anzahlfelder: null },
{ fortschritt: 59, feld: "Kräutergarten", beschreibung: "Koriander wächst schnell und aromatisch.", name: "Koriander", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 11, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1470, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Gold
{ fortschritt: 60, feld: "Bonus", beschreibung: "Du erhältst 10 Gold für deinen Kräutergarten!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 10, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 1500, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 61, feld: "Kräutergarten", beschreibung: "Schnittlauch wächst zart und frisch.", name: "Schnittlauch", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 11, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1530, anzahlfelder: null },
{ fortschritt: 62, feld: "Kräutergarten", beschreibung: "Salbei wächst aromatisch und kräftig.", name: "Salbei", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1560, anzahlfelder: null },
{ fortschritt: 63, feld: "Kräutergarten", beschreibung: "Oregano wächst würzig und kräftig.", name: "Oregano", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 3, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1590, anzahlfelder: null },



{ fortschritt: 64, feld: "Blumenfeld freischalten", beschreibung: "Du hast das Blumenfeld freigeschaltet! Rose, Sonnenblume & Co. verschönern deine Farm.", name: "Blumenfeld freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1620, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 65, feld: "Blumenfeld", beschreibung: "Rosen blühen prächtig und duften wunderbar.", name: "Rose", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 1, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1640, anzahlfelder: null },
{ fortschritt: 66, feld: "Blumenfeld", beschreibung: "Sonnenblumen wachsen hoch und stark.", name: "Sonnenblume", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 10, ansehen: 1, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1660, anzahlfelder: null },
{ fortschritt: 67, feld: "Blumenfeld", beschreibung: "Tulpen blühen in vielen Farben.", name: "Tulpe", dauer: 4, xp: 6, benutzer_exp: 0, kaufpreis: 5, verkaufspreis: 11, ansehen: 1, freigeschaltet: false, wasserverbrauch: 4, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1680, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 68, feld: "Bonus", beschreibung: "Du erhältst 8 Gold für dein Blumenfeld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 8, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 1700, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 69, feld: "Blumenfeld", beschreibung: "Lilien wachsen elegant und schön.", name: "Lilie", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1730, anzahlfelder: null },
{ fortschritt: 70, feld: "Blumenfeld", beschreibung: "Orchideen sind exotisch und beliebt.", name: "Orchidee", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1760, anzahlfelder: null },
{ fortschritt: 71, feld: "Blumenfeld", beschreibung: "Narzissen leuchten gelb und kräftig.", name: "Narzisse", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 13, ansehen: 2, freigeschaltet: false, wasserverbrauch: 5, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1790, anzahlfelder: null },
{ fortschritt: 72, feld: "Blumenfeld", beschreibung: "Chrysanthemen blühen farbenfroh.", name: "Chrysantheme", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 13, ansehen: 2, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1820, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Energie
{ fortschritt: 73, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für dein Blumenfeld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 5, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 1850, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 74, feld: "Blumenfeld", beschreibung: "Lavendel duftet wunderbar und beruhigt.", name: "Lavendel", dauer: 5, xp: 7, benutzer_exp: 0, kaufpreis: 6, verkaufspreis: 14, ansehen: 2, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1880, anzahlfelder: null },
{ fortschritt: 75, feld: "Blumenfeld", beschreibung: "Mohn blüht intensiv und farbenfroh.", name: "Mohn", dauer: 6, xp: 8, benutzer_exp: 0, kaufpreis: 7, verkaufspreis: 14, ansehen: 2, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1910, anzahlfelder: null },
{ fortschritt: 76, feld: "Blumenfeld", beschreibung: "Gerbera blüht fröhlich und bunt.", name: "Gerbera", dauer: 6, xp: 8, benutzer_exp: 0, kaufpreis: 7, verkaufspreis: 15, ansehen: 3, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1940, anzahlfelder: null },



{ fortschritt: 77, feld: "Tropisches Feld freischalten", beschreibung: "Du hast das Tropische Feld freigeschaltet! Banane, Ananas & exotische Früchte gedeihen hier.", name: "Tropisches Feld freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1970, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 78, feld: "Tropisches Feld", beschreibung: "Bananen wachsen schnell und süß.", name: "Banane", dauer: 5, xp: 8, benutzer_exp: 0, kaufpreis: 7, verkaufspreis: 16, ansehen: 1, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 1990, anzahlfelder: null },
{ fortschritt: 79, feld: "Tropisches Feld", beschreibung: "Ananas wächst saftig und tropisch.", name: "Ananas", dauer: 5, xp: 8, benutzer_exp: 0, kaufpreis: 7, verkaufspreis: 16, ansehen: 1, freigeschaltet: false, wasserverbrauch: 6, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2010, anzahlfelder: null },
{ fortschritt: 80, feld: "Tropisches Feld", beschreibung: "Papaya wächst exotisch und süß.", name: "Papaya", dauer: 6, xp: 9, benutzer_exp: 0, kaufpreis: 8, verkaufspreis: 17, ansehen: 1, freigeschaltet: false, wasserverbrauch: 7, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2030, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Energie
{ fortschritt: 81, feld: "Bonus", beschreibung: "Du erhältst 10 Energie für dein Tropisches Feld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 10, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2050, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 82, feld: "Tropisches Feld", beschreibung: "Kokosnüsse wachsen schwer, aber nahrhaft.", name: "Kokosnuss", dauer: 6, xp: 9, benutzer_exp: 0, kaufpreis: 8, verkaufspreis: 18, ansehen: 2, freigeschaltet: false, wasserverbrauch: 7, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2080, anzahlfelder: null },
{ fortschritt: 83, feld: "Tropisches Feld", beschreibung: "Guaven wachsen saftig und exotisch.", name: "Guave", dauer: 6, xp: 9, benutzer_exp: 0, kaufpreis: 8, verkaufspreis: 18, ansehen: 2, freigeschaltet: false, wasserverbrauch: 7, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2110, anzahlfelder: null },
{ fortschritt: 84, feld: "Tropisches Feld", beschreibung: "Passionsfrüchte wachsen aromatisch.", name: "Passionsfrucht", dauer: 6, xp: 9, benutzer_exp: 0, kaufpreis: 8, verkaufspreis: 19, ansehen: 2, freigeschaltet: false, wasserverbrauch: 8, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2140, anzahlfelder: null },
{ fortschritt: 85, feld: "Tropisches Feld", beschreibung: "Litschis wachsen klein und süß.", name: "Litschi", dauer: 6, xp: 10, benutzer_exp: 0, kaufpreis: 9, verkaufspreis: 19, ansehen: 2, freigeschaltet: false, wasserverbrauch: 8, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2170, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Gold
{ fortschritt: 86, feld: "Bonus", beschreibung: "Du erhältst 12 Gold für dein Tropisches Feld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 12, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2200, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 87, feld: "Tropisches Feld", beschreibung: "Drachenfrüchte wachsen bunt und selten.", name: "Drachenfrucht", dauer: 7, xp: 10, benutzer_exp: 0, kaufpreis: 9, verkaufspreis: 20, ansehen: 3, freigeschaltet: false, wasserverbrauch: 9, energieverbrauch: 6, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2230, anzahlfelder: null },
{ fortschritt: 88, feld: "Tropisches Feld", beschreibung: "Avocados wachsen nahrhaft und cremig.", name: "Avocado", dauer: 7, xp: 10, benutzer_exp: 0, kaufpreis: 9, verkaufspreis: 21, ansehen: 3, freigeschaltet: false, wasserverbrauch: 9, energieverbrauch: 6, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2260, anzahlfelder: null },
{ fortschritt: 89, feld: "Tropisches Feld", beschreibung: "Jackfrüchte wachsen riesig und exotisch.", name: "Jackfrucht", dauer: 7, xp: 11, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 22, ansehen: 3, freigeschaltet: false, wasserverbrauch: 10, energieverbrauch: 6, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2290, anzahlfelder: null },



{ fortschritt: 90, feld: "Gewächshaus freischalten", beschreibung: "Du hast das Gewächshaus freigeschaltet! Premium-Pflanzen wie Gurken & Tomaten wachsen hier.", name: "Gewächshaus freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2320, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 91, feld: "Gewächshaus", beschreibung: "Gurken (Premium) wachsen schnell und saftig.", name: "Gurke (Premium)", dauer: 6, xp: 11, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 22, ansehen: 1, freigeschaltet: false, wasserverbrauch: 10, energieverbrauch: 7, gold: 0, wasser: 0, energie: 0, samen: 10, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2340, anzahlfelder: null },
{ fortschritt: 92, feld: "Gewächshaus", beschreibung: "Tomaten (Premium) wachsen rot und saftig.", name: "Tomate (Premium)", dauer: 6, xp: 11, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 23, ansehen: 1, freigeschaltet: false, wasserverbrauch: 10, energieverbrauch: 7, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2360, anzahlfelder: null },
{ fortschritt: 93, feld: "Gewächshaus", beschreibung: "Auberginen wachsen kräftig und violett.", name: "Aubergine", dauer: 6, xp: 11, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 23, ansehen: 1, freigeschaltet: false, wasserverbrauch: 11, energieverbrauch: 7, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2380, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 94, feld: "Bonus", beschreibung: "Du erhältst 15 Gold für dein Gewächshaus!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 15, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2400, anzahlfelder: null },

// Pflanzen 4–7
{ fortschritt: 95, feld: "Gewächshaus", beschreibung: "Chili wächst scharf und aromatisch.", name: "Chili", dauer: 7, xp: 12, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 24, ansehen: 2, freigeschaltet: false, wasserverbrauch: 11, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2430, anzahlfelder: null },
{ fortschritt: 96, feld: "Gewächshaus", beschreibung: "Zucchini wächst lang und saftig.", name: "Zucchini", dauer: 7, xp: 12, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 24, ansehen: 2, freigeschaltet: false, wasserverbrauch: 11, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2460, anzahlfelder: null },
{ fortschritt: 97, feld: "Gewächshaus", beschreibung: "Spinat (Premium) wächst nährstoffreich.", name: "Spinat (Premium)", dauer: 7, xp: 12, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 25, ansehen: 2, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2490, anzahlfelder: null },
{ fortschritt: 98, feld: "Gewächshaus", beschreibung: "Rucola wächst würzig und schnell.", name: "Rucola", dauer: 7, xp: 12, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 25, ansehen: 2, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2520, anzahlfelder: null },

// 🎁 Bonus nach 7 Pflanzen – Wasser
{ fortschritt: 99, feld: "Bonus", beschreibung: "Du erhältst 15 Wasser für dein Gewächshaus!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 15, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2550, anzahlfelder: null },

// Pflanzen 8–10
{ fortschritt: 100, feld: "Gewächshaus", beschreibung: "Kresse wächst schnell und frisch.", name: "Kresse", dauer: 8, xp: 13, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 26, ansehen: 3, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2580, anzahlfelder: null },
{ fortschritt: 101, feld: "Gewächshaus", beschreibung: "Melonen wachsen saftig und groß.", name: "Melone", dauer: 8, xp: 13, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 27, ansehen: 3, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2610, anzahlfelder: null },
{ fortschritt: 102, feld: "Gewächshaus", beschreibung: "Trauben wachsen süß und aromatisch.", name: "Trauben", dauer: 8, xp: 14, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 28, ansehen: 3, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2640, anzahlfelder: null },



{ fortschritt: 104, feld: "Exotische Heilpflanzen freischalten", beschreibung: "Du hast das Feld für Exotische Heilpflanzen freigeschaltet! Aloe Vera, Ginseng & Safran gedeihen hier.", name: "Exotische Heilpflanzen freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2700, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 105, feld: "Exotische Heilpflanzen", beschreibung: "Aloe Vera wächst magisch und heilend.", name: "Aloe Vera", dauer: 8, xp: 14, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 30, ansehen: 1, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 7, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2720, anzahlfelder: null },
{ fortschritt: 106, feld: "Exotische Heilpflanzen", beschreibung: "Ginseng wächst langsam, aber wertvoll.", name: "Ginseng", dauer: 9, xp: 15, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 32, ansehen: 1, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 7, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2750, anzahlfelder: null },
{ fortschritt: 107, feld: "Exotische Heilpflanzen", beschreibung: "Kurkuma wächst intensiv und beliebt.", name: "Kurkuma", dauer: 8, xp: 14, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 31, ansehen: 1, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2780, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 108, feld: "Bonus", beschreibung: "Du erhältst 20 Gold für deine exotischen Pflanzen!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 20, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2810, anzahlfelder: null },

// Pflanzen 4–6
{ fortschritt: 109, feld: "Exotische Heilpflanzen", beschreibung: "Ingwer wächst aromatisch und kräftig.", name: "Ingwer", dauer: 8, xp: 13, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 30, ansehen: 2, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 8, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2840, anzahlfelder: null },
{ fortschritt: 110, feld: "Exotische Heilpflanzen", beschreibung: "Eukalyptus wächst schnell und duftet.", name: "Eukalyptus", dauer: 7, xp: 12, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 29, ansehen: 2, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2870, anzahlfelder: null },
{ fortschritt: 111, feld: "Exotische Heilpflanzen", beschreibung: "Teebaum wächst beliebt für Heilmittel.", name: "Teebaum", dauer: 8, xp: 13, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 31, ansehen: 2, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2900, anzahlfelder: null },

// 🎁 Bonus nach 6 Pflanzen – Wasser
{ fortschritt: 112, feld: "Bonus", beschreibung: "Du erhältst 15 Wasser für deine exotischen Pflanzen!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 15, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 2930, anzahlfelder: null },

// Pflanzen 7–10
{ fortschritt: 113, feld: "Exotische Heilpflanzen", beschreibung: "Kava wächst langsam, aber wertvoll.", name: "Kava", dauer: 9, xp: 14, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 33, ansehen: 3, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 10, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2960, anzahlfelder: null },
{ fortschritt: 114, feld: "Exotische Heilpflanzen", beschreibung: "Ashwagandha wächst selten und stark.", name: "Ashwagandha", dauer: 9, xp: 14, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 33, ansehen: 3, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 10, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2990, anzahlfelder: null },
{ fortschritt: 115, feld: "Exotische Heilpflanzen", beschreibung: "Neem wächst robust und nützlich.", name: "Neem", dauer: 8, xp: 13, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 32, ansehen: 3, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 9, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3020, anzahlfelder: null },
{ fortschritt: 116, feld: "Exotische Heilpflanzen", beschreibung: "Safran wächst teuer und exklusiv.", name: "Safran", dauer: 10, xp: 16, benutzer_exp: 0, kaufpreis: 15, verkaufspreis: 35, ansehen: 4, freigeschaltet: false, wasserverbrauch: 16, energieverbrauch: 11, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3050, anzahlfelder: null },



{ fortschritt: 118, feld: "Mystisches Feld freischalten", beschreibung: "Du hast das Mystische Feld freigeschaltet! Legendäre Pflanzen wie Goldene Karotte & Ewigkeitssamen wachsen hier.", name: "Mystisches Feld freischalten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3100, anzahlfelder: 6 },

// Pflanzen 1–3
{ fortschritt: 119, feld: "Mystisches Feld", beschreibung: "Goldene Karotte leuchtet magisch.", name: "Goldene Karotte", dauer: 12, xp: 18, benutzer_exp: 0, kaufpreis: 20, verkaufspreis: 45, ansehen: 1, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 12, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3120, anzahlfelder: null },
{ fortschritt: 120, feld: "Mystisches Feld", beschreibung: "Schwarzer Reis ist selten und wertvoll.", name: "Schwarzer Reis", dauer: 12, xp: 17, benutzer_exp: 0, kaufpreis: 18, verkaufspreis: 44, ansehen: 1, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 12, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3150, anzahlfelder: null },
{ fortschritt: 121, feld: "Mystisches Feld", beschreibung: "Kristall-Tomate schimmert bunt.", name: "Kristall-Tomate", dauer: 11, xp: 18, benutzer_exp: 0, kaufpreis: 19, verkaufspreis: 46, ansehen: 1, freigeschaltet: false, wasserverbrauch: 19, energieverbrauch: 12, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3180, anzahlfelder: null },

// 🎁 Bonus nach 3 Pflanzen – Gold
{ fortschritt: 122, feld: "Bonus", beschreibung: "Du erhältst 25 Gold für deine mystischen Pflanzen!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 25, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 3210, anzahlfelder: null },

// Pflanzen 4–6
{ fortschritt: 123, feld: "Mystisches Feld", beschreibung: "Traumfrucht wächst nur bei Vollmond.", name: "Traumfrucht", dauer: 13, xp: 19, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 50, ansehen: 2, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 13, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3240, anzahlfelder: null },
{ fortschritt: 124, feld: "Mystisches Feld", beschreibung: "Schattenkraut gedeiht im Halbschatten.", name: "Schattenkraut", dauer: 12, xp: 18, benutzer_exp: 0, kaufpreis: 21, verkaufspreis: 48, ansehen: 2, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 13, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3270, anzahlfelder: null },
{ fortschritt: 125, feld: "Mystisches Feld", beschreibung: "Flammenblume strahlt Wärme aus.", name: "Flammenblume", dauer: 13, xp: 18, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 50, ansehen: 2, freigeschaltet: false, wasserverbrauch: 21, energieverbrauch: 14, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3300, anzahlfelder: null },

// 🎁 Bonus nach 6 Pflanzen – Wasser
{ fortschritt: 126, feld: "Bonus", beschreibung: "Du erhältst 20 Wasser für deine mystischen Pflanzen!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 20, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 3330, anzahlfelder: null },

// Pflanzen 7–10
{ fortschritt: 127, feld: "Mystisches Feld", beschreibung: "Sternenbeere leuchtet nachts.", name: "Sternenbeere", dauer: 13, xp: 18, benutzer_exp: 0, kaufpreis: 23, verkaufspreis: 52, ansehen: 3, freigeschaltet: false, wasserverbrauch: 22, energieverbrauch: 14, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3360, anzahlfelder: null },
{ fortschritt: 128, feld: "Mystisches Feld", beschreibung: "Drachenblatt ist sehr selten.", name: "Drachenblatt", dauer: 14, xp: 19, benutzer_exp: 0, kaufpreis: 24, verkaufspreis: 55, ansehen: 3, freigeschaltet: false, wasserverbrauch: 23, energieverbrauch: 15, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3390, anzahlfelder: null },
{ fortschritt: 129, feld: "Mystisches Feld", beschreibung: "Regenbogenmais wächst farbenfroh.", name: "Regenbogenmais", dauer: 14, xp: 19, benutzer_exp: 0, kaufpreis: 24, verkaufspreis: 55, ansehen: 3, freigeschaltet: false, wasserverbrauch: 23, energieverbrauch: 15, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3420, anzahlfelder: null },
{ fortschritt: 130, feld: "Mystisches Feld", beschreibung: "Ewigkeitssamen sind legendär.", name: "Ewigkeitssamen", dauer: 16, xp: 20, benutzer_exp: 0, kaufpreis: 25, verkaufspreis: 58, ansehen: 4, freigeschaltet: false, wasserverbrauch: 25, energieverbrauch: 16, gold: 0, wasser: 0, energie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 3450, anzahlfelder: null },

];






const magieFelder = [
  // 🌰 Traumgarten
  { fortschritt:131, feld:"Traumgarten freischalten", beschreibung:"Du hast den Traumgarten freigeschaltet! Fantastische Pflanzen voller Magie.", name:"Traumgarten freischalten", dauer:null, xp:null, benutzer_exp:5, kaufpreis:null, verkaufspreis:null, ansehen:5, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:0, energie:0, magie:0, samen:0, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:6, level:5 },

  { fortschritt:132, feld:"Traumgarten", beschreibung:"Mondblume leuchtet nachts.", name:"Mondblume", dauer:12, xp:14, benutzer_exp:0, kaufpreis:10, verkaufspreis:30, ansehen:0, freigeschaltet:false, wasserverbrauch:8, energieverbrauch:6, magieverbrauch:4, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:133, feld:"Traumgarten", beschreibung:"Sonnenblatt speichert Energie.", name:"Sonnenblatt", dauer:13, xp:15, benutzer_exp:0, kaufpreis:11, verkaufspreis:32, ansehen:0, freigeschaltet:false, wasserverbrauch:9, energieverbrauch:7, magieverbrauch:5, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:134, feld:"Traumgarten", beschreibung:"Dämmergras pulsiert magisch.", name:"Dämmergras", dauer:14, xp:16, benutzer_exp:0, kaufpreis:12, verkaufspreis:34, ansehen:0, freigeschaltet:false, wasserverbrauch:10, energieverbrauch:8, magieverbrauch:6, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:135, feld:"Traumgarten", beschreibung:"Nebelblatt speichert Feuchtigkeit.", name:"Nebelblatt", dauer:15, xp:17, benutzer_exp:0, kaufpreis:13, verkaufspreis:36, ansehen:0, freigeschaltet:false, wasserverbrauch:11, energieverbrauch:9, magieverbrauch:7, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:136, feld:"Traumgarten", beschreibung:"Sternenblatt leuchtet blau.", name:"Sternenblatt", dauer:16, xp:18, benutzer_exp:0, kaufpreis:14, verkaufspreis:38, ansehen:0, freigeschaltet:false, wasserverbrauch:12, energieverbrauch:10, magieverbrauch:8, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:137, feld:"Traumgarten", beschreibung:"Aurorablume reflektiert Licht.", name:"Aurorablume", dauer:17, xp:19, benutzer_exp:0, kaufpreis:15, verkaufspreis:40, ansehen:0, freigeschaltet:false, wasserverbrauch:13, energieverbrauch:11, magieverbrauch:9, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:138, feld:"Traumgarten", beschreibung:"Kristallgras glitzert stark.", name:"Kristallgras", dauer:18, xp:20, benutzer_exp:0, kaufpreis:16, verkaufspreis:42, ansehen:0, freigeschaltet:false, wasserverbrauch:14, energieverbrauch:12, magieverbrauch:10, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:139, feld:"Traumgarten", beschreibung:"Mondnebelblüte umhüllt die Umgebung.", name:"Mondnebelblüte", dauer:19, xp:21, benutzer_exp:0, kaufpreis:17, verkaufspreis:44, ansehen:0, freigeschaltet:false, wasserverbrauch:15, energieverbrauch:13, magieverbrauch:11, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:140, feld:"Traumgarten", beschreibung:"Sonnennebelblatt speichert Energie.", name:"Sonnennebelblatt", dauer:20, xp:22, benutzer_exp:0, kaufpreis:18, verkaufspreis:46, ansehen:0, freigeschaltet:false, wasserverbrauch:16, energieverbrauch:14, magieverbrauch:12, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:141, feld:"Traumgarten", beschreibung:"Dämmerklee pulsiert im Rhythmus des Mondes.", name:"Dämmerklee", dauer:21, xp:23, benutzer_exp:0, kaufpreis:19, verkaufspreis:48, ansehen:0, freigeschaltet:false, wasserverbrauch:17, energieverbrauch:15, magieverbrauch:13, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:142, feld:"Traumgarten", beschreibung:"Nebelmoos speichert Magie und Feuchtigkeit.", name:"Nebelmoos", dauer:22, xp:24, benutzer_exp:0, kaufpreis:20, verkaufspreis:50, ansehen:0, freigeschaltet:false, wasserverbrauch:18, energieverbrauch:16, magieverbrauch:14, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:143, feld:"Traumgarten", beschreibung:"Sternenklee funkelt wie Sterne.", name:"Sternenklee", dauer:23, xp:25, benutzer_exp:0, kaufpreis:21, verkaufspreis:52, ansehen:0, freigeschaltet:false, wasserverbrauch:19, energieverbrauch:17, magieverbrauch:15, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:144, feld:"Traumgarten", beschreibung:"Glanzblatt speichert Licht und Energie.", name:"Glanzblatt", dauer:24, xp:26, benutzer_exp:0, kaufpreis:22, verkaufspreis:54, ansehen:0, freigeschaltet:false, wasserverbrauch:20, energieverbrauch:18, magieverbrauch:16, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
  { fortschritt:145, feld:"Bonus", beschreibung:"Du erhältst 50 Magie für den Traumgarten!", name:"Bonus", dauer:null, xp:null, benutzer_exp:0, kaufpreis:null, verkaufspreis:null, ansehen:0, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:0, energie:0, magie:50, samen:0, geerntet:0, bonus:true, fertiggewachsen:null, anzahlfelder:null, level:null },

  // 🌈 Regenbogenfeld
{ fortschritt:146, feld:"Regenbogenfeld freischalten", beschreibung:"Du hast das Regenbogenfeld freigeschaltet! Farbenfrohe Pflanzen mit hoher Magie.", name:"Regenbogenfeld freischalten", dauer:null, xp:null, benutzer_exp:10, kaufpreis:null, verkaufspreis:null, ansehen:6, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:0, energie:0, magie:0, samen:0, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:6, level:10 },

{ fortschritt:147, feld:"Regenbogenfeld", beschreibung:"Aurorablume reflektiert alle Farben.", name:"Aurorablume", dauer:15, xp:18, benutzer_exp:0, kaufpreis:12, verkaufspreis:36, ansehen:0, freigeschaltet:false, wasserverbrauch:12, energieverbrauch:9, magieverbrauch:7, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:148, feld:"Regenbogenfeld", beschreibung:"Prismablüte verstärkt die Magie der Umgebung.", name:"Prismablüte", dauer:16, xp:19, benutzer_exp:0, kaufpreis:13, verkaufspreis:38, ansehen:0, freigeschaltet:false, wasserverbrauch:13, energieverbrauch:10, magieverbrauch:8, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:149, feld:"Regenbogenfeld", beschreibung:"Glanzgras funkelt in allen Lichtwinkeln.", name:"Glanzgras", dauer:17, xp:20, benutzer_exp:0, kaufpreis:14, verkaufspreis:40, ansehen:0, freigeschaltet:false, wasserverbrauch:14, energieverbrauch:11, magieverbrauch:9, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:150, feld:"Regenbogenfeld", beschreibung:"Farbenzauberblatt speichert Lichtfarben.", name:"Farbenzauberblatt", dauer:18, xp:21, benutzer_exp:0, kaufpreis:15, verkaufspreis:42, ansehen:0, freigeschaltet:false, wasserverbrauch:15, energieverbrauch:12, magieverbrauch:10, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:151, feld:"Regenbogenfeld", beschreibung:"Lichtklee bricht das Sonnenlicht.", name:"Lichtklee", dauer:19, xp:22, benutzer_exp:0, kaufpreis:16, verkaufspreis:44, ansehen:0, freigeschaltet:false, wasserverbrauch:16, energieverbrauch:13, magieverbrauch:11, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:152, feld:"Regenbogenfeld", beschreibung:"Regenbogenblatt speichert Regenfarben.", name:"Regenbogenblatt", dauer:20, xp:23, benutzer_exp:0, kaufpreis:17, verkaufspreis:46, ansehen:0, freigeschaltet:false, wasserverbrauch:17, energieverbrauch:14, magieverbrauch:12, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:153, feld:"Regenbogenfeld", beschreibung:"Sonnenstrahlblatt glänzt in allen Farben.", name:"Sonnenstrahlblatt", dauer:21, xp:24, benutzer_exp:0, kaufpreis:18, verkaufspreis:48, ansehen:0, freigeschaltet:false, wasserverbrauch:18, energieverbrauch:15, magieverbrauch:13, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:154, feld:"Regenbogenfeld", beschreibung:"Magieklee pulsiert farbig.", name:"Magieklee", dauer:22, xp:25, benutzer_exp:0, kaufpreis:19, verkaufspreis:50, ansehen:0, freigeschaltet:false, wasserverbrauch:19, energieverbrauch:16, magieverbrauch:14, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:155, feld:"Regenbogenfeld", beschreibung:"Farbenschimmergras leuchtet sanft.", name:"Farbenschimmergras", dauer:23, xp:26, benutzer_exp:0, kaufpreis:20, verkaufspreis:52, ansehen:0, freigeschaltet:false, wasserverbrauch:20, energieverbrauch:17, magieverbrauch:15, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:156, feld:"Regenbogenfeld", beschreibung:"Prismenblatt spiegelt alle Farben.", name:"Prismenblatt", dauer:24, xp:27, benutzer_exp:0, kaufpreis:21, verkaufspreis:54, ansehen:0, freigeschaltet:false, wasserverbrauch:21, energieverbrauch:18, magieverbrauch:16, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:157, feld:"Regenbogenfeld", beschreibung:"Buntblüte funkelt in der Sonne.", name:"Buntblüte", dauer:25, xp:28, benutzer_exp:0, kaufpreis:22, verkaufspreis:56, ansehen:0, freigeschaltet:false, wasserverbrauch:22, energieverbrauch:19, magieverbrauch:17, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:158, feld:"Regenbogenfeld", beschreibung:"Regenbogengras wirbelt Funken umher.", name:"Regenbogengras", dauer:26, xp:29, benutzer_exp:0, kaufpreis:23, verkaufspreis:58, ansehen:0, freigeschaltet:false, wasserverbrauch:23, energieverbrauch:20, magieverbrauch:18, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:159, feld:"Regenbogenfeld", beschreibung:"Leuchtblatt speichert Lichtmagie.", name:"Leuchtblatt", dauer:27, xp:30, benutzer_exp:0, kaufpreis:24, verkaufspreis:60, ansehen:0, freigeschaltet:false, wasserverbrauch:24, energieverbrauch:21, magieverbrauch:19, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:160, feld:"Bonus", beschreibung:"Du erhältst 40 Wasser für das Regenbogenfeld!", name:"Bonus", dauer:null, xp:null, benutzer_exp:0, kaufpreis:null, verkaufspreis:null, ansehen:0, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:40, energie:0, magie:0, samen:0, geerntet:0, bonus:true, fertiggewachsen:null, anzahlfelder:null, level:null },

// 🌟 Sternenhain
{ fortschritt:161, feld:"Sternenhain freischalten", beschreibung:"Du hast den Sternenhain freigeschaltet! Funkelnde Pflanzen unter dem Sternenhimmel.", name:"Sternenhain freischalten", dauer:null, xp:null, benutzer_exp:15, kaufpreis:null, verkaufspreis:null, ansehen:7, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:0, energie:0, magie:0, samen:0, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:6, level:15 },

{ fortschritt:162, feld:"Sternenhain", beschreibung:"Nachtleuchtkraut strahlt blaues Licht.", name:"Nachtleuchtkraut", dauer:28, xp:32, benutzer_exp:0, kaufpreis:25, verkaufspreis:65, ansehen:0, freigeschaltet:false, wasserverbrauch:25, energieverbrauch:20, magieverbrauch:15, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:163, feld:"Sternenhain", beschreibung:"Sternenmoos speichert kosmische Energie.", name:"Sternenmoos", dauer:29, xp:33, benutzer_exp:0, kaufpreis:26, verkaufspreis:67, ansehen:0, freigeschaltet:false, wasserverbrauch:26, energieverbrauch:21, magieverbrauch:16, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:164, feld:"Sternenhain", beschreibung:"Galaxienblüte rotiert langsam und strahlt Magie aus.", name:"Galaxienblüte", dauer:30, xp:34, benutzer_exp:0, kaufpreis:27, verkaufspreis:69, ansehen:0, freigeschaltet:false, wasserverbrauch:27, energieverbrauch:22, magieverbrauch:17, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:165, feld:"Sternenhain", beschreibung:"Kosmosblatt glitzert wie kleine Sterne.", name:"Kosmosblatt", dauer:31, xp:35, benutzer_exp:0, kaufpreis:28, verkaufspreis:71, ansehen:0, freigeschaltet:false, wasserverbrauch:28, energieverbrauch:23, magieverbrauch:18, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:166, feld:"Sternenhain", beschreibung:"Meteorblüte pulsiert rhythmisch.", name:"Meteorblüte", dauer:32, xp:36, benutzer_exp:0, kaufpreis:29, verkaufspreis:73, ansehen:0, freigeschaltet:false, wasserverbrauch:29, energieverbrauch:24, magieverbrauch:19, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:167, feld:"Sternenhain", beschreibung:"Astrogras speichert Sternenenergie.", name:"Astrogras", dauer:33, xp:37, benutzer_exp:0, kaufpreis:30, verkaufspreis:75, ansehen:0, freigeschaltet:false, wasserverbrauch:30, energieverbrauch:25, magieverbrauch:20, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:168, feld:"Sternenhain", beschreibung:"Kometenklee wirbelt funkelnde Staubkörner.", name:"Kometenklee", dauer:34, xp:38, benutzer_exp:0, kaufpreis:31, verkaufspreis:77, ansehen:0, freigeschaltet:false, wasserverbrauch:31, energieverbrauch:26, magieverbrauch:21, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:169, feld:"Sternenhain", beschreibung:"Galaxienblatt leuchtet im Rhythmus der Sterne.", name:"Galaxienblatt", dauer:35, xp:39, benutzer_exp:0, kaufpreis:32, verkaufspreis:79, ansehen:0, freigeschaltet:false, wasserverbrauch:32, energieverbrauch:27, magieverbrauch:22, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:170, feld:"Sternenhain", beschreibung:"Sternenzauberblüte pulsiert bunt.", name:"Sternenzauberblüte", dauer:36, xp:40, benutzer_exp:0, kaufpreis:33, verkaufspreis:81, ansehen:0, freigeschaltet:false, wasserverbrauch:33, energieverbrauch:28, magieverbrauch:23, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:171, feld:"Sternenhain", beschreibung:"Kosmosklee speichert Lichtenergie.", name:"Kosmosklee", dauer:37, xp:41, benutzer_exp:0, kaufpreis:34, verkaufspreis:83, ansehen:0, freigeschaltet:false, wasserverbrauch:34, energieverbrauch:29, magieverbrauch:24, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:172, feld:"Sternenhain", beschreibung:"Himmelsblatt reflektiert Sternenlicht.", name:"Himmelsblatt", dauer:38, xp:42, benutzer_exp:0, kaufpreis:35, verkaufspreis:85, ansehen:0, freigeschaltet:false, wasserverbrauch:35, energieverbrauch:30, magieverbrauch:25, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:173, feld:"Sternenhain", beschreibung:"Astroblüte pulsiert magisch und bunt.", name:"Astroblüte", dauer:39, xp:43, benutzer_exp:0, kaufpreis:36, verkaufspreis:87, ansehen:0, freigeschaltet:false, wasserverbrauch:36, energieverbrauch:31, magieverbrauch:26, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },
{ fortschritt:174, feld:"Sternenhain", beschreibung:"Leuchtgras speichert Licht in Farben.", name:"Leuchtgras", dauer:40, xp:44, benutzer_exp:0, kaufpreis:37, verkaufspreis:89, ansehen:0, freigeschaltet:false, wasserverbrauch:37, energieverbrauch:32, magieverbrauch:27, gold:0, wasser:0, energie:0, magie:0, samen:5, geerntet:0, bonus:false, fertiggewachsen:null, anzahlfelder:null, level:null },

{ fortschritt:175, feld:"Bonus", beschreibung:"Du erhältst 50 Magie für den Sternenhain!", name:"Bonus", dauer:null, xp:null, benutzer_exp:0, kaufpreis:null, verkaufspreis:null, ansehen:0, freigeschaltet:false, wasserverbrauch:0, energieverbrauch:0, magieverbrauch:0, gold:0, wasser:0, energie:0, magie:50, samen:0, geerntet:0, bonus:true, fertiggewachsen:null, anzahlfelder:null, level:null },

];




const feldfreischaltungTutorials = [
  { 
    fortschritt: 0, 
    feld: "Gemüsegarten", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Der erste Gemüsegarten!", 
    beschreibung_zeile2: "Ein kleines Stück Land, wo die ersten Karotten, Tomaten und Salate sprießen.", 
    beschreibung_zeile3: "Die Nachbarn staunen über deine ersten grünen Ernten.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 12, 
    feld: "Getreideacker", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Das Kornfeld erwacht.", 
    beschreibung_zeile2: "Weizen und Mais wiegen sich sanft im Wind und geben deinem Hof Stabilität.", 
    beschreibung_zeile3: "Die Tiere schauen neugierig auf die reifen Ähren.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 25, 
    feld: "Obstplantage", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Früchte soweit das Auge reicht.", 
    beschreibung_zeile2: "Apfel- und Kirschbäume blühen in bunten Farben, süßer Duft liegt in der Luft.", 
    beschreibung_zeile3: "Die ersten Früchte locken Vögel und Bienen an.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 38, 
    feld: "Beerenhain", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Ein Meer aus Beeren.", 
    beschreibung_zeile2: "Erdbeeren, Himbeeren und Heidelbeeren reifen zwischen dichten Sträuchern.", 
    beschreibung_zeile3: "Kinder der Umgebung naschen heimlich von den süßen Früchten.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 51, 
    feld: "Kräutergarten", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Aromatische Vielfalt.", 
    beschreibung_zeile2: "Basilikum, Rosmarin und Minze verbreiten einen betörenden Duft.", 
    beschreibung_zeile3: "Alte Rezepte werden wieder lebendig, die Küche erwacht.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 64, 
    feld: "Blumenfeld", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Farbenpracht auf der Farm.", 
    beschreibung_zeile2: "Rosen, Tulpen und Lavendel wiegen sich im Sommerwind.", 
    beschreibung_zeile3: "Bienen summen und Schmetterlinge tanzen zwischen den Blüten.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 77, 
    feld: "Tropisches Feld", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Exotik auf deiner Farm.", 
    beschreibung_zeile2: "Bananen, Ananas und Kokosnüsse wachsen unter Palmen, ein Hauch Urlaub liegt in der Luft.", 
    beschreibung_zeile3: "Ferne Vögel besuchen die neuen tropischen Früchte.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 90, 
    feld: "Gewächshaus", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Schutz für empfindliche Pflanzen.", 
    beschreibung_zeile2: "Tomaten, Gurken und Spinat gedeihen hier das ganze Jahr über.", 
    beschreibung_zeile3: "Die Glasdächer lassen Licht herein und halten Regen und Kälte ab.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 104, 
    feld: "Exotische Heilpflanzen", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Magische Kräuter.", 
    beschreibung_zeile2: "Aloe Vera, Ginseng und Safran wachsen nun auf deiner Farm.", 
    beschreibung_zeile3: "Heilkräfte liegen in der Luft, geheimnisvoll und wertvoll.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 118, 
    feld: "Mystisches Feld", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Die Magie beginnt.", 
    beschreibung_zeile2: "Goldene Karotten, Traumfrüchte und Ewigkeitssamen sprießen unter geheimnisvollem Licht.", 
    beschreibung_zeile3: "Die Pflanzen scheinen fast lebendig zu sein, funkelnde Farben überall.", 
    freigeschaltet: false
  },


  // MAGIE
  { 
    fortschritt: 131, 
    feld: "Traumgarten", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Pflanzen zwischen den Sternen.", 
    beschreibung_zeile2: "Silberblätter und Mondfrüchte gedeihen im sanften Licht der Sterne.", 
    beschreibung_zeile3: "Ein Ort voller Ruhe, Magie und leuchtender Pflanzen.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 146, 
    feld: "Regenbogenfeld", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Starlotus unter Vollmond.", 
    beschreibung_zeile2: "Seine leuchtenden Blüten ziehen Nachtfalter und Glühwürmchen an.", 
    beschreibung_zeile3: "Ein magischer Farbzauber erfüllt das Feld.", 
    freigeschaltet: false
  },
  { 
    fortschritt: 161, 
    feld: "Sternenhain", 
    beschreibung_zeile1: "➡️ Freigeschaltet: Mondbeeren unter Sternenlicht.", 
    beschreibung_zeile2: "Sie speichern das Licht der Sterne in ihren Früchten.", 
    beschreibung_zeile3: "Ein Schatz für alle Alchemisten und Magiebegabten.", 
    freigeschaltet: false
  }
];


const weltmarktTutorials = [];


    function defaultBenutzer(passwort) {
    const daten = {
        benutzername,
        passwort,
        mail: null,
        einstellungen: {sound: true, benachrichtigung: true, effekte: true},
        benutzer_ansehen: 0,
        benutzer_level: 1,
        benutzer_explevel: 0,
        benutzer_levelsystem: 5,
        benutzer_exp: 0,
        lagerplatz: {gold: 500, wasser: 35, energie: 35, magie: 35, pflanzen: 65, duenger: 35},
        aktuelleFarm: null,
        ressourcen: { gold: 0, wasser: 5, energie: 0, magie: 0, anz_pflanzen: 0, duenger: 0},
        pflanzenDaten: {},
        pflanzenDatenMagische: {},
        felder_tutorial: {},
        weltmarkt_tutorial: {}
    };

 // Alle Pflanzen aus der Liste übernehmen
progression.forEach(pflanze => {
    // Felder-Objekt initialisieren
    let felderObjekt = {};
    if (pflanze.anzahlfelder !== null) {
        for (let i = 1; i <= pflanze.anzahlfelder; i++) {
            felderObjekt[i] = {
                fortschritt: pflanze.fortschritt,
                name: pflanze.fortschritt,
                status: null,
                pflanze: null,
                zeit_gepflanzt: null,
                zeit_gewachsen: null
            };
        }
    }

    // Pflanze ins Datenobjekt speichern
    daten.pflanzenDaten[pflanze.fortschritt] = {
        type: "normale",
        fortschritt: pflanze.fortschritt,
        feld: pflanze.feld,
        beschreibung: pflanze.beschreibung,
        name: pflanze.name,
        dauer: pflanze.dauer,
        xp: pflanze.xp,
        kaufpreis: pflanze.kaufpreis,
        verkaufspreis: pflanze.verkaufspreis,
        ansehen: pflanze.ansehen,
        freigeschaltet: pflanze.freigeschaltet,
        wasserverbrauch: pflanze.wasserverbrauch,
        energieverbrauch: pflanze.energieverbrauch,
        gold: pflanze.gold,
        wasser: pflanze.wasser,
        energie: pflanze.energie,
        samen: pflanze.samen,
        geerntet: pflanze.geerntet,
        bonus: pflanze.bonus,
        fertiggewachsen: pflanze.fertiggewachsen,
        exp_fortschritt: pflanze.exp_fortschritt,
        anzahlfelder: pflanze.anzahlfelder,
        felder: felderObjekt
    };
});
// Alle Pflanzen aus der Liste übernehmen
magieFelder.forEach(pflanze => {
    // Felder-Objekt initialisieren
    let felderObjekt = {};
    if (pflanze.anzahlfelder !== null) {
        for (let i = 1; i <= pflanze.anzahlfelder; i++) {
            felderObjekt[i] = {
                fortschritt: pflanze.fortschritt,
                name: pflanze.fortschritt,
                status: null,
                pflanze: null,
                zeit_gepflanzt: null,
                zeit_gewachsen: null
            };
        }
    }

    // Pflanze ins Datenobjekt speichern
    daten.pflanzenDatenMagische[pflanze.fortschritt] = {
        type: "magische",
        fortschritt: pflanze.fortschritt,
        feld: pflanze.feld,
        beschreibung: pflanze.beschreibung,
        name: pflanze.name,
        dauer: pflanze.dauer,
        xp: pflanze.xp,
        kaufpreis: pflanze.kaufpreis,
        verkaufspreis: pflanze.verkaufspreis,
        ansehen: pflanze.ansehen,
        freigeschaltet: pflanze.freigeschaltet,
        wasserverbrauch: pflanze.wasserverbrauch,
        energieverbrauch: pflanze.energieverbrauch,
        magieverbrauch: pflanze.magieverbrauch,
        gold: pflanze.gold,
        wasser: pflanze.wasser,
        energie: pflanze.energie,
        magie: pflanze.magie,
        samen: pflanze.samen,
        geerntet: pflanze.geerntet,
        bonus: pflanze.bonus,
        fertiggewachsen: pflanze.fertiggewachsen,
        anzahlfelder: pflanze.anzahlfelder,
        level: pflanze.level,
        felder: felderObjekt
    };
});


// Feldfreischaltung Tutorials übernehmen
feldfreischaltungTutorials.forEach(felder_tutorial => {
    daten.felder_tutorial[felder_tutorial.fortschritt] = {
        fortschritt: felder_tutorial.fortschritt,
        feld: felder_tutorial.feld,
        beschreibung_zeile1: felder_tutorial.beschreibung_zeile1,
        beschreibung_zeile2: felder_tutorial.beschreibung_zeile2,
        beschreibung_zeile3: felder_tutorial.beschreibung_zeile3,
        freigeschaltet: felder_tutorial.freigeschaltet
    };
});

    return daten;
}


    // Benutzerprüfung
    if (!benutzerDaten[benutzername]) {
        // Neuen Benutzer anlegen
        benutzerDaten[benutzername] = defaultBenutzer(passwort);
        localStorage.setItem('benutzer', JSON.stringify(benutzerDaten));
        localStorage.setItem("aktuellerBenutzer", benutzername);

        info.textContent = "Neuer Benutzer angelegt und eingeloggt.";
        info.style.color = "green";
        setTimeout(() => {
            window.location.href = "hauptseite.html";
        }, 1000);
    } else {
        // Einloggen
        if (benutzerDaten[benutzername].passwort === passwort) {
            localStorage.setItem("aktuellerBenutzer", benutzername);
            info.textContent = "Login erfolgreich!";
            info.style.color = "green";
            setTimeout(() => {
                window.location.href = "hauptseite.html";
            }, 1000);
        } else {
            info.textContent = "Falsches Passwort!";
            info.style.color = "red";
        }
    }
}
