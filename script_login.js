window.onload = function () {
    // localStorage.clear();
    zeigeTopSpieler()
}

const progression = [
    // 🌱 FREISCHALTUNG FARM 1 – Gemüsegarten
// 🌱 FARM 1 – Gemüsegarten
{ fortschritt: 0, feld: "Gemüsegarten freischalten", beschreibung: "Du hast den Gemüsegarten freigeschaltet!", name: "Gemüsegarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: 6 },
{ fortschritt: 1, feld: "Gemüsegarten", beschreibung: "Karotten wachsen schnell und knackig.", name: "Karotte", dauer: 0.25, xp: 1, kaufpreis: 1, verkaufspreis: 3, ansehen: 0, freigeschaltet: true, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 3, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 2, anzahlfelder: null },
{ fortschritt: 2, feld: "Gemüsegarten", beschreibung: "Frischer Salat ist beliebt.", name: "Salat", dauer: 0.3, xp: 1, kaufpreis: 2, verkaufspreis: 4, ansehen: 0, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 4, anzahlfelder: null },
{ fortschritt: 3, feld: "Gemüsegarten", beschreibung: "Tomaten reifen saftig und rot.", name: "Tomate", dauer: 0.35, xp: 1, kaufpreis: 2, verkaufspreis: 5, ansehen: 0, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 6, anzahlfelder: null },
{ fortschritt: 4, feld: "Bonus", beschreibung: "Du erhältst 3 Ansehen für deine Erfolge im Garten!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 3, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 8, anzahlfelder: null },
{ fortschritt: 5, feld: "Gemüsegarten", beschreibung: "Gurken wachsen schnell und erfrischend.", name: "Gurke", dauer: 0.4, xp: 1, kaufpreis: 3, verkaufspreis: 6, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 10, anzahlfelder: null },
{ fortschritt: 6, feld: "Gemüsegarten", beschreibung: "Zwiebeln sind würzig und nützlich.", name: "Zwiebel", dauer: 0.45, xp: 1, kaufpreis: 3, verkaufspreis: 6, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 12, anzahlfelder: null },
{ fortschritt: 7, feld: "Gemüsegarten", beschreibung: "Radieschen sind knackig und beliebt.", name: "Radieschen", dauer: 0.5, xp: 1, kaufpreis: 3, verkaufspreis: 7, ansehen: 0, freigeschaltet: false, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 14, anzahlfelder: null },
{ fortschritt: 8, feld: "Bonus", beschreibung: "Du erhältst 3 Wasser für deine Pflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 3, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 16, anzahlfelder: null },
{ fortschritt: 9, feld: "Gemüsegarten", beschreibung: "Kürbisse sind groß und wertvoll.", name: "Kürbis", dauer: 0.6, xp: 1, kaufpreis: 4, verkaufspreis: 8, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 18, anzahlfelder: null },
{ fortschritt: 10, feld: "Gemüsegarten", beschreibung: "Paprika leuchten in bunten Farben.", name: "Paprika", dauer: 0.65, xp: 1, kaufpreis: 4, verkaufspreis: 9, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 20, anzahlfelder: null },
{ fortschritt: 11, feld: "Gemüsegarten", beschreibung: "Brokkoli ist gesund und geschätzt.", name: "Brokkoli", dauer: 0.7, xp: 1, kaufpreis: 5, verkaufspreis: 10, ansehen: 0, freigeschaltet: false, wasserverbrauch: 3, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 22, anzahlfelder: null },

// 🌱 FARM 2 – Obstgarten
{ fortschritt: 12, feld: "Obstgarten freischalten", beschreibung: "Du hast den Obstgarten freigeschaltet!", name: "Obstgarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 22, anzahlfelder: 8 },
{ fortschritt: 13, feld: "Obstgarten", beschreibung: "Apfelbaum – zuverlässig und beliebt.", name: "Apfelbaum", dauer: 0.7, xp: 1, kaufpreis: 3, verkaufspreis: 5, ansehen: 1, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 24, anzahlfelder: null },
{ fortschritt: 14, feld: "Obstgarten", beschreibung: "Birnbaum – süß und leicht.", name: "Birnbaum", dauer: 0.75, xp: 1, kaufpreis: 3, verkaufspreis: 5, ansehen: 1, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 26, anzahlfelder: null },
{ fortschritt: 15, feld: "Obstgarten", beschreibung: "Kirschbaum – saftig und gefragt.", name: "Kirschbaum", dauer: 0.8, xp: 2, kaufpreis: 4, verkaufspreis: 6, ansehen: 1, wasserverbrauch: 2, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 28, anzahlfelder: null },
{ fortschritt: 16, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deine Obstbäume!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 5, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 32, anzahlfelder: null },
{ fortschritt: 17, feld: "Obstgarten", beschreibung: "Pfirsichbaum – süß und dekorativ.", name: "Pfirsichbaum", dauer: 0.85, xp: 2, kaufpreis: 4, verkaufspreis: 6, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 34, anzahlfelder: null },
{ fortschritt: 18, feld: "Obstgarten", beschreibung: "Zitronenbaum – erfrischend und gefragt.", name: "Zitronenbaum", dauer: 0.9, xp: 2, kaufpreis: 4, verkaufspreis: 7, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 36, anzahlfelder: null },
{ fortschritt: 19, feld: "Obstgarten", beschreibung: "Olivenbaum – pflegeleicht, aber wertvoll.", name: "Olivenbaum", dauer: 0.95, xp: 2, kaufpreis: 5, verkaufspreis: 8, ansehen: 2, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 38, anzahlfelder: null },
{ fortschritt: 20, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine Früchte!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 42, anzahlfelder: null },
{ fortschritt: 21, feld: "Obstgarten", beschreibung: "Granatapfelbaum – selten und wertvoll.", name: "Granatapfelbaum", dauer: 1.0, xp: 2, kaufpreis: 6, verkaufspreis: 9, ansehen: 2, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 45, anzahlfelder: null },

// 🌿 FARM 3 – Kräutergarten
{ fortschritt: 22, feld: "Kräutergarten freischalten", beschreibung: "Du hast den Kräutergarten freigeschaltet!", name: "Kräutergarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 45, anzahlfelder: 8 },
{ fortschritt: 23, feld: "Kräutergarten", beschreibung: "Basilikum – aromatisch und beliebt.", name: "Basilikum", dauer: 1.05, xp: 2, kaufpreis: 4, verkaufspreis: 7, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 48, anzahlfelder: null },
{ fortschritt: 24, feld: "Kräutergarten", beschreibung: "Rosmarin – würzig und langlebig.", name: "Rosmarin", dauer: 1.1, xp: 2, kaufpreis: 4, verkaufspreis: 7, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 51, anzahlfelder: null },
{ fortschritt: 25, feld: "Kräutergarten", beschreibung: "Thymian – aromatisch und pflegeleicht.", name: "Thymian", dauer: 1.15, xp: 2, kaufpreis: 4, verkaufspreis: 8, ansehen: 2, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 54, anzahlfelder: null },
{ fortschritt: 26, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deine Kräuter!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 5, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 58, anzahlfelder: null },
{ fortschritt: 27, feld: "Kräutergarten", beschreibung: "Lavendel – beruhigend und dekorativ.", name: "Lavendel", dauer: 1.2, xp: 2, kaufpreis: 5, verkaufspreis: 8, ansehen: 3, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 61, anzahlfelder: null },
{ fortschritt: 28, feld: "Kräutergarten", beschreibung: "Salbei – gesund und beliebt.", name: "Salbei", dauer: 1.25, xp: 2, kaufpreis: 5, verkaufspreis: 9, ansehen: 3, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 64, anzahlfelder: null },
{ fortschritt: 29, feld: "Kräutergarten", beschreibung: "Minze – erfrischend und gefragt.", name: "Minze", dauer: 1.3, xp: 2, kaufpreis: 5, verkaufspreis: 9, ansehen: 3, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 67, anzahlfelder: null },
{ fortschritt: 30, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine Kräuter!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 72, anzahlfelder: null },

    // 🌾 FARM 4 – Getreidefeld
{ fortschritt: 31, feld: "Getreidefeld freischalten", beschreibung: "Du hast das Getreidefeld freigeschaltet!", name: "Getreidefeld", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 72, anzahlfelder: 8 },
{ fortschritt: 32, feld: "Getreidefeld", beschreibung: "Weizen – Basis vieler Lebensmittel.", name: "Weizen", dauer: 1.4, xp: 2, kaufpreis: 3, verkaufspreis: 6, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 75, anzahlfelder: null },
{ fortschritt: 33, feld: "Getreidefeld", beschreibung: "Gerste – robust und vielseitig.", name: "Gerste", dauer: 1.45, xp: 2, kaufpreis: 3, verkaufspreis: 6, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 78, anzahlfelder: null },
{ fortschritt: 34, feld: "Getreidefeld", beschreibung: "Hafer – nahrhaft und beliebt.", name: "Hafer", dauer: 1.5, xp: 2, kaufpreis: 4, verkaufspreis: 7, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 81, anzahlfelder: null },
{ fortschritt: 35, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für dein Getreidefeld!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 5, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 86, anzahlfelder: null },
{ fortschritt: 36, feld: "Getreidefeld", beschreibung: "Roggen – traditionelles Brotgetreide.", name: "Roggen", dauer: 1.55, xp: 2, kaufpreis: 4, verkaufspreis: 7, ansehen: 1, wasserverbrauch: 3, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 89, anzahlfelder: null },
{ fortschritt: 37, feld: "Getreidefeld", beschreibung: "Mais – vielseitig und ertragreich.", name: "Mais", dauer: 1.6, xp: 2, kaufpreis: 5, verkaufspreis: 8, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 92, anzahlfelder: null },
{ fortschritt: 38, feld: "Getreidefeld", beschreibung: "Reis – benötigt viel Wasser.", name: "Reis", dauer: 1.65, xp: 2, kaufpreis: 5, verkaufspreis: 9, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 95, anzahlfelder: null },
{ fortschritt: 39, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für dein Getreide!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 100, anzahlfelder: null },
{ fortschritt: 40, feld: "Getreidefeld", beschreibung: "Hirse – klein, aber nahrhaft.", name: "Hirse", dauer: 1.7, xp: 2, kaufpreis: 5, verkaufspreis: 9, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 105, anzahlfelder: null },

// 🌸 FARM 5 – Blumenfeld
{ fortschritt: 41, feld: "Blumenfeld freischalten", beschreibung: "Du hast das Blumenfeld freigeschaltet!", name: "Blumenfeld", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 105, anzahlfelder: 8 },
{ fortschritt: 42, feld: "Blumenfeld", beschreibung: "Sonnenblume – schön und gefragt.", name: "Sonnenblume", dauer: 1.8, xp: 2, kaufpreis: 5, verkaufspreis: 10, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 110, anzahlfelder: null },
{ fortschritt: 43, feld: "Blumenfeld", beschreibung: "Tulpe – farbenfroh und beliebt.", name: "Tulpe", dauer: 1.85, xp: 2, kaufpreis: 5, verkaufspreis: 11, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 115, anzahlfelder: null },
{ fortschritt: 44, feld: "Blumenfeld", beschreibung: "Rose – dekorativ und wertvoll.", name: "Rose", dauer: 1.9, xp: 2, kaufpreis: 6, verkaufspreis: 12, ansehen: 1, wasserverbrauch: 4, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 120, anzahlfelder: null },
{ fortschritt: 45, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deine Blumen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 5, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 125, anzahlfelder: null },
{ fortschritt: 46, feld: "Blumenfeld", beschreibung: "Orchidee – exotisch und schön.", name: "Orchidee", dauer: 1.95, xp: 2, kaufpreis: 6, verkaufspreis: 13, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 130, anzahlfelder: null },
{ fortschritt: 47, feld: "Blumenfeld", beschreibung: "Jasmin – duftend und beliebt.", name: "Jasmin", dauer: 2.0, xp: 2, kaufpreis: 6, verkaufspreis: 14, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 135, anzahlfelder: null },
{ fortschritt: 48, feld: "Blumenfeld", beschreibung: "Lilie – elegant und wertvoll.", name: "Lilie", dauer: 2.05, xp: 2, kaufpreis: 7, verkaufspreis: 15, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 140, anzahlfelder: null },
{ fortschritt: 49, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine Blumen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 145, anzahlfelder: null },
{ fortschritt: 50, feld: "Blumenfeld", beschreibung: "Pfingstrose – prächtig und begehrt.", name: "Pfingstrose", dauer: 2.1, xp: 2, kaufpreis: 7, verkaufspreis: 16, ansehen: 2, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 150, anzahlfelder: null },

    // 🍇 FARM 6 – Weingut
{ fortschritt: 51, feld: "Weingut freischalten", beschreibung: "Du hast das Weingut freigeschaltet!", name: "Weingut", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 155, anzahlfelder: 10 },
{ fortschritt: 52, feld: "Weingut", beschreibung: "Trauben – Basis für Wein.", name: "Trauben", dauer: 2.2, xp: 3, kaufpreis: 6, verkaufspreis: 12, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 160, anzahlfelder: null },
{ fortschritt: 53, feld: "Weingut", beschreibung: "Himbeeren – süß und gefragt.", name: "Himbeeren", dauer: 2.25, xp: 3, kaufpreis: 6, verkaufspreis: 13, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 165, anzahlfelder: null },
{ fortschritt: 54, feld: "Weingut", beschreibung: "Brombeeren – aromatisch und wertvoll.", name: "Brombeeren", dauer: 2.3, xp: 3, kaufpreis: 7, verkaufspreis: 14, ansehen: 2, wasserverbrauch: 5, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 170, anzahlfelder: null },
{ fortschritt: 55, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deine Früchte!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 5, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 175, anzahlfelder: null },
{ fortschritt: 56, feld: "Weingut", beschreibung: "Heidelbeeren – klein, aber wertvoll.", name: "Heidelbeeren", dauer: 2.35, xp: 3, kaufpreis: 7, verkaufspreis: 15, ansehen: 2, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 180, anzahlfelder: null },
{ fortschritt: 57, feld: "Weingut", beschreibung: "Erdbeeren – beliebt und süß.", name: "Erdbeeren", dauer: 2.4, xp: 3, kaufpreis: 7, verkaufspreis: 16, ansehen: 2, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 185, anzahlfelder: null },
{ fortschritt: 58, feld: "Weingut", beschreibung: "Schwarze Johannisbeeren – selten und wertvoll.", name: "Schwarze Johannisbeeren", dauer: 2.45, xp: 3, kaufpreis: 8, verkaufspreis: 17, ansehen: 3, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 190, anzahlfelder: null },
{ fortschritt: 59, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für dein Weingut!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 195, anzahlfelder: null },
{ fortschritt: 60, feld: "Weingut", beschreibung: "Preiselbeeren – wertvoll und rar.", name: "Preiselbeeren", dauer: 2.5, xp: 3, kaufpreis: 8, verkaufspreis: 18, ansehen: 3, wasserverbrauch: 7, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 200, anzahlfelder: null },

    // ☘️ FARM 7 – Gewächshaus
{ fortschritt: 61, feld: "Gewächshaus freischalten", beschreibung: "Du hast das Gewächshaus freigeschaltet!", name: "Gewächshaus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 205, anzahlfelder: 10 },
{ fortschritt: 62, feld: "Gewächshaus", beschreibung: "Aloe Vera – pflegeleicht und wertvoll.", name: "Aloe Vera", dauer: 2.6, xp: 3, kaufpreis: 9, verkaufspreis: 18, ansehen: 3, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 210, anzahlfelder: null },
{ fortschritt: 63, feld: "Gewächshaus", beschreibung: "Vanille – selten und aromatisch.", name: "Vanille", dauer: 2.65, xp: 3, kaufpreis: 9, verkaufspreis: 19, ansehen: 3, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 215, anzahlfelder: null },
{ fortschritt: 64, feld: "Gewächshaus", beschreibung: "Ingwer – würzig und gefragt.", name: "Ingwer", dauer: 2.7, xp: 3, kaufpreis: 10, verkaufspreis: 20, ansehen: 3, wasserverbrauch: 6, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 220, anzahlfelder: null },
{ fortschritt: 65, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für dein Gewächshaus!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 5, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 225, anzahlfelder: null },
{ fortschritt: 66, feld: "Gewächshaus", beschreibung: "Kurkuma – aromatisch und wertvoll.", name: "Kurkuma", dauer: 2.75, xp: 3, kaufpreis: 10, verkaufspreis: 21, ansehen: 4, wasserverbrauch: 7, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 230, anzahlfelder: null },
{ fortschritt: 67, feld: "Gewächshaus", beschreibung: "Chili – scharf und beliebt.", name: "Chili", dauer: 2.8, xp: 3, kaufpreis: 10, verkaufspreis: 22, ansehen: 4, wasserverbrauch: 7, energieverbrauch: 1, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 235, anzahlfelder: null },
{ fortschritt: 68, feld: "Gewächshaus", beschreibung: "Pfefferpflanze – exotisch und wertvoll.", name: "Pfefferpflanze", dauer: 2.85, xp: 3, kaufpreis: 11, verkaufspreis: 23, ansehen: 4, wasserverbrauch: 7, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 240, anzahlfelder: null },
{ fortschritt: 69, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für dein Gewächshaus!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 245, anzahlfelder: null },
{ fortschritt: 70, feld: "Gewächshaus", beschreibung: "Ginseng – selten und wertvoll.", name: "Ginseng", dauer: 2.9, xp: 3, kaufpreis: 12, verkaufspreis: 24, ansehen: 5, wasserverbrauch: 8, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 250, anzahlfelder: null },

// 🍄 FARM 8 – Pilzgarten
{ fortschritt: 71, feld: "Pilzgarten freischalten", beschreibung: "Du hast den Pilzgarten freigeschaltet!", name: "Pilzgarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 255, anzahlfelder: 10 },
{ fortschritt: 72, feld: "Pilzgarten", beschreibung: "Champignon – klassisch und gefragt.", name: "Champignon", dauer: 3.0, xp: 3, kaufpreis: 12, verkaufspreis: 25, ansehen: 5, wasserverbrauch: 6, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 260, anzahlfelder: null },
{ fortschritt: 73, feld: "Pilzgarten", beschreibung: "Shiitake – delikat und wertvoll.", name: "Shiitake", dauer: 3.05, xp: 3, kaufpreis: 12, verkaufspreis: 26, ansehen: 5, wasserverbrauch: 6, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 265, anzahlfelder: null },
{ fortschritt: 74, feld: "Pilzgarten", beschreibung: "Austernpilz – saftig und gefragt.", name: "Austernpilz", dauer: 3.1, xp: 3, kaufpreis: 13, verkaufspreis: 27, ansehen: 5, wasserverbrauch: 7, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 270, anzahlfelder: null },
{ fortschritt: 75, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deine Pilze!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 5, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 275, anzahlfelder: null },
{ fortschritt: 76, feld: "Pilzgarten", beschreibung: "Trüffel – selten und kostbar.", name: "Trüffel", dauer: 3.15, xp: 3, kaufpreis: 13, verkaufspreis: 28, ansehen: 6, wasserverbrauch: 7, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 280, anzahlfelder: null },
{ fortschritt: 77, feld: "Pilzgarten", beschreibung: "Morchel – delikat und selten.", name: "Morchel", dauer: 3.2, xp: 3, kaufpreis: 14, verkaufspreis: 29, ansehen: 6, wasserverbrauch: 8, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 285, anzahlfelder: null },
{ fortschritt: 78, feld: "Pilzgarten", beschreibung: "Löwenmähnenpilz – dekorativ und wertvoll.", name: "Löwenmähnenpilz", dauer: 3.25, xp: 3, kaufpreis: 14, verkaufspreis: 30, ansehen: 6, wasserverbrauch: 8, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 290, anzahlfelder: null },
{ fortschritt: 79, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine Pilze!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 295, anzahlfelder: null },
{ fortschritt: 80, feld: "Pilzgarten", beschreibung: "Steinpilz – edel und gefragt.", name: "Steinpilz", dauer: 3.3, xp: 3, kaufpreis: 15, verkaufspreis: 31, ansehen: 7, wasserverbrauch: 9, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 300, anzahlfelder: null },

    // 🌴 FARM 9 – Tropenfarm
{ fortschritt: 81, feld: "Tropenfarm freischalten", beschreibung: "Du hast die Tropenfarm freigeschaltet!", name: "Tropenfarm", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 305, anzahlfelder: 12 },
{ fortschritt: 82, feld: "Tropenfarm", beschreibung: "Ananas – süß und beliebt.", name: "Ananas", dauer: 3.5, xp: 4, kaufpreis: 15, verkaufspreis: 32, ansehen: 7, wasserverbrauch: 9, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 310, anzahlfelder: null },
{ fortschritt: 83, feld: "Tropenfarm", beschreibung: "Banane – tropisch und energiereich.", name: "Banane", dauer: 3.55, xp: 4, kaufpreis: 15, verkaufspreis: 33, ansehen: 7, wasserverbrauch: 9, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 315, anzahlfelder: null },
{ fortschritt: 84, feld: "Tropenfarm", beschreibung: "Mango – exotisch und gefragt.", name: "Mango", dauer: 3.6, xp: 4, kaufpreis: 16, verkaufspreis: 34, ansehen: 8, wasserverbrauch: 10, energieverbrauch: 2, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 320, anzahlfelder: null },
{ fortschritt: 85, feld: "Bonus", beschreibung: "Du erhältst 5 Wasser für deine Tropenpflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 5, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 325, anzahlfelder: null },
{ fortschritt: 86, feld: "Tropenfarm", beschreibung: "Kokosnuss – tropisch und nahrhaft.", name: "Kokosnuss", dauer: 3.65, xp: 4, kaufpreis: 16, verkaufspreis: 35, ansehen: 8, wasserverbrauch: 10, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 330, anzahlfelder: null },
{ fortschritt: 87, feld: "Tropenfarm", beschreibung: "Papaya – saftig und beliebt.", name: "Papaya", dauer: 3.7, xp: 4, kaufpreis: 17, verkaufspreis: 36, ansehen: 9, wasserverbrauch: 11, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 335, anzahlfelder: null },
{ fortschritt: 88, feld: "Tropenfarm", beschreibung: "Guave – aromatisch und exotisch.", name: "Guave", dauer: 3.75, xp: 4, kaufpreis: 17, verkaufspreis: 37, ansehen: 9, wasserverbrauch: 11, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 340, anzahlfelder: null },
{ fortschritt: 89, feld: "Bonus", beschreibung: "Du erhältst 5 Ansehen für deine Tropenpflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 5, wasser: 0, energie: 0, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 345, anzahlfelder: null },
{ fortschritt: 90, feld: "Tropenfarm", beschreibung: "Passionsfrucht – selten und aromatisch.", name: "Passionsfrucht", dauer: 3.8, xp: 4, kaufpreis: 18, verkaufspreis: 38, ansehen: 10, wasserverbrauch: 12, energieverbrauch: 3, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 350, anzahlfelder: null },

// 💎 FARM 10 – Luxusplantage
{ fortschritt: 91, feld: "Luxusplantage freischalten", beschreibung: "Du hast die Luxusplantage freigeschaltet!", name: "Luxusplantage", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: true, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 355, anzahlfelder: 12 },
{ fortschritt: 92, feld: "Luxusplantage", beschreibung: "Safran – teuer und begehrt.", name: "Safran", dauer: 4.0, xp: 5, kaufpreis: 20, verkaufspreis: 40, ansehen: 10, wasserverbrauch: 12, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 360, anzahlfelder: null },
{ fortschritt: 93, feld: "Luxusplantage", beschreibung: "Kakao – wertvoll und aromatisch.", name: "Kakao", dauer: 4.05, xp: 5, kaufpreis: 20, verkaufspreis: 41, ansehen: 10, wasserverbrauch: 12, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 365, anzahlfelder: null },
{ fortschritt: 94, feld: "Luxusplantage", beschreibung: "Kaffee – beliebt und wertvoll.", name: "Kaffee", dauer: 4.1, xp: 5, kaufpreis: 21, verkaufspreis: 42, ansehen: 11, wasserverbrauch: 13, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 370, anzahlfelder: null },
{ fortschritt: 95, feld: "Bonus", beschreibung: "Du erhältst 5 Energie für deine Luxuspflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 5, gold: 0, bonus: true, fertiggewachsen: null, exp_fortschritt: 375, anzahlfelder: null },
{ fortschritt: 96, feld: "Luxusplantage", beschreibung: "Tee – exotisch und gefragt.", name: "Tee", dauer: 4.15, xp: 5, kaufpreis: 21, verkaufspreis: 43, ansehen: 11, wasserverbrauch: 13, energieverbrauch: 4, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 380, anzahlfelder: null },
{ fortschritt: 97, feld: "Luxusplantage", beschreibung: "Baumwolle – vielseitig und gefragt.", name: "Baumwolle", dauer: 4.2, xp: 5, kaufpreis: 22, verkaufspreis: 44, ansehen: 12, wasserverbrauch: 14, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 385, anzahlfelder: null },
{ fortschritt: 98, feld: "Luxusplantage", beschreibung: "Hanf – wertvoll und vielseitig.", name: "Hanf", dauer: 4.25, xp: 5, kaufpreis: 22, verkaufspreis: 45, ansehen: 12, wasserverbrauch: 14, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 390, anzahlfelder: null },
{ fortschritt: 99, feld: "Bonus", beschreibung: "Du erhältst 5 Gold für deine Luxuspflanzen!", name: "Bonus", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: 0, wasser: 0, energie: 0, gold: 5, bonus: true, fertiggewachsen: null, exp_fortschritt: 395, anzahlfelder: null },
{ fortschritt: 100, feld: "Luxusplantage", beschreibung: "Zimt – aromatisch und wertvoll.", name: "Zimt", dauer: 4.3, xp: 5, kaufpreis: 23, verkaufspreis: 46, ansehen: 13, wasserverbrauch: 15, energieverbrauch: 5, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 400, anzahlfelder: null },

];



const feldfreischaltungTutorials = [
];


const gebäudeProdukte = {
        "Saft- und Smoothiebar": [
    { "fortschritt": 600, "feld": "Saft- und Smoothiebar freischalten", "beschreibung": "Die Saft- und Smoothiebar öffnet ihre Türen für frische Getränke.", "name": "Saft- und Smoothiebar", "dauer": null, "xp": null, "benutzer_exp": null, "kaufpreis": null, "verkaufspreis": null, "ansehen": null, "freigeschaltet": false, "wasserverbrauch": null, "energieverbrauch": null, "magieverbrauch": null, "gold": null, "wasser": null, "energie": null, "magie": null, "samen": null, "geerntet": null, "bonus": false, "fertiggewachsen": null, "anzahlfelder": 3, "level": 11 },

    { "fortschritt": 601, "feld": "Saft- und Smoothiebar", "beschreibung": "Apfel-Karotten-Saft für frische Energie.", "name": "Apfel-Karotten-Saft", "dauer": 12, "xp": 10, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 25, "ansehen": 1, "freigeschaltet": false, "wasserverbrauch": 2, "energieverbrauch": 5, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Apfel": 2, "Karotte": 1 } },

    { "fortschritt": 602, "feld": "Saft- und Smoothiebar", "beschreibung": "Kirsch-Basilikum-Smoothie für aromatischen Genuss.", "name": "Kirsch-Basilikum-Smoothie", "dauer": 13, "xp": 11, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 28, "ansehen": 1, "freigeschaltet": false, "wasserverbrauch": 2, "energieverbrauch": 6, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Kirsche": 2, "Basilikum": 1 } }
],

"Schokoladenatelier": [
    { "fortschritt": 610, "feld": "Schokoladenatelier freischalten", "beschreibung": "Hier entstehen feine Schokoladenkreationen aus deinen Früchten.", "name": "Schokoladenatelier", "dauer": null, "xp": null, "benutzer_exp": null, "kaufpreis": null, "verkaufspreis": null, "ansehen": null, "freigeschaltet": false, "wasserverbrauch": null, "energieverbrauch": null, "magieverbrauch": null, "gold": null, "wasser": null, "energie": null, "magie": null, "samen": null, "geerntet": null, "bonus": false, "fertiggewachsen": null, "anzahlfelder": 3, "level": 12 },

    { "fortschritt": 611, "feld": "Schokoladenatelier", "beschreibung": "Brombeer-Schokolade – süß und fruchtig.", "name": "Brombeer-Schokolade", "dauer": 18, "xp": 12, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 40, "ansehen": 2, "freigeschaltet": false, "wasserverbrauch": 1, "energieverbrauch": 8, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Brombeere": 2, "Kakao": 1 } },

    { "fortschritt": 612, "feld": "Schokoladenatelier", "beschreibung": "Erdbeer-Vanille-Trüffel für Genießer.", "name": "Erdbeer-Vanille-Trüffel", "dauer": 20, "xp": 14, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 45, "ansehen": 3, "freigeschaltet": false, "wasserverbrauch": 1, "energieverbrauch": 9, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Erdbeere": 2, "Vanille": 1 } }
],

"Fermentationsmühle": [
    { "fortschritt": 620, "feld": "Fermentationsmühle freischalten", "beschreibung": "Produziere eingelegte und fermentierte Lebensmittel.", "name": "Fermentationsmühle", "dauer": null, "xp": null, "benutzer_exp": null, "kaufpreis": null, "verkaufspreis": null, "ansehen": null, "freigeschaltet": false, "wasserverbrauch": null, "energieverbrauch": null, "magieverbrauch": null, "gold": null, "wasser": null, "energie": null, "magie": null, "samen": null, "geerntet": null, "bonus": false, "fertiggewachsen": null, "anzahlfelder": 3, "level": 12 },

    { "fortschritt": 621, "feld": "Fermentationsmühle", "beschreibung": "Sauerkraut – aus Kohl und Gewürzen.", "name": "Sauerkraut", "dauer": 24, "xp": 15, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 35, "ansehen": 2, "freigeschaltet": false, "wasserverbrauch": 3, "energieverbrauch": 6, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Kohl": 2, "Salbei": 1 } },

    { "fortschritt": 622, "feld": "Fermentationsmühle", "beschreibung": "Kimchi – exotisch und würzig.", "name": "Kimchi", "dauer": 26, "xp": 16, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 38, "ansehen": 3, "freigeschaltet": false, "wasserverbrauch": 3, "energieverbrauch": 7, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Kohl": 1, "Karotte": 1, "Chili": 1 } }
],

"Gewürz- und Teemischerei": [
    { "fortschritt": 630, "feld": "Gewürz- und Teemischerei freischalten", "beschreibung": "Hier entstehen aromatische Tees und Gewürzmischungen.", "name": "Gewürz- und Teemischerei", "dauer": null, "xp": null, "benutzer_exp": null, "kaufpreis": null, "verkaufspreis": null, "ansehen": null, "freigeschaltet": false, "wasserverbrauch": null, "energieverbrauch": null, "magieverbrauch": null, "gold": null, "wasser": null, "energie": null, "magie": null, "samen": null, "geerntet": null, "bonus": false, "fertiggewachsen": null, "anzahlfelder": 3, "level": 13 },

    { "fortschritt": 631, "feld": "Gewürz- und Teemischerei", "beschreibung": "Basilikum-Lavendel-Tee für Entspannung.", "name": "Basilikum-Lavendel-Tee", "dauer": 14, "xp": 12, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 30, "ansehen": 2, "freigeschaltet": false, "wasserverbrauch": 2, "energieverbrauch": 3, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Basilikum": 1, "Lavendel": 1 } },

    { "fortschritt": 632, "feld": "Gewürz- und Teemischerei", "beschreibung": "Minze-Zitronen-Mischung für frische Getränke.", "name": "Minze-Zitronen-Mischung", "dauer": 15, "xp": 13, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 32, "ansehen": 2, "freigeschaltet": false, "wasserverbrauch": 2, "energieverbrauch": 3, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Minze": 1, "Zitrone": 1 } }
],

"Ölmühle": [
    { "fortschritt": 640, "feld": "Ölmühle freischalten", "beschreibung": "Hier werden Öle aus Nüssen und Samen hergestellt.", "name": "Ölmühle", "dauer": null, "xp": null, "benutzer_exp": null, "kaufpreis": null, "verkaufspreis": null, "ansehen": null, "freigeschaltet": false, "wasserverbrauch": null, "energieverbrauch": null, "magieverbrauch": null, "gold": null, "wasser": null, "energie": null, "magie": null, "samen": null, "geerntet": null, "bonus": false, "fertiggewachsen": null, "anzahlfelder": 3, "level": 13 },

    { "fortschritt": 641, "feld": "Ölmühle", "beschreibung": "Kürbiskernöl – nahrhaft und aromatisch.", "name": "Kürbiskernöl", "dauer": 20, "xp": 15, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 35, "ansehen": 2, "freigeschaltet": false, "wasserverbrauch": 1, "energieverbrauch": 6, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Kürbis": 2 } },

    { "fortschritt": 642, "feld": "Ölmühle", "beschreibung": "Olivenöl – mild und vielseitig verwendbar.", "name": "Olivenöl", "dauer": 22, "xp": 16, "benutzer_exp": 0, "kaufpreis": null, "verkaufspreis": 38, "ansehen": 3, "freigeschaltet": false, "wasserverbrauch": 1, "energieverbrauch": 7, "magieverbrauch": 0, "gold": 0, "wasser": 0, "energie": 0, "magie": 0, "samen": 0, "geerntet": 0, "bonus": false, "fertiggewachsen": null, "anzahlfelder": null, "level": null, "pflanzen": { "Olive": 2 } }
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





