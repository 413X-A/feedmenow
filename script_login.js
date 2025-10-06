window.onload = function () {
    // localStorage.clear();
    zeigeTopSpieler()
}

const progression = [

// 🌱 FREISCHALTUNG FARM 1 – Gemüsegarten
{ fortschritt: 0, feld: "Gemüsegarten freischalten", beschreibung: "Du hast den Gemüsegarten freigeschaltet! Baue deine ersten Pflanzen an.", name: "Gemüsegarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: 6 },

{ fortschritt: 1, feld: "Gemüsegarten", beschreibung: "Ein Klassiker – wächst schnell und bringt kleine Gewinne.", name: "Karotte", dauer: 0.5, xp: 1, kaufpreis: 2, verkaufspreis: 4, ansehen: 0, freigeschaltet: true, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 2, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 5, anzahlfelder: null },
{ fortschritt: 2, feld: "Gemüsegarten", beschreibung: "Frischer Salat – leicht zu pflegen, beliebt auf Märkten.", name: "Salat", dauer: 0.6, xp: 1, kaufpreis: 2, verkaufspreis: 5, ansehen: 0, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 10, anzahlfelder: null },
{ fortschritt: 3, feld: "Gemüsegarten", beschreibung: "Tomaten – brauchen etwas länger, aber lohnen sich.", name: "Tomate", dauer: 0.8, xp: 1, kaufpreis: 3, verkaufspreis: 6, ansehen: 0, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 15, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 4, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine ersten Erfolge!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 20, anzahlfelder: null },

{ fortschritt: 5, feld: "Gemüsegarten", beschreibung: "Gurken – wachsen schnell und bringen guten Ertrag.", name: "Gurke", dauer: 1.0, xp: 1, kaufpreis: 3, verkaufspreis: 7, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 25, anzahlfelder: null },
{ fortschritt: 6, feld: "Gemüsegarten", beschreibung: "Zwiebeln – robust, einfach, verlässlich.", name: "Zwiebel", dauer: 1.2, xp: 1, kaufpreis: 3, verkaufspreis: 7, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 30, anzahlfelder: null },
{ fortschritt: 7, feld: "Gemüsegarten", beschreibung: "Radieschen – klein, scharf und lukrativ.", name: "Radieschen", dauer: 1.4, xp: 2, kaufpreis: 4, verkaufspreis: 8, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 35, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 8, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deine fleißige Arbeit!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 5, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 40, anzahlfelder: null },

{ fortschritt: 9, feld: "Gemüsegarten", beschreibung: "Kürbisse brauchen Zeit, bringen aber gutes Gold.", name: "Kürbis", dauer: 1.6, xp: 2, kaufpreis: 4, verkaufspreis: 9, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 45, anzahlfelder: null },
{ fortschritt: 10, feld: "Gemüsegarten", beschreibung: "Paprika – bunt und beliebt auf Märkten.", name: "Paprika", dauer: 1.8, xp: 2, kaufpreis: 5, verkaufspreis: 11, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 50, anzahlfelder: null },
{ fortschritt: 11, feld: "Gemüsegarten", beschreibung: "Brokkoli – langsam, aber hochwertig.", name: "Brokkoli", dauer: 2.0, xp: 2, kaufpreis: 5, verkaufspreis: 12, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 55, anzahlfelder: null },


    // 🍎 FREISCHALTUNG FARM 2 – Obstgarten
{ fortschritt: 12, feld: "Obstgarten freischalten", beschreibung: "Du hast den Obstgarten freigeschaltet! Jetzt kannst du Obstbäume anpflanzen.", name: "Obstgarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 60, anzahlfelder: 8 },

{ fortschritt: 13, feld: "Obstgarten", beschreibung: "Apfelbaum – zuverlässig, einfacher Start ins Obstgeschäft.", name: "Apfelbaum", dauer: 2.2, xp: 2, kaufpreis: 6, verkaufspreis: 13, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, exp_fortschritt: 70, anzahlfelder: null },
{ fortschritt: 14, feld: "Obstgarten", beschreibung: "Birnbaum – süß, stabiler Ertrag, geringer Verbrauch.", name: "Birnbaum", dauer: 2.4, xp: 2, kaufpreis: 6, verkaufspreis: 14, ansehen: 1, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, exp_fortschritt: 80, anzahlfelder: null },
{ fortschritt: 15, feld: "Obstgarten", beschreibung: "Kirschen – brauchen Geduld, bringen aber hohen Preis.", name: "Kirschbaum", dauer: 2.6, xp: 2, kaufpreis: 7, verkaufspreis: 15, ansehen: 2, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 1, exp_fortschritt: 90, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 16, feld: "Bonus", beschreibung: "Du erhältst +5 Energie für deine wachsende Obstfarm!", name: "Bonus", ansehen: 0, wasser: 0, energie: 5, exp_fortschritt: 100, bonus: true },

{ fortschritt: 17, feld: "Obstgarten", beschreibung: "Pfirsichbaum – süße Frucht, mittlere Dauer.", name: "Pfirsichbaum", dauer: 2.8, xp: 2, kaufpreis: 7, verkaufspreis: 16, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 1, exp_fortschritt: 115, anzahlfelder: null },
{ fortschritt: 18, feld: "Obstgarten", beschreibung: "Zitronenbaum – bringt frische Gewinne.", name: "Zitronenbaum", dauer: 3.0, xp: 3, kaufpreis: 8, verkaufspreis: 17, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 1, exp_fortschritt: 130, anzahlfelder: null },
{ fortschritt: 19, feld: "Obstgarten", beschreibung: "Olivenbaum – edel, aber langsamer Wachstum.", name: "Olivenbaum", dauer: 3.2, xp: 3, kaufpreis: 8, verkaufspreis: 18, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 1, exp_fortschritt: 145, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 20, feld: "Bonus", beschreibung: "Du erhältst +5 Gold für deine wachsende Plantage!", name: "Bonus", ansehen: 0, wasser: 0, gold: 5, energie: 0, exp_fortschritt: 160, bonus: true },

{ fortschritt: 21, feld: "Obstgarten", beschreibung: "Feigenbaum – exotisch und lukrativ.", name: "Feigenbaum", dauer: 3.4, xp: 3, kaufpreis: 9, verkaufspreis: 20, ansehen: 3, wasserverbrauch: 4, energieverbrauch: 2, exp_fortschritt: 180, anzahlfelder: null },
{ fortschritt: 22, feld: "Obstgarten", beschreibung: "Granatapfelbaum – selten, schön und bringt Prestige.", name: "Granatapfelbaum", dauer: 3.6, xp: 3, kaufpreis: 10, verkaufspreis: 22, ansehen: 3, wasserverbrauch: 4, energieverbrauch: 2, exp_fortschritt: 200, anzahlfelder: null },


    // 🌿 FREISCHALTUNG FARM 3 – Kräutergarten
{ fortschritt: 23, feld: "Kräutergarten freischalten", beschreibung: "Du hast den Kräutergarten freigeschaltet! Pflanze aromatische Kräuter für besondere Produkte.", name: "Kräutergarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 220, anzahlfelder: 10 },

{ fortschritt: 24, feld: "Kräutergarten", beschreibung: "Basilikum – duftendes Kraut, beliebt in jeder Küche.", name: "Basilikum", dauer: 3.0, xp: 2, kaufpreis: 8, verkaufspreis: 18, ansehen: 2, wasserverbrauch: 2, energieverbrauch: 1, exp_fortschritt: 240, anzahlfelder: null },
{ fortschritt: 25, feld: "Kräutergarten", beschreibung: "Petersilie – wächst schnell, Grundzutat für viele Gerichte.", name: "Petersilie", dauer: 3.2, xp: 2, kaufpreis: 8, verkaufspreis: 19, ansehen: 2, wasserverbrauch: 2, energieverbrauch: 1, exp_fortschritt: 260, anzahlfelder: null },
{ fortschritt: 26, feld: "Kräutergarten", beschreibung: "Schnittlauch – mild, aber mit stabilen Erträgen.", name: "Schnittlauch", dauer: 3.4, xp: 2, kaufpreis: 9, verkaufspreis: 20, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 1, exp_fortschritt: 280, anzahlfelder: null },
{ fortschritt: 27, feld: "Kräutergarten", beschreibung: "Rosmarin – kräftig im Geschmack und wertvoll.", name: "Rosmarin", dauer: 3.6, xp: 3, kaufpreis: 9, verkaufspreis: 22, ansehen: 3, wasserverbrauch: 3, energieverbrauch: 1, exp_fortschritt: 300, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 28, feld: "Bonus", beschreibung: "Du erhältst +10 Wasser für deine nachhaltige Pflege!", name: "Bonus", ansehen: 0, wasser: 10, energie: 0, gold: 0, bonus: true, exp_fortschritt: 320 },

{ fortschritt: 29, feld: "Kräutergarten", beschreibung: "Thymian – robust, wächst langsam, aber bringt gute Preise.", name: "Thymian", dauer: 3.8, xp: 3, kaufpreis: 10, verkaufspreis: 23, ansehen: 3, wasserverbrauch: 3, energieverbrauch: 2, exp_fortschritt: 340, anzahlfelder: null },
{ fortschritt: 30, feld: "Kräutergarten", beschreibung: "Minze – erfrischend und beliebt für Getränke.", name: "Minze", dauer: 4.0, xp: 3, kaufpreis: 10, verkaufspreis: 25, ansehen: 3, wasserverbrauch: 3, energieverbrauch: 2, exp_fortschritt: 360, anzahlfelder: null },
{ fortschritt: 31, feld: "Kräutergarten", beschreibung: "Lavendel – wunderschön, duftend und wertvoll.", name: "Lavendel", dauer: 4.2, xp: 3, kaufpreis: 11, verkaufspreis: 27, ansehen: 4, wasserverbrauch: 4, energieverbrauch: 2, exp_fortschritt: 380, anzahlfelder: null },
{ fortschritt: 32, feld: "Kräutergarten", beschreibung: "Salbei – medizinisch wertvoll, schwer anzubauen.", name: "Salbei", dauer: 4.4, xp: 4, kaufpreis: 12, verkaufspreis: 29, ansehen: 4, wasserverbrauch: 4, energieverbrauch: 2, exp_fortschritt: 400, anzahlfelder: null },

// 🎁 Bonus
{ fortschritt: 33, feld: "Bonus", beschreibung: "Du erhältst +10 Energie für deine wachsende Kräuterfarm!", name: "Bonus", ansehen: 0, wasser: 0, energie: 10, gold: 0, bonus: true, exp_fortschritt: 420 },

{ fortschritt: 34, feld: "Kräutergarten", beschreibung: "Ingwer – exotisch, wertvoll und gefragt.", name: "Ingwer", dauer: 4.6, xp: 4, kaufpreis: 13, verkaufspreis: 32, ansehen: 5, wasserverbrauch: 4, energieverbrauch: 2, exp_fortschritt: 440, anzahlfelder: null },
{ fortschritt: 35, feld: "Kräutergarten", beschreibung: "Ginseng – heilend und extrem lukrativ.", name: "Ginseng", dauer: 4.8, xp: 4, kaufpreis: 14, verkaufspreis: 35, ansehen: 5, wasserverbrauch: 5, energieverbrauch: 2, exp_fortschritt: 460, anzahlfelder: null },

    
];






const magieFelder = [
    // 🌰 Traumgarten
    { fortschritt: 131, feld: "Traumgarten freischalten", beschreibung: "Du hast den Traumgarten freigeschaltet! Fantastische Pflanzen voller Magie.", name: "Traumgarten", dauer: null, xp: null, benutzer_exp: 5, kaufpreis: null, verkaufspreis: null, ansehen: 5, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 15 },

    { fortschritt: 132, feld: "Traumgarten", beschreibung: "Mondblume leuchtet nachts.", name: "Mondblume", dauer: 12, xp: 14, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 30, ansehen: 0, freigeschaltet: false, wasserverbrauch: 8, energieverbrauch: 6, magieverbrauch: 4, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 133, feld: "Traumgarten", beschreibung: "Sonnenblatt speichert Energie.", name: "Sonnenblatt", dauer: 13, xp: 15, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 32, ansehen: 0, freigeschaltet: false, wasserverbrauch: 9, energieverbrauch: 7, magieverbrauch: 5, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 134, feld: "Traumgarten", beschreibung: "Dämmergras pulsiert magisch.", name: "Dämmergras", dauer: 14, xp: 16, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 34, ansehen: 0, freigeschaltet: false, wasserverbrauch: 10, energieverbrauch: 8, magieverbrauch: 6, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 135, feld: "Traumgarten", beschreibung: "Nebelblatt speichert Feuchtigkeit.", name: "Nebelblatt", dauer: 15, xp: 17, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 36, ansehen: 0, freigeschaltet: false, wasserverbrauch: 11, energieverbrauch: 9, magieverbrauch: 7, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 136, feld: "Traumgarten", beschreibung: "Sternenblatt leuchtet blau.", name: "Sternenblatt", dauer: 16, xp: 18, benutzer_exp: 0, kaufpreis: 14, verkaufspreis: 38, ansehen: 0, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 10, magieverbrauch: 8, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 137, feld: "Traumgarten", beschreibung: "Aurorablume reflektiert Licht.", name: "Aurorablume", dauer: 17, xp: 19, benutzer_exp: 0, kaufpreis: 15, verkaufspreis: 40, ansehen: 0, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 11, magieverbrauch: 9, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 138, feld: "Traumgarten", beschreibung: "Kristallgras glitzert stark.", name: "Kristallgras", dauer: 18, xp: 20, benutzer_exp: 0, kaufpreis: 16, verkaufspreis: 42, ansehen: 0, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 12, magieverbrauch: 10, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 139, feld: "Traumgarten", beschreibung: "Mondnebelblüte umhüllt die Umgebung.", name: "Mondnebelblüte", dauer: 19, xp: 21, benutzer_exp: 0, kaufpreis: 17, verkaufspreis: 44, ansehen: 0, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 13, magieverbrauch: 11, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 140, feld: "Traumgarten", beschreibung: "Sonnennebelblatt speichert Energie.", name: "Sonnennebelblatt", dauer: 20, xp: 22, benutzer_exp: 0, kaufpreis: 18, verkaufspreis: 46, ansehen: 0, freigeschaltet: false, wasserverbrauch: 16, energieverbrauch: 14, magieverbrauch: 12, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 141, feld: "Traumgarten", beschreibung: "Dämmerklee pulsiert im Rhythmus des Mondes.", name: "Dämmerklee", dauer: 21, xp: 23, benutzer_exp: 0, kaufpreis: 19, verkaufspreis: 48, ansehen: 0, freigeschaltet: false, wasserverbrauch: 17, energieverbrauch: 15, magieverbrauch: 13, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 142, feld: "Traumgarten", beschreibung: "Nebelmoos speichert Magie und Feuchtigkeit.", name: "Nebelmoos", dauer: 22, xp: 24, benutzer_exp: 0, kaufpreis: 20, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 16, magieverbrauch: 14, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 143, feld: "Traumgarten", beschreibung: "Sternenklee funkelt wie Sterne.", name: "Sternenklee", dauer: 23, xp: 25, benutzer_exp: 0, kaufpreis: 21, verkaufspreis: 52, ansehen: 0, freigeschaltet: false, wasserverbrauch: 19, energieverbrauch: 17, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 144, feld: "Traumgarten", beschreibung: "Glanzblatt speichert Licht und Energie.", name: "Glanzblatt", dauer: 24, xp: 26, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 54, ansehen: 0, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 18, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 145, feld: "Bonus", beschreibung: "Du erhältst 50 Magie für den Traumgarten!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 50, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, anzahlfelder: null, level: null },

    // 🌈 Regenbogenfeld
    { fortschritt: 146, feld: "Regenbogenfeld freischalten", beschreibung: "Du hast das Regenbogenfeld freigeschaltet! Farbenfrohe Pflanzen mit hoher Magie.", name: "Regenbogenfeld", dauer: null, xp: null, benutzer_exp: 10, kaufpreis: null, verkaufspreis: null, ansehen: 6, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 20 },

    { fortschritt: 147, feld: "Regenbogenfeld", beschreibung: "Aurorablume reflektiert alle Farben.", name: "Aurorablume", dauer: 15, xp: 18, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 36, ansehen: 0, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 9, magieverbrauch: 7, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 148, feld: "Regenbogenfeld", beschreibung: "Prismablüte verstärkt die Magie der Umgebung.", name: "Prismablüte", dauer: 16, xp: 19, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 38, ansehen: 0, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 10, magieverbrauch: 8, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 149, feld: "Regenbogenfeld", beschreibung: "Glanzgras funkelt in allen Lichtwinkeln.", name: "Glanzgras", dauer: 17, xp: 20, benutzer_exp: 0, kaufpreis: 14, verkaufspreis: 40, ansehen: 0, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 11, magieverbrauch: 9, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 150, feld: "Regenbogenfeld", beschreibung: "Farbenzauberblatt speichert Lichtfarben.", name: "Farbenzauberblatt", dauer: 18, xp: 21, benutzer_exp: 0, kaufpreis: 15, verkaufspreis: 42, ansehen: 0, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 12, magieverbrauch: 10, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 151, feld: "Regenbogenfeld", beschreibung: "Lichtklee bricht das Sonnenlicht.", name: "Lichtklee", dauer: 19, xp: 22, benutzer_exp: 0, kaufpreis: 16, verkaufspreis: 44, ansehen: 0, freigeschaltet: false, wasserverbrauch: 16, energieverbrauch: 13, magieverbrauch: 11, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 152, feld: "Regenbogenfeld", beschreibung: "Regenbogenblatt speichert Regenfarben.", name: "Regenbogenblatt", dauer: 20, xp: 23, benutzer_exp: 0, kaufpreis: 17, verkaufspreis: 46, ansehen: 0, freigeschaltet: false, wasserverbrauch: 17, energieverbrauch: 14, magieverbrauch: 12, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 153, feld: "Regenbogenfeld", beschreibung: "Sonnenstrahlblatt glänzt in allen Farben.", name: "Sonnenstrahlblatt", dauer: 21, xp: 24, benutzer_exp: 0, kaufpreis: 18, verkaufspreis: 48, ansehen: 0, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 15, magieverbrauch: 13, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 154, feld: "Regenbogenfeld", beschreibung: "Magieklee pulsiert farbig.", name: "Magieklee", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: 19, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 19, energieverbrauch: 16, magieverbrauch: 14, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 155, feld: "Regenbogenfeld", beschreibung: "Farbenschimmergras leuchtet sanft.", name: "Farbenschimmergras", dauer: 23, xp: 26, benutzer_exp: 0, kaufpreis: 20, verkaufspreis: 52, ansehen: 0, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 17, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 156, feld: "Regenbogenfeld", beschreibung: "Prismenblatt spiegelt alle Farben.", name: "Prismenblatt", dauer: 24, xp: 27, benutzer_exp: 0, kaufpreis: 21, verkaufspreis: 54, ansehen: 0, freigeschaltet: false, wasserverbrauch: 21, energieverbrauch: 18, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 157, feld: "Regenbogenfeld", beschreibung: "Buntblüte funkelt in der Sonne.", name: "Buntblüte", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 56, ansehen: 0, freigeschaltet: false, wasserverbrauch: 22, energieverbrauch: 19, magieverbrauch: 17, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 158, feld: "Regenbogenfeld", beschreibung: "Regenbogengras wirbelt Funken umher.", name: "Regenbogengras", dauer: 26, xp: 29, benutzer_exp: 0, kaufpreis: 23, verkaufspreis: 58, ansehen: 0, freigeschaltet: false, wasserverbrauch: 23, energieverbrauch: 20, magieverbrauch: 18, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 159, feld: "Regenbogenfeld", beschreibung: "Leuchtblatt speichert Lichtmagie.", name: "Leuchtblatt", dauer: 27, xp: 30, benutzer_exp: 0, kaufpreis: 24, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 24, energieverbrauch: 21, magieverbrauch: 19, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 160, feld: "Bonus", beschreibung: "Du erhältst 40 Wasser für das Regenbogenfeld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 40, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, anzahlfelder: null, level: null },

    // 🌟 Sternenhain
    { fortschritt: 161, feld: "Sternenhain freischalten", beschreibung: "Du hast den Sternenhain freigeschaltet! Funkelnde Pflanzen unter dem Sternenhimmel.", name: "Sternenhain", dauer: null, xp: null, benutzer_exp: 15, kaufpreis: null, verkaufspreis: null, ansehen: 7, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 25 },

    { fortschritt: 162, feld: "Sternenhain", beschreibung: "Nachtleuchtkraut strahlt blaues Licht.", name: "Nachtleuchtkraut", dauer: 28, xp: 32, benutzer_exp: 0, kaufpreis: 25, verkaufspreis: 65, ansehen: 0, freigeschaltet: false, wasserverbrauch: 25, energieverbrauch: 20, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 163, feld: "Sternenhain", beschreibung: "Sternenmoos speichert kosmische Energie.", name: "Sternenmoos", dauer: 29, xp: 33, benutzer_exp: 0, kaufpreis: 26, verkaufspreis: 67, ansehen: 0, freigeschaltet: false, wasserverbrauch: 26, energieverbrauch: 21, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 164, feld: "Sternenhain", beschreibung: "Galaxienblüte rotiert langsam und strahlt Magie aus.", name: "Galaxienblüte", dauer: 30, xp: 34, benutzer_exp: 0, kaufpreis: 27, verkaufspreis: 69, ansehen: 0, freigeschaltet: false, wasserverbrauch: 27, energieverbrauch: 22, magieverbrauch: 17, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 165, feld: "Sternenhain", beschreibung: "Kosmosblatt glitzert wie kleine Sterne.", name: "Kosmosblatt", dauer: 31, xp: 35, benutzer_exp: 0, kaufpreis: 28, verkaufspreis: 71, ansehen: 0, freigeschaltet: false, wasserverbrauch: 28, energieverbrauch: 23, magieverbrauch: 18, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 166, feld: "Sternenhain", beschreibung: "Meteorblüte pulsiert rhythmisch.", name: "Meteorblüte", dauer: 32, xp: 36, benutzer_exp: 0, kaufpreis: 29, verkaufspreis: 73, ansehen: 0, freigeschaltet: false, wasserverbrauch: 29, energieverbrauch: 24, magieverbrauch: 19, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 167, feld: "Sternenhain", beschreibung: "Astrogras speichert Sternenenergie.", name: "Astrogras", dauer: 33, xp: 37, benutzer_exp: 0, kaufpreis: 30, verkaufspreis: 75, ansehen: 0, freigeschaltet: false, wasserverbrauch: 30, energieverbrauch: 25, magieverbrauch: 20, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 168, feld: "Sternenhain", beschreibung: "Kometenklee wirbelt funkelnde Staubkörner.", name: "Kometenklee", dauer: 34, xp: 38, benutzer_exp: 0, kaufpreis: 31, verkaufspreis: 77, ansehen: 0, freigeschaltet: false, wasserverbrauch: 31, energieverbrauch: 26, magieverbrauch: 21, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 169, feld: "Sternenhain", beschreibung: "Galaxienblatt leuchtet im Rhythmus der Sterne.", name: "Galaxienblatt", dauer: 35, xp: 39, benutzer_exp: 0, kaufpreis: 32, verkaufspreis: 79, ansehen: 0, freigeschaltet: false, wasserverbrauch: 32, energieverbrauch: 27, magieverbrauch: 22, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 170, feld: "Sternenhain", beschreibung: "Sternenzauberblüte pulsiert bunt.", name: "Sternenzauberblüte", dauer: 36, xp: 40, benutzer_exp: 0, kaufpreis: 33, verkaufspreis: 81, ansehen: 0, freigeschaltet: false, wasserverbrauch: 33, energieverbrauch: 28, magieverbrauch: 23, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 171, feld: "Sternenhain", beschreibung: "Kosmosklee speichert Lichtenergie.", name: "Kosmosklee", dauer: 37, xp: 41, benutzer_exp: 0, kaufpreis: 34, verkaufspreis: 83, ansehen: 0, freigeschaltet: false, wasserverbrauch: 34, energieverbrauch: 29, magieverbrauch: 24, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 172, feld: "Sternenhain", beschreibung: "Himmelsblatt reflektiert Sternenlicht.", name: "Himmelsblatt", dauer: 38, xp: 42, benutzer_exp: 0, kaufpreis: 35, verkaufspreis: 85, ansehen: 0, freigeschaltet: false, wasserverbrauch: 35, energieverbrauch: 30, magieverbrauch: 25, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 173, feld: "Sternenhain", beschreibung: "Astroblüte pulsiert magisch und bunt.", name: "Astroblüte", dauer: 39, xp: 43, benutzer_exp: 0, kaufpreis: 36, verkaufspreis: 87, ansehen: 0, freigeschaltet: false, wasserverbrauch: 36, energieverbrauch: 31, magieverbrauch: 26, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 174, feld: "Sternenhain", beschreibung: "Leuchtgras speichert Licht in Farben.", name: "Leuchtgras", dauer: 40, xp: 44, benutzer_exp: 0, kaufpreis: 37, verkaufspreis: 89, ansehen: 0, freigeschaltet: false, wasserverbrauch: 37, energieverbrauch: 32, magieverbrauch: 27, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },

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


const gebäudeProdukte = {
    "Gemüseverarbeitungsfabrik": [
        { fortschritt: 500, feld: "Gemüseverarbeitungsfabrik freischalten", beschreibung: "Du hast die Gemüseverarbeitungsfabrik errichtet! Jetzt kannst du frisches Gemüse zu leckeren Produkten verarbeiten.", name: "Gemüseverarbeitungsfabrik", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 3 },

        { fortschritt: 501, feld: "Gemüseverarbeitungsfabrik", beschreibung: "Ein frisches Gemüsepaket mit knackigem Inhalt.", name: "Gemüsepaket", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 45, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Karotte": 2, "Salat": 2, "Tomate": 1 } },

        { fortschritt: 502, feld: "Gemüseverarbeitungsfabrik", beschreibung: "Wärmende Gemüsesuppe, frisch zubereitet.", name: "Gemüsesuppe", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Brokkoli": 1, "Zwiebel": 2, "Gurke": 1 } },

        { fortschritt: 503, feld: "Gemüseverarbeitungsfabrik", beschreibung: "Knusprige Chips aus frischem Gemüse gebacken.", name: "Gemüsechips", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Karotte": 3, "Zucchini": 2 } },

        { fortschritt: 504, feld: "Gemüseverarbeitungsfabrik", beschreibung: "Langanhaltende Gemüsekonserve für Vorräte.", name: "Gemüsekonserve", dauer: 30, xp: 30, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 70, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 15, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Paprika": 2, "Brokkoli": 1, "Tomate": 2 } },

        { fortschritt: 505, feld: "Gemüseverarbeitungsfabrik", beschreibung: "Frische, knackige Salatmischung für jede Mahlzeit.", name: "Salatmischung", dauer: 12, xp: 18, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 40, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 8, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Salat": 3, "Radieschen": 2 } },
    ],

    "Obstkelterei": [
        { fortschritt: 510, feld: "Obstkelterei freischalten", beschreibung: "Die Obstkelterei steht bereit. Fruchtige Produkte erwarten dich!", name: "Obstkelterei", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 4 },

        { fortschritt: 511, feld: "Obstkelterei", beschreibung: "Frischer Obstsaft für jeden Durst.", name: "Obstsaft", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 8, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Apfel": 1, "Birne": 1, "Kirsche": 1 } },

        { fortschritt: 512, feld: "Obstkelterei", beschreibung: "Fruchtige Marmelade, perfekt für dein Frühstück.", name: "Marmelade", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Pflaume": 2, "Aprikose": 1, "Pfirsich": 1 } },

        { fortschritt: 513, feld: "Obstkelterei", beschreibung: "Fruchtiger Smoothie aus exotischen Früchten.", name: "Smoothie", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 65, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Mango": 1, "Banane": 1, "Orange": 1 } },

        { fortschritt: 514, feld: "Obstkelterei", beschreibung: "Frischer Obstsalat, perfekt für jede Mahlzeit.", name: "Obstsalat", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Apfel": 2, "Birne": 1, "Kirsche": 2 } },

        { fortschritt: 515, feld: "Obstkelterei", beschreibung: "Leckeres Fruchtkompott für den Vorratsschrank.", name: "Fruchtkompott", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Pfirsich": 2, "Pflaume": 2 } }
    ],

    "Getreidemühle": [
        { fortschritt: 520, feld: "Getreidemühle freischalten", beschreibung: "Die Getreidemühle ist bereit. Hier kannst du Körner zu Mehl verarbeiten.", name: "Getreidemühle", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 5 },

        { fortschritt: 521, feld: "Getreidemühle", beschreibung: "Feines Weizenmehl für Backwaren.", name: "Weizenmehl", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Weizen": 3 } },

        { fortschritt: 522, feld: "Getreidemühle", beschreibung: "Knusprige Haferflocken für Frühstück und Snacks.", name: "Haferflocken", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Hafer": 2 } },

        { fortschritt: 523, feld: "Getreidemühle", beschreibung: "Mischmehl für vielfältige Backwaren.", name: "Mischmehl", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Weizen": 1, "Gerste": 1, "Roggen": 1 } },

        { fortschritt: 524, feld: "Getreidemühle", beschreibung: "Reismehl für leichte Backwaren.", name: "Reismehl", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Reis": 2 } },

        { fortschritt: 525, feld: "Getreidemühle", beschreibung: "Quinoaflocken für gesunde Ernährung.", name: "Quinoaflocken", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Quinoa": 2 } }
    ],

    "Kräuterlabor": [
        { fortschritt: 530, feld: "Kräuterlabor freischalten", beschreibung: "Im Kräuterlabor kannst du wertvolle Kräuter verarbeiten.", name: "Kräuterlabor", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 6 },

        { fortschritt: 531, feld: "Kräuterlabor", beschreibung: "Basilikumöl für frische Gerichte.", name: "Basilikumöl", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Basilikum": 2 } },

        { fortschritt: 532, feld: "Kräuterlabor", beschreibung: "Petersilienpaste für vielseitige Küche.", name: "Petersilienpaste", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Petersilie": 2 } },

        { fortschritt: 533, feld: "Kräuterlabor", beschreibung: "Thymian-Tee für entspannte Momente.", name: "Thymian-Tee", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Thymian": 1, "Minze": 1 } },

        { fortschritt: 534, feld: "Kräuterlabor", beschreibung: "Rosmarin-Salz für aromatische Gerichte.", name: "Rosmarin-Salz", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Rosmarin": 2 } },

        { fortschritt: 535, feld: "Kräuterlabor", beschreibung: "Kräutermischung für vielseitige Rezepte.", name: "Kräutermischung", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Koriander": 1, "Schnittlauch": 1, "Salbei": 1 } }
    ],

    "Blumenatelier": [
        { fortschritt: 540, feld: "Blumenatelier freischalten", beschreibung: "Das Blumenatelier ist bereit. Kreieren Sie wunderschöne Blumenarrangements.", name: "Blumenatelier", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 7 },

        { fortschritt: 541, feld: "Blumenatelier", beschreibung: "Rosenstrauß für jeden Anlass.", name: "Rosenstrauß", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Rose": 3 } },

        { fortschritt: 542, feld: "Blumenatelier", beschreibung: "Tulpenbouquet, frisch gebunden.", name: "Tulpenbouquet", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Tulpe": 3 } },

        { fortschritt: 543, feld: "Blumenatelier", beschreibung: "Orchideenarrangement für besondere Momente.", name: "Orchideenarrangement", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Orchidee": 2 } },

        { fortschritt: 544, feld: "Blumenatelier", beschreibung: "Sonnenblumenstrauß, sonnig und fröhlich.", name: "Sonnenblumenstrauß", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Sonnenblume": 3 } },

        { fortschritt: 545, feld: "Blumenatelier", beschreibung: "Mischblumenstrauß für besondere Anlässe.", name: "Mischblumenstrauß", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Lilie": 1, "Narzisse": 1, "Gerbera": 1 } }
    ],

    "Tropenwerkstatt": [
        { fortschritt: 550, feld: "Tropenwerkstatt freischalten", beschreibung: "Die Tropenwerkstatt ist bereit. Hier kannst du exotische Früchte verarbeiten.", name: "Tropenwerkstatt", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 8 },

        { fortschritt: 551, feld: "Tropenwerkstatt", beschreibung: "Bananenbrot aus frischen Bananen.", name: "Bananenbrot", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Banane": 2 } },

        { fortschritt: 552, feld: "Tropenwerkstatt", beschreibung: "Ananasmarmelade für süße Momente.", name: "Ananasmarmelade", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Ananas": 2 } },

        { fortschritt: 553, feld: "Tropenwerkstatt", beschreibung: "Papaya-Smoothie, erfrischend und gesund.", name: "Papaya-Smoothie", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Papaya": 1 } },

        { fortschritt: 554, feld: "Tropenwerkstatt", beschreibung: "Kokosnussöl für exotische Gerichte.", name: "Kokosnussöl", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Kokosnuss": 2 } },

        { fortschritt: 555, feld: "Tropenwerkstatt", beschreibung: "Exotischer Früchtesalat für frische Energie.", name: "Exotischer Früchtesalat", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Passionsfrucht": 1, "Litschi": 1 } }
    ],

    "Gewächshaus": [
        { fortschritt: 560, feld: "Gewächshaus freischalten", beschreibung: "Das Gewächshaus ist bereit für Premium-Gemüse.", name: "Gewächshaus", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 9 },

        { fortschritt: 561, feld: "Gewächshaus", beschreibung: "Premium-Gurke für besondere Gerichte.", name: "Premium-Gurke", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Gurke (Premium)": 2 } },

        { fortschritt: 562, feld: "Gewächshaus", beschreibung: "Premium-Tomate für frische Salate.", name: "Premium-Tomate", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Tomate (Premium)": 2 } },

        { fortschritt: 563, feld: "Gewächshaus", beschreibung: "Auberginenpaste für aromatische Gerichte.", name: "Auberginenpaste", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Aubergine": 2 } },

        { fortschritt: 564, feld: "Gewächshaus", beschreibung: "Chili-Sauce für scharfe Würze.", name: "Chili-Sauce", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Chili": 2 } },

        { fortschritt: 565, feld: "Gewächshaus", beschreibung: "Zucchini-Auflauf für leckere Gerichte.", name: "Zucchini-Auflauf", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Zucchini": 2 } }
    ],

    "Exotische Heilpflanzenfabrik": [
        { fortschritt: 570, feld: "Exotische Heilpflanzenfabrik freischalten", beschreibung: "Hier werden exotische Heilpflanzen verarbeitet.", name: "Exotische Heilpflanzenfabrik", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 10 },

        { fortschritt: 571, feld: "Exotische Heilpflanzenfabrik", beschreibung: "Aloe-Vera-Saft für Haut und Wohlbefinden.", name: "Aloe-Vera-Saft", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Aloe Vera": 2 } },

        { fortschritt: 572, feld: "Exotische Heilpflanzenfabrik", beschreibung: "Ginseng-Tee für Energie und Vitalität.", name: "Ginseng-Tee", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Ginseng": 2 } },

        { fortschritt: 573, feld: "Exotische Heilpflanzenfabrik", beschreibung: "Kurkuma-Paste für gesunde Ernährung.", name: "Kurkuma-Paste", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Kurkuma": 2 } },

        { fortschritt: 574, feld: "Exotische Heilpflanzenfabrik", beschreibung: "Ingwerextrakt für Gesundheit und Geschmack.", name: "Ingwerextrakt", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Ingwer": 2 } },

        { fortschritt: 575, feld: "Exotische Heilpflanzenfabrik", beschreibung: "Teebaumöl für vielseitige Anwendung.", name: "Teebaumöl", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Teebaum": 2 } }
    ],

    "Mystisches Labor": [
        { fortschritt: 580, feld: "Mystisches Labor freischalten", beschreibung: "Das Mystische Labor öffnet seine Tore für magische Produkte.", name: "Mystisches Labor", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 11 },

        { fortschritt: 581, feld: "Mystisches Labor", beschreibung: "Goldene Karotte Elixier für besondere Effekte.", name: "Goldene Karotte Elixier", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Goldene Karotte": 1 } },

        { fortschritt: 582, feld: "Mystisches Labor", beschreibung: "Schwarzer Reis Paste für magische Mahlzeiten.", name: "Schwarzer Reis Paste", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Schwarzer Reis": 2 } },

        { fortschritt: 583, feld: "Mystisches Labor", beschreibung: "Kristall-Tomatenkonserve für magische Rezepte.", name: "Kristall-Tomatenkonserve", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Kristall-Tomate": 2 } },

        { fortschritt: 584, feld: "Mystisches Labor", beschreibung: "Traumfrucht-Drink für erfrischende Träume.", name: "Traumfrucht-Drink", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Traumfrucht": 1 } },

        { fortschritt: 585, feld: "Mystisches Labor", beschreibung: "Regenbogenmais-Mahlzeit für besondere Energie.", name: "Regenbogenmais-Mahlzeit", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 12, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Regenbogenmais": 1, "Ewigkeitssamen": 1 } }
    ]
};


const gebaeudeListe = [
  { fortschritt: 650, feld: "Wasserpumpe", beschreibung: "Pumpt stetig frisches Wasser aus dem Boden.", name: "Wasserpumpe", dauer: 5, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 10, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 1, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, lager: null, anzahl_slots: 15, betriebsmittel_level: 1, level: 1 },

  { fortschritt: 651, feld: "Elektrizitätswerk", beschreibung: "Erzeugt Energie für deine Farmen.", name: "Elektrizitätswerk", dauer: 10, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 15, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 1, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, lager: null, anzahl_slots: 15, betriebsmittel_level: 1, level: 2 },

  { fortschritt: 652, feld: "Goldmine", beschreibung: "Fördert wertvolles Gold über die Zeit.", name: "Goldmine", dauer: 7.50, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 10, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 1, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahl_slots: 25, lager: null, betriebsmittel_level: 1, level: 3 }
];




const weltmarktTutorials = [];

// Enter-Taste abfangen
document.getElementById('loginForm').addEventListener('keydown', function (event) {
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

    // 🧱 Standardbenutzer erstellen
    function defaultBenutzer(passwort) {
        const daten = {
            benutzername,
            passwort,
            mail: null,
            einstellungen: { sound: true, song: null, sound_timestamp: null, benachrichtigung: true, effekte: true },
            benutzer_ansehen: 0,
            benutzer_level: 1,
            benutzer_explevel: 0,
            benutzer_levelsystem: 5,
            benutzer_exp: 0,
            lagerplatz: { gold: 500, wasser: 35, energie: 35, magie: 35, duenger: 35, pflanzen: 65, produkte: 15 },
            aktuelleFarm: null,
            ressourcen: { gold: 0, wasser: 35, energie: 0, magie: 0, duenger: 0, anz_pflanzen: 0, anz_produkte: 0 },
            produkte: {},
            gebaeudeFelder: {},
            pflanzenDaten: {},
            pflanzenDatenMagische: {},
            felder_tutorial: {},
            weltmarkt_tutorial: {},
            betriebsmittel: {}
        };

        gebaeudeListe.forEach(geb => {
            daten.betriebsmittel[geb.fortschritt] = { ...geb };
        });

        // Hilfsfunktionen für Felder
        function erzeugeFelder(anzahl, fortschritt) {
            const felder = {};
            for (let i = 1; i <= Number(anzahl) || 0; i++) {
                felder[i] = {
                    fortschritt,
                    name: fortschritt,
                    status: "leer",
                    pflanze: null,
                    zeit_gepflanzt: null,
                    zeit_gewachsen: null
                };
            }
            return felder;
        }

        function erzeugeGebaeudeFelder(anzahl, fortschritt) {
            const felder = {};
            for (let i = 1; i <= Number(anzahl) || 0; i++) {
                felder[i] = {
                    fortschritt,
                    name: fortschritt,
                    status: "leer",
                    produkt: null,
                    zeit_start: null,
                    zeit_fertig: null
                };
            }
            return felder;
        }

        // Pflanzen normal
        progression.forEach(p => {
            daten.pflanzenDaten[p.fortschritt] = { ...p, felder: erzeugeFelder(p.anzahlfelder, p.fortschritt) };
        });

        // Magische Pflanzen
        magieFelder.forEach(p => {
            daten.pflanzenDatenMagische[p.fortschritt] = { ...p, felder: erzeugeFelder(p.anzahlfelder, p.fortschritt) };
        });

        // Produkte & Gebäude-Felder
        Object.keys(gebäudeProdukte).forEach(gebaeude => {
            daten.produkte[gebaeude] = gebäudeProdukte[gebaeude].map(p => ({ ...p }));
            gebäudeProdukte[gebaeude].forEach(p => {
                if (p.anzahlfelder !== null) {
                    daten.gebaeudeFelder[p.fortschritt] = erzeugeGebaeudeFelder(p.anzahlfelder, p.fortschritt);
                }
            });
        });

        feldfreischaltungTutorials.forEach(f => daten.felder_tutorial[f.fortschritt] = { ...f });
        if (typeof weltmarktTutorials !== "undefined") {
            weltmarktTutorials.forEach(w => daten.weltmarkt_tutorial[w.id] = { ...w });
        }

        return daten;
    }

    // 🧍 Neuer Benutzer
    if (!benutzerDaten[benutzername]) {
        benutzerDaten[benutzername] = defaultBenutzer(passwort);
        localStorage.setItem('benutzer', JSON.stringify(benutzerDaten));
        localStorage.setItem("aktuellerBenutzer", benutzername);
        info.textContent = "Neuer Benutzer angelegt und eingeloggt.";
        info.style.color = "green";
        setTimeout(() => window.location.href = "hauptseite.html", 1000);
        return;
    }

    // 🔐 Passwort prüfen
    if (benutzerDaten[benutzername].passwort !== passwort) {
        info.textContent = "Falsches Passwort!";
        info.style.color = "red";
        return;
    }

    // ✅ Login erfolgreich
    localStorage.setItem("aktuellerBenutzer", benutzername);
    info.textContent = "Login erfolgreich!";
    info.style.color = "green";

    setTimeout(() => {
        prüfeUndAktualisiereBenutzerDaten(benutzerDaten, benutzername);
    }, 200);
}




function prüfeUndAktualisiereBenutzerDaten(alleBenutzer, benutzername) {
    const daten = alleBenutzer[benutzername];
    const hinzugefügt = [];
    const entfernt = [];
    const verändert = [];

    const keysZuPruefen = [
        "dauer", "xp", "benutzer_exp", "kaufpreis", "verkaufspreis", "ansehen",
        "wasserverbrauch", "energieverbrauch", "magieverbrauch",
        "gold", "wasser", "energie", "magie", "bonus",
        "anzahl_slots", "level"
    ];

    function normalize(obj) {
        const clean = {};
        keysZuPruefen.forEach(k => {
            clean[k] = obj[k] != null ? String(obj[k]) : null;
        });
        return clean;
    }

    function objekteVergleich(a, b) {
        // freigeschaltet & betriebsmittel_level ignorieren
        const { freigeschaltet: _, betriebsmittel_level: __, ...restA } = a;
        const { freigeschaltet: ___, betriebsmittel_level: ____, ...restB } = b;
        return JSON.stringify(normalize(restA)) === JSON.stringify(normalize(restB));
    }

    function initialisiereFelderGebäude(gebaeude) {
        if (!daten.gebaeudeFelder) daten.gebaeudeFelder = {};
        if (gebaeude.anzahl_slots !== null && !daten.gebaeudeFelder[gebaeude.fortschritt]) {
            const felder = {};
            for (let i = 1; i <= gebaeude.anzahl_slots; i++) {
                felder[i] = {
                    fortschritt: gebaeude.fortschritt,
                    name: gebaeude.name,
                    status: "leer",
                    produkt: null,
                    zeit_start: null,
                    zeit_fertig: null
                };
            }
            daten.gebaeudeFelder[gebaeude.fortschritt] = felder;
        }
    }

    // 🌿 Normale Pflanzen
    aktualisiereKategorie(daten.pflanzenDaten, progression, "Pflanze");

    // ✨ Magische Pflanzen
    aktualisiereKategorie(daten.pflanzenDatenMagische, magieFelder, "magische Pflanze");

    // 🏭 Produkte & Gebäude-Felder
    if (!daten.produkte) daten.produkte = {};

    Object.keys(gebäudeProdukte).forEach(gebaeudeName => {
        if (!daten.produkte[gebaeudeName]) {
            daten.produkte[gebaeudeName] = gebäudeProdukte[gebaeudeName].map(p => ({ ...p }));
        }
        gebäudeProdukte[gebaeudeName].forEach(p => initialisiereFelderGebäude(p));
    });

    aktualisiereProdukte(daten.produkte, gebäudeProdukte);

    // 🧱 Betriebsmittel (Wasserpumpe, Elektrizitätswerk, Goldmine)
    if (!daten.betriebsmittel) daten.betriebsmittel = {};
    aktualisiereBetriebsmittel(daten.betriebsmittel, gebaeudeListe);

    // 📌 Feld-Tutorials
    synchronisiereEinfacheListe(daten.felder_tutorial, feldfreischaltungTutorials, "fortschritt", "Feld-Tutorial");

    // 🌍 Weltmarkt-Tutorials
    synchronisiereEinfacheListe(daten.weltmarkt_tutorial, weltmarktTutorials, "id", "Weltmarkt-Tutorial");

    // 💾 Speichern
    alleBenutzer[benutzername] = daten;
    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    if (hinzugefügt.length || entfernt.length || verändert.length) {
        zeigeAenderungsOverlay(hinzugefügt, entfernt, verändert);
    } else {
        window.location.href = "hauptseite.html";
    }

    // ------------------------- Hilfsfunktionen -------------------------

    function aktualisiereKategorie(speicher, quelle, label) {
        const aktuelleMap = {};
        quelle.forEach(p => {
            const { freigeschaltet, ...rest } = p;
            aktuelleMap[p.fortschritt] = rest;
        });

        for (const key in aktuelleMap) {
            const aktuelle = aktuelleMap[key];
            let gespeicherte = speicher[key];

            if (!gespeicherte) {
                speicher[key] = { ...aktuelle, felder: {} };
                hinzugefügt.push(`Neue ${label}: ${aktuelle.name}`);
            } else if (!objekteVergleich(gespeicherte, aktuelle)) {
                keysZuPruefen.forEach(k => gespeicherte[k] = aktuelle[k]);
                verändert.push(`Aktualisiert: ${aktuelle.name}`);
            }
        }

        for (const key in speicher) {
            if (!aktuelleMap[key]) {
                entfernt.push(`Entfernt: ${speicher[key].name}`);
                delete speicher[key];
            }
        }
    }

    function synchronisiereEinfacheListe(speicher, quelle, idKey, label) {
        const aktuelleMap = {};
        quelle.forEach(item => aktuelleMap[item[idKey]] = item);

        for (const key in aktuelleMap) {
            if (!speicher[key]) {
                speicher[key] = { ...aktuelleMap[key] };
                hinzugefügt.push(`Neu: ${label} (${key})`);
            }
        }

        for (const key in speicher) {
            if (!aktuelleMap[key]) {
                entfernt.push(`Entfernt: ${label} (${key})`);
                delete speicher[key];
            }
        }
    }

    function aktualisiereProdukte(speicher, quelle) {
        const keysToIgnore = ["hergestellt", "anzahlprodukte", "freigeschaltet"];

        Object.keys(quelle).forEach(gebaeude => {
            if (!speicher[gebaeude]) {
                speicher[gebaeude] = quelle[gebaeude].map(p => ({ ...p }));
                hinzugefügt.push(`Neue Produkte im Gebäude: ${gebaeude}`);
            } else {
                const aktuelleMap = {};
                quelle[gebaeude].forEach(p => aktuelleMap[p.name] = p);

                speicher[gebaeude] = speicher[gebaeude].map(prod => {
                    const quelleProd = aktuelleMap[prod.name];
                    if (!quelleProd) return prod;

                    const prodFiltered = Object.fromEntries(Object.entries(prod).filter(([k]) => !keysToIgnore.includes(k)));
                    const quelleFiltered = Object.fromEntries(Object.entries(quelleProd).filter(([k]) => !keysToIgnore.includes(k)));

                    if (!deepEqual(prodFiltered, quelleFiltered)) {
                        const hergestelltAlt = prod.hergestellt ?? 0;
                        const anzahlAlt = prod.anzahlprodukte ?? 0;
                        const neuesProdukt = { ...quelleProd, hergestellt: hergestelltAlt, anzahlprodukte: anzahlAlt };
                        verändert.push(`Produkt aktualisiert: ${prod.name} in ${gebaeude}`);
                        delete aktuelleMap[prod.name];
                        return neuesProdukt;
                    } else {
                        delete aktuelleMap[prod.name];
                        return prod;
                    }
                });

                Object.values(aktuelleMap).forEach(p => {
                    speicher[gebaeude].push({ ...p });
                    hinzugefügt.push(`Neues Produkt: ${p.name} in ${gebaeude}`);
                });
            }

            const aktuelleNamen = quelle[gebaeude].map(p => p.name);
            speicher[gebaeude] = speicher[gebaeude].filter(p => aktuelleNamen.includes(p.name));
        });
    }

    function aktualisiereBetriebsmittel(speicher, quelle) {
        const aktuelleMap = {};
        quelle.forEach(g => {
            const { freigeschaltet, betriebsmittel_level, ...rest } = g;
            aktuelleMap[g.fortschritt] = rest;
        });

        for (const key in aktuelleMap) {
            const aktuelle = aktuelleMap[key];
            let gespeicherte = speicher[key];

            if (!gespeicherte) {
                speicher[key] = { ...aktuelle };
                hinzugefügt.push(`Neues Betriebsmittel: ${aktuelle.name}`);
            } else if (!objekteVergleich(gespeicherte, aktuelle)) {
                keysZuPruefen.forEach(k => gespeicherte[k] = aktuelle[k]);
                verändert.push(`Betriebsmittel aktualisiert: ${aktuelle.name}`);
            }
        }

        for (const key in speicher) {
            if (!aktuelleMap[key]) {
                entfernt.push(`Betriebsmittel entfernt: ${speicher[key].name}`);
                delete speicher[key];
            }
        }
    }

    function deepEqual(a, b) {
        if (a === b) return true;
        if (typeof a !== typeof b) return false;
        if (typeof a !== "object" || a === null || b === null) return false;
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        return keysA.every(key => deepEqual(a[key], b[key]));
    }
}





// Overlay
function zeigeAenderungsOverlay(hinzugefügt, entfernt, verändert) {
    // Falls schon ein Overlay existiert → entfernen
    const vorhandenesOverlay = document.getElementById("levelup_overlay");
    if (vorhandenesOverlay) vorhandenesOverlay.remove();

    // Neues Overlay erstellen
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

    // Inhalt zusammenstellen
    let html = `<h2>⚡ Updates nach Login</h2>`;
    if (hinzugefügt.length) html += `<p><b>Hinzugefügt:</b><br>${hinzugefügt.join("<br>")}</p>`;
    if (entfernt.length) html += `<p><b>Entfernt:</b><br>${entfernt.join("<br>")}</p>`;
    if (verändert.length) html += `<p><b>Aktualisiert:</b><br>${verändert.join("<br>")}</p>`;
    ressDialog.innerHTML = html;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "OK";
    closeBtn.className = "ui_unten";
    closeBtn.addEventListener("click", () => {
        ressOverlay.remove();
        window.location.href = "hauptseite.html";
    });

    ressDialog.appendChild(closeBtn);
    ressOverlay.appendChild(ressDialog);
    document.body.appendChild(ressOverlay);
}




// TOP 5 SPIELER 
function zeigeTopSpieler() {
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const topSpielerListe = document.getElementById("topSpielerListe");
    topSpielerListe.innerHTML = "";

    const sortiert = Object.entries(alleBenutzer)
        .map(([name, daten]) => ({
            name,
            daten,
            level: daten.benutzer_level || 0
        }))
        .sort((a, b) => b.level - a.level)
        .slice(0, 5);

    if (sortiert.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Keine Spieler vorhanden";
        topSpielerListe.appendChild(li);
        return;
    }

    sortiert.forEach((spieler, index) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.marginBottom = "0.5rem";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${index + 1}. ${spieler.name}`;

        if (spieler.name === aktuellerBenutzer) {
            nameSpan.style.color = "#2e7d32";
            nameSpan.style.fontWeight = "bold";
        }

        const infoBtn = document.createElement("button");
        infoBtn.textContent = "Info";
        infoBtn.style.padding = "0.25rem 0.5rem";
        infoBtn.style.border = "none";
        infoBtn.style.borderRadius = "6px";
        infoBtn.style.background = "#1976d2";
        infoBtn.style.color = "#fff";
        infoBtn.style.cursor = "pointer";
        infoBtn.addEventListener("click", () => {
            zeigeSpielerOverlay(spieler.name, spieler.daten);
        });

        li.appendChild(nameSpan);
        li.appendChild(infoBtn);
        topSpielerListe.appendChild(li);
    });
}

// Overlay-Funktion
function zeigeSpielerOverlay(name, daten) {
    const vorhandenesOverlay = document.getElementById("spieler_info_overlay");
    if (vorhandenesOverlay) vorhandenesOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "spieler_info_overlay";
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
        padding: "2rem",
        borderRadius: "12px",
        minWidth: "300px",
        maxWidth: "400px",
        textAlign: "left"
    });

    const anzahlReise = Object.values(daten.pflanzenDaten).length;
    const freigeschaltetAnzahlReise = Object.values(daten.pflanzenDaten)
        .filter(p => p.freigeschaltet === true).length;


    // 🧮 Farm-Felder berechnen
    const anzahlFelder = Object.values(daten.pflanzenDaten || {})
        .filter(eintrag => eintrag.anzahlfelder !== null).length;

    const anzahlFelderMagische = Object.values(daten.pflanzenDatenMagische || {})
        .filter(eintrag => eintrag.anzahlfelder !== null).length;

    const anzahlFelderGesamt = anzahlFelder + anzahlFelderMagische;

    const freigeschalteteFelder = Object.values(daten.pflanzenDaten || {})
        .filter(eintrag => eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true).length;

    const freigeschalteteFelderMagische = Object.values(daten.pflanzenDatenMagische || {})
        .filter(eintrag => eintrag.anzahlfelder !== null && eintrag.freigeschaltet === true).length;

    const freigeschalteteFelderGesamt = freigeschalteteFelder + freigeschalteteFelderMagische;

    // 📋 Spielerinfo anzeigen
    dialog.innerHTML = `
        <h2>${name} 📝</h2>

        <hr>

        <p><b>Level:</b> ${daten.benutzer_level}</p>
        <p><b>Ansehen:</b> ${daten.benutzer_ansehen}</p>
        <p><b>Gold:</b> ${daten.ressourcen.gold} / ${daten.lagerplatz.gold}</p>
        <p><b>Wasser:</b> ${daten.ressourcen.wasser} / ${daten.lagerplatz.wasser}</p>
        <p><b>Energie:</b> ${daten.ressourcen.energie} / ${daten.lagerplatz.energie}</p>
        <p><b>Magie:</b> ${daten.ressourcen.magie} / ${daten.lagerplatz.magie}</p>
        <p><b>Pflanzen:</b> ${daten.ressourcen.anz_pflanzen} / ${daten.lagerplatz.pflanzen}</p>
        <p><b>Dünger:</b> ${daten.ressourcen.duenger} / ${daten.lagerplatz.duenger}</p>

        <hr>

        <h3>🌱 Deine Farmen</h3>
        <p><b>Freigeschaltet:</b> ${freigeschalteteFelderGesamt} / ${anzahlFelderGesamt}</p>

        <hr>

        <h3>🚀 Deine Reise</h3>
        <p><b>Fortschritt:</b> ${freigeschaltetAnzahlReise} / ${anzahlReise}</p>

        <hr>

    `;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Zurück";
    Object.assign(closeBtn.style, {
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        background: "#2e7d32",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
    });
    closeBtn.addEventListener("click", () => overlay.remove());

    dialog.appendChild(closeBtn);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}




