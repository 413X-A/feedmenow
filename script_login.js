window.onload = function () {
    // localStorage.clear();
    zeigeTopSpieler()
}

const progression = [
// 🌱 FARM 1 – Gemüsegarten
{ fortschritt: 0, feld: "Gemüsegarten freischalten", beschreibung: "Du hast den Gemüsegarten freigeschaltet!", name: "Gemüsegarten", dauer: null, xp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: 6 },
{ fortschritt: 1, feld: "Gemüsegarten", beschreibung: "Karotten wachsen schnell und knackig.", name: "Karotte", dauer: 0.25, xp: 1, kaufpreis: 1, verkaufspreis: 3, ansehen: 0, freigeschaltet: false, wasserverbrauch: 1, energieverbrauch: 0, gold: 0, wasser: 0, energie: 0, samen: 3, geerntet: 0, bonus: false, fertiggewachsen: null, exp_fortschritt: 0, anzahlfelder: null },
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


const magieFelder = [
        // 🌰 Traumgarten
    { fortschritt: 500, feld: "Traumgarten freischalten", beschreibung: "Du hast den Traumgarten freigeschaltet! Fantastische Pflanzen voller Magie.", name: "Traumgarten", dauer: null, xp: null, benutzer_exp: 5, kaufpreis: null, verkaufspreis: null, ansehen: 5, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 15 },

    { fortschritt: 501, feld: "Traumgarten", beschreibung: "Mondblume leuchtet nachts.", name: "Mondblume", dauer: 12, xp: 14, benutzer_exp: 0, kaufpreis: 10, verkaufspreis: 30, ansehen: 0, freigeschaltet: false, wasserverbrauch: 8, energieverbrauch: 6, magieverbrauch: 4, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 502, feld: "Traumgarten", beschreibung: "Sonnenblatt speichert Energie.", name: "Sonnenblatt", dauer: 13, xp: 15, benutzer_exp: 0, kaufpreis: 11, verkaufspreis: 32, ansehen: 0, freigeschaltet: false, wasserverbrauch: 9, energieverbrauch: 7, magieverbrauch: 5, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 503, feld: "Traumgarten", beschreibung: "Dämmergras pulsiert magisch.", name: "Dämmergras", dauer: 14, xp: 16, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 34, ansehen: 0, freigeschaltet: false, wasserverbrauch: 10, energieverbrauch: 8, magieverbrauch: 6, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 504, feld: "Traumgarten", beschreibung: "Nebelblatt speichert Feuchtigkeit.", name: "Nebelblatt", dauer: 15, xp: 17, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 36, ansehen: 0, freigeschaltet: false, wasserverbrauch: 11, energieverbrauch: 9, magieverbrauch: 7, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 505, feld: "Traumgarten", beschreibung: "Sternenblatt leuchtet blau.", name: "Sternenblatt", dauer: 16, xp: 18, benutzer_exp: 0, kaufpreis: 14, verkaufspreis: 38, ansehen: 0, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 10, magieverbrauch: 8, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 506, feld: "Traumgarten", beschreibung: "Aurorablume reflektiert Licht.", name: "Aurorablume", dauer: 17, xp: 19, benutzer_exp: 0, kaufpreis: 15, verkaufspreis: 40, ansehen: 0, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 11, magieverbrauch: 9, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 507, feld: "Traumgarten", beschreibung: "Kristallgras glitzert stark.", name: "Kristallgras", dauer: 18, xp: 20, benutzer_exp: 0, kaufpreis: 16, verkaufspreis: 42, ansehen: 0, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 12, magieverbrauch: 10, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 508, feld: "Traumgarten", beschreibung: "Mondnebelblüte umhüllt die Umgebung.", name: "Mondnebelblüte", dauer: 19, xp: 21, benutzer_exp: 0, kaufpreis: 17, verkaufspreis: 44, ansehen: 0, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 13, magieverbrauch: 11, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 509, feld: "Traumgarten", beschreibung: "Sonnennebelblatt speichert Energie.", name: "Sonnennebelblatt", dauer: 20, xp: 22, benutzer_exp: 0, kaufpreis: 18, verkaufspreis: 46, ansehen: 0, freigeschaltet: false, wasserverbrauch: 16, energieverbrauch: 14, magieverbrauch: 12, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 510, feld: "Traumgarten", beschreibung: "Dämmerklee pulsiert im Rhythmus des Mondes.", name: "Dämmerklee", dauer: 21, xp: 23, benutzer_exp: 0, kaufpreis: 19, verkaufspreis: 48, ansehen: 0, freigeschaltet: false, wasserverbrauch: 17, energieverbrauch: 15, magieverbrauch: 13, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 511, feld: "Traumgarten", beschreibung: "Nebelmoos speichert Magie und Feuchtigkeit.", name: "Nebelmoos", dauer: 22, xp: 24, benutzer_exp: 0, kaufpreis: 20, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 16, magieverbrauch: 14, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 512, feld: "Traumgarten", beschreibung: "Sternenklee funkelt wie Sterne.", name: "Sternenklee", dauer: 23, xp: 25, benutzer_exp: 0, kaufpreis: 21, verkaufspreis: 52, ansehen: 0, freigeschaltet: false, wasserverbrauch: 19, energieverbrauch: 17, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 513, feld: "Traumgarten", beschreibung: "Glanzblatt speichert Licht und Energie.", name: "Glanzblatt", dauer: 24, xp: 26, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 54, ansehen: 0, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 18, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 514, feld: "Bonus", beschreibung: "Du erhältst 50 Magie für den Traumgarten!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 50, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, anzahlfelder: null, level: null },

        // 🌈 Regenbogenfeld
    { fortschritt: 515, feld: "Regenbogenfeld freischalten", beschreibung: "Du hast das Regenbogenfeld freigeschaltet! Farbenfrohe Pflanzen mit hoher Magie.", name: "Regenbogenfeld", dauer: null, xp: null, benutzer_exp: 10, kaufpreis: null, verkaufspreis: null, ansehen: 6, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 20 },

    { fortschritt: 516, feld: "Regenbogenfeld", beschreibung: "Aurorablume reflektiert alle Farben.", name: "Aurorablume", dauer: 15, xp: 18, benutzer_exp: 0, kaufpreis: 12, verkaufspreis: 36, ansehen: 0, freigeschaltet: false, wasserverbrauch: 12, energieverbrauch: 9, magieverbrauch: 7, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 517, feld: "Regenbogenfeld", beschreibung: "Prismablüte verstärkt die Magie der Umgebung.", name: "Prismablüte", dauer: 16, xp: 19, benutzer_exp: 0, kaufpreis: 13, verkaufspreis: 38, ansehen: 0, freigeschaltet: false, wasserverbrauch: 13, energieverbrauch: 10, magieverbrauch: 8, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 518, feld: "Regenbogenfeld", beschreibung: "Glanzgras funkelt in allen Lichtwinkeln.", name: "Glanzgras", dauer: 17, xp: 20, benutzer_exp: 0, kaufpreis: 14, verkaufspreis: 40, ansehen: 0, freigeschaltet: false, wasserverbrauch: 14, energieverbrauch: 11, magieverbrauch: 9, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 519, feld: "Regenbogenfeld", beschreibung: "Farbenzauberblatt speichert Lichtfarben.", name: "Farbenzauberblatt", dauer: 18, xp: 21, benutzer_exp: 0, kaufpreis: 15, verkaufspreis: 42, ansehen: 0, freigeschaltet: false, wasserverbrauch: 15, energieverbrauch: 12, magieverbrauch: 10, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 520, feld: "Regenbogenfeld", beschreibung: "Lichtklee bricht das Sonnenlicht.", name: "Lichtklee", dauer: 19, xp: 22, benutzer_exp: 0, kaufpreis: 16, verkaufspreis: 44, ansehen: 0, freigeschaltet: false, wasserverbrauch: 16, energieverbrauch: 13, magieverbrauch: 11, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 521, feld: "Regenbogenfeld", beschreibung: "Regenbogenblatt speichert Regenfarben.", name: "Regenbogenblatt", dauer: 20, xp: 23, benutzer_exp: 0, kaufpreis: 17, verkaufspreis: 46, ansehen: 0, freigeschaltet: false, wasserverbrauch: 17, energieverbrauch: 14, magieverbrauch: 12, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 522, feld: "Regenbogenfeld", beschreibung: "Sonnenstrahlblatt glänzt in allen Farben.", name: "Sonnenstrahlblatt", dauer: 21, xp: 24, benutzer_exp: 0, kaufpreis: 18, verkaufspreis: 48, ansehen: 0, freigeschaltet: false, wasserverbrauch: 18, energieverbrauch: 15, magieverbrauch: 13, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 523, feld: "Regenbogenfeld", beschreibung: "Magieklee pulsiert farbig.", name: "Magieklee", dauer: 22, xp: 25, benutzer_exp: 0, kaufpreis: 19, verkaufspreis: 50, ansehen: 0, freigeschaltet: false, wasserverbrauch: 19, energieverbrauch: 16, magieverbrauch: 14, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 524, feld: "Regenbogenfeld", beschreibung: "Farbenschimmergras leuchtet sanft.", name: "Farbenschimmergras", dauer: 23, xp: 26, benutzer_exp: 0, kaufpreis: 20, verkaufspreis: 52, ansehen: 0, freigeschaltet: false, wasserverbrauch: 20, energieverbrauch: 17, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 525, feld: "Regenbogenfeld", beschreibung: "Prismenblatt spiegelt alle Farben.", name: "Prismenblatt", dauer: 24, xp: 27, benutzer_exp: 0, kaufpreis: 21, verkaufspreis: 54, ansehen: 0, freigeschaltet: false, wasserverbrauch: 21, energieverbrauch: 18, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 526, feld: "Regenbogenfeld", beschreibung: "Buntblüte funkelt in der Sonne.", name: "Buntblüte", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: 22, verkaufspreis: 56, ansehen: 0, freigeschaltet: false, wasserverbrauch: 22, energieverbrauch: 19, magieverbrauch: 17, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 527, feld: "Regenbogenfeld", beschreibung: "Regenbogengras wirbelt Funken umher.", name: "Regenbogengras", dauer: 26, xp: 29, benutzer_exp: 0, kaufpreis: 23, verkaufspreis: 58, ansehen: 0, freigeschaltet: false, wasserverbrauch: 23, energieverbrauch: 20, magieverbrauch: 18, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 528, feld: "Regenbogenfeld", beschreibung: "Leuchtblatt speichert Lichtmagie.", name: "Leuchtblatt", dauer: 27, xp: 30, benutzer_exp: 0, kaufpreis: 24, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 24, energieverbrauch: 21, magieverbrauch: 19, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 529, feld: "Bonus", beschreibung: "Du erhältst 40 Wasser für das Regenbogenfeld!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 40, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, anzahlfelder: null, level: null },

        // 🌟 Sternenhain
    { fortschritt: 530, feld: "Sternenhain freischalten", beschreibung: "Du hast den Sternenhain freigeschaltet! Funkelnde Pflanzen unter dem Sternenhimmel.", name: "Sternenhain", dauer: null, xp: null, benutzer_exp: 15, kaufpreis: null, verkaufspreis: null, ansehen: 7, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: 6, level: 25 },

    { fortschritt: 531, feld: "Sternenhain", beschreibung: "Nachtleuchtkraut strahlt blaues Licht.", name: "Nachtleuchtkraut", dauer: 28, xp: 32, benutzer_exp: 0, kaufpreis: 25, verkaufspreis: 65, ansehen: 0, freigeschaltet: false, wasserverbrauch: 25, energieverbrauch: 20, magieverbrauch: 15, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 532, feld: "Sternenhain", beschreibung: "Sternenmoos speichert kosmische Energie.", name: "Sternenmoos", dauer: 29, xp: 33, benutzer_exp: 0, kaufpreis: 26, verkaufspreis: 67, ansehen: 0, freigeschaltet: false, wasserverbrauch: 26, energieverbrauch: 21, magieverbrauch: 16, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 533, feld: "Sternenhain", beschreibung: "Galaxienblüte rotiert langsam und strahlt Magie aus.", name: "Galaxienblüte", dauer: 30, xp: 34, benutzer_exp: 0, kaufpreis: 27, verkaufspreis: 69, ansehen: 0, freigeschaltet: false, wasserverbrauch: 27, energieverbrauch: 22, magieverbrauch: 17, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 534, feld: "Sternenhain", beschreibung: "Kosmosblatt glitzert wie kleine Sterne.", name: "Kosmosblatt", dauer: 31, xp: 35, benutzer_exp: 0, kaufpreis: 28, verkaufspreis: 71, ansehen: 0, freigeschaltet: false, wasserverbrauch: 28, energieverbrauch: 23, magieverbrauch: 18, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 535, feld: "Sternenhain", beschreibung: "Meteorblüte pulsiert rhythmisch.", name: "Meteorblüte", dauer: 32, xp: 36, benutzer_exp: 0, kaufpreis: 29, verkaufspreis: 73, ansehen: 0, freigeschaltet: false, wasserverbrauch: 29, energieverbrauch: 24, magieverbrauch: 19, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 536, feld: "Sternenhain", beschreibung: "Astrogras speichert Sternenenergie.", name: "Astrogras", dauer: 33, xp: 37, benutzer_exp: 0, kaufpreis: 30, verkaufspreis: 75, ansehen: 0, freigeschaltet: false, wasserverbrauch: 30, energieverbrauch: 25, magieverbrauch: 20, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 537, feld: "Sternenhain", beschreibung: "Kometenklee wirbelt funkelnde Staubkörner.", name: "Kometenklee", dauer: 34, xp: 38, benutzer_exp: 0, kaufpreis: 31, verkaufspreis: 77, ansehen: 0, freigeschaltet: false, wasserverbrauch: 31, energieverbrauch: 26, magieverbrauch: 21, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 538, feld: "Sternenhain", beschreibung: "Galaxienblatt leuchtet im Rhythmus der Sterne.", name: "Galaxienblatt", dauer: 35, xp: 39, benutzer_exp: 0, kaufpreis: 32, verkaufspreis: 79, ansehen: 0, freigeschaltet: false, wasserverbrauch: 32, energieverbrauch: 27, magieverbrauch: 22, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 539, feld: "Sternenhain", beschreibung: "Sternenzauberblüte pulsiert bunt.", name: "Sternenzauberblüte", dauer: 36, xp: 40, benutzer_exp: 0, kaufpreis: 33, verkaufspreis: 81, ansehen: 0, freigeschaltet: false, wasserverbrauch: 33, energieverbrauch: 28, magieverbrauch: 23, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 540, feld: "Sternenhain", beschreibung: "Kosmosklee speichert Lichtenergie.", name: "Kosmosklee", dauer: 37, xp: 41, benutzer_exp: 0, kaufpreis: 34, verkaufspreis: 83, ansehen: 0, freigeschaltet: false, wasserverbrauch: 34, energieverbrauch: 29, magieverbrauch: 24, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 541, feld: "Sternenhain", beschreibung: "Galaxienmoos leuchtet schwach violett.", name: "Galaxienmoos", dauer: 38, xp: 42, benutzer_exp: 0, kaufpreis: 35, verkaufspreis: 85, ansehen: 0, freigeschaltet: false, wasserverbrauch: 35, energieverbrauch: 30, magieverbrauch: 25, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 5, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null },
    { fortschritt: 542, feld: "Bonus", beschreibung: "Du erhältst 60 Energie für den Sternenhain!", name: "Bonus", dauer: null, xp: null, benutzer_exp: 0, kaufpreis: null, verkaufspreis: null, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 60, magie: 0, samen: 0, geerntet: 0, bonus: true, fertiggewachsen: null, anzahlfelder: null, level: null },

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
        feld: "Obstgarten",
        beschreibung_zeile1: "➡️ Freigeschaltet: Dein erster Obstgarten!",
        beschreibung_zeile2: "Apfelbäume, Birnen und Kirschen schmücken dein Land und duftet verführerisch.",
        beschreibung_zeile3: "Die Bienen summen zufrieden um deine Früchte herum.",
        freigeschaltet: false
    },
    {
        fortschritt: 22,
        feld: "Kräutergarten",
        beschreibung_zeile1: "➡️ Freigeschaltet: Kräuter für Küche und Gesundheit!",
        beschreibung_zeile2: "Basilikum, Petersilie und Thymian gedeihen in deinem liebevoll gepflegten Garten.",
        beschreibung_zeile3: "Ein Hauch von frischem Grün liegt in der Luft.",
        freigeschaltet: false
    },
    {
        fortschritt: 31,
        feld: "Getreidefeld",
        beschreibung_zeile1: "➡️ Freigeschaltet: Das Kornfeld wächst.",
        beschreibung_zeile2: "Weizen, Gerste und Hafer schaukeln im Wind und versprechen reiche Ernte.",
        beschreibung_zeile3: "Du spürst die Kraft der Natur in jedem Ährenhalm.",
        freigeschaltet: false
    },
    {
        fortschritt: 41,
        feld: "Blumenfeld",
        beschreibung_zeile1: "➡️ Freigeschaltet: Farbenfrohes Blumenfeld!",
        beschreibung_zeile2: "Rosen, Tulpen und Lilien bringen Leben und Duft auf dein Land.",
        beschreibung_zeile3: "Schmetterlinge tanzen durch die Blütenpracht.",
        freigeschaltet: false
    },
    {
        fortschritt: 51,
        feld: "Weingut",
        beschreibung_zeile1: "➡️ Freigeschaltet: Dein eigenes Weingut!",
        beschreibung_zeile2: "Weinreben ranken sich elegant und versprechen edlen Traubensaft.",
        beschreibung_zeile3: "Der Duft von reifen Trauben liegt in der Luft.",
        freigeschaltet: false
    },
    {
        fortschritt: 61,
        feld: "Gewächshaus",
        beschreibung_zeile1: "➡️ Freigeschaltet: Modernes Gewächshaus!",
        beschreibung_zeile2: "Hier wachsen Gurken, Tomaten und Zucchini besonders prächtig.",
        beschreibung_zeile3: "Die Pflanzen danken dir mit kräftigem Grün und reicher Ernte.",
        freigeschaltet: false
    },
    {
        fortschritt: 71,
        feld: "Pilzgarten",
        beschreibung_zeile1: "➡️ Freigeschaltet: Ein Garten voller Pilze!",
        beschreibung_zeile2: "Champignons, Shiitake und Austernpilze wachsen im feuchten Schatten.",
        beschreibung_zeile3: "Ein mystischer Duft liegt über deinem Pilzgarten.",
        freigeschaltet: false
    },
    {
        fortschritt: 81,
        feld: "Tropenfarm",
        beschreibung_zeile1: "➡️ Freigeschaltet: Exotische Tropenfarm!",
        beschreibung_zeile2: "Bananen, Ananas und Mango gedeihen unter tropischer Sonne.",
        beschreibung_zeile3: "Ein Hauch von Urlaub liegt in der Luft, mitten auf deinem Hof.",
        freigeschaltet: false
    },
    {
        fortschritt: 91,
        feld: "Luxusplantage",
        beschreibung_zeile1: "➡️ Freigeschaltet: Exklusive Luxusplantage!",
        beschreibung_zeile2: "Premium-Gurken, exotische Früchte und seltene Kräuter wachsen hier üppig.",
        beschreibung_zeile3: "Ein Paradies für Genießer und Sammler gleichermaßen.",
        freigeschaltet: false
    },


    // MAGIE
    {
        fortschritt: 500,
        feld: "Traumgarten",
        beschreibung_zeile1: "➡️ Freigeschaltet: Pflanzen zwischen den Sternen.",
        beschreibung_zeile2: "Silberblätter und Mondfrüchte gedeihen im sanften Licht der Sterne.",
        beschreibung_zeile3: "Ein Ort voller Ruhe, Magie und leuchtender Pflanzen.",
        freigeschaltet: false
    },
    {
        fortschritt: 515,
        feld: "Regenbogenfeld",
        beschreibung_zeile1: "➡️ Freigeschaltet: Starlotus unter Vollmond.",
        beschreibung_zeile2: "Seine leuchtenden Blüten ziehen Nachtfalter und Glühwürmchen an.",
        beschreibung_zeile3: "Ein magischer Farbzauber erfüllt das Feld.",
        freigeschaltet: false
    },
    {
        fortschritt: 530,
        feld: "Sternenhain",
        beschreibung_zeile1: "➡️ Freigeschaltet: Mondbeeren unter Sternenlicht.",
        beschreibung_zeile2: "Sie speichern das Licht der Sterne in ihren Früchten.",
        beschreibung_zeile3: "Ein Schatz für alle Alchemisten und Magiebegabten.",
        freigeschaltet: false
    }
];


const neueGebäudeRezepte = {
    "Fermentierkeller": [
        { fortschritt: 700, feld: "Fermentierkeller freischalten", beschreibung: "Im Fermentierkeller entstehen köstliche, haltbare Spezialitäten.", name: "Fermentierkeller", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 12 },

        { fortschritt: 701, feld: "Fermentierkeller", beschreibung: "Knackiges Sauerkraut, traditionell fermentiert.", name: "Sauerkraut", dauer: 20, xp: 25, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 65, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 8, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Kohl": 3, "Salz": 1 } },

        { fortschritt: 702, feld: "Fermentierkeller", beschreibung: "Erfrischender Kombucha-Tee mit Kräutern.", name: "Kombucha", dauer: 25, xp: 30, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 75, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Tee": 2, "Minze": 1, "Zuckerrohr": 1 } }
    ],

    "Marmeladenküche": [
        { fortschritt: 710, feld: "Marmeladenküche freischalten", beschreibung: "Süße Früchte werden hier zu feinen Aufstrichen verarbeitet.", name: "Marmeladenküche", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 13 },

        { fortschritt: 711, feld: "Marmeladenküche", beschreibung: "Samtige Erdbeer-Himbeer-Marmelade für den perfekten Morgen.", name: "Beerenmarmelade", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Erdbeere": 2, "Himbeere": 1, "Zuckerrohr": 1 } },

        { fortschritt: 712, feld: "Marmeladenküche", beschreibung: "Exotische Mango-Orangen-Marmelade, süß und spritzig.", name: "Tropenmarmelade", dauer: 22, xp: 26, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 70, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Mango": 1, "Orange": 2, "Zitrone": 1 } }
    ],

    "Teehaus": [
        { fortschritt: 720, feld: "Teehaus freischalten", beschreibung: "Im Teehaus entstehen aromatische Teemischungen.", name: "Teehaus", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 14 },

        { fortschritt: 721, feld: "Teehaus", beschreibung: "Beruhigender Kräutertee mit frischer Note.", name: "Kräutertee", dauer: 15, xp: 20, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 55, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 8, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Minze": 1, "Salbei": 1, "Lavendel": 1 } },

        { fortschritt: 722, feld: "Teehaus", beschreibung: "Fruchtig-frischer Beeren-Tee für den Nachmittag.", name: "Beeren-Tee", dauer: 20, xp: 24, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 65, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 10, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Heidelbeere": 1, "Cranberry": 1, "Himbeere": 1 } }
    ],

    "Backstube": [
        { fortschritt: 730, feld: "Backstube freischalten", beschreibung: "In der Backstube duftet es nach frischen Köstlichkeiten.", name: "Backstube", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 15 },

        { fortschritt: 731, feld: "Backstube", beschreibung: "Knuspriges Bauernbrot, frisch aus dem Ofen.", name: "Bauernbrot", dauer: 25, xp: 28, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 80, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 14, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Weizen": 2, "Roggen": 1 } },

        { fortschritt: 732, feld: "Backstube", beschreibung: "Süßer Fruchtkuchen mit Beeren und Mango.", name: "Fruchtkuchen", dauer: 30, xp: 35, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 95, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 16, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Weizen": 1, "Himbeere": 2, "Mango": 1 } }
    ],

    "Ölpresse": [
        { fortschritt: 740, feld: "Ölpresse freischalten", beschreibung: "Hier werden wertvolle Öle aus Samen und Pflanzen gewonnen.", name: "Ölpresse", dauer: null, xp: null, benutzer_exp: null, kaufpreis: null, verkaufspreis: null, ansehen: null, freigeschaltet: false, wasserverbrauch: null, energieverbrauch: null, magieverbrauch: null, gold: null, wasser: null, energie: null, magie: null, samen: null, geerntet: null, bonus: false, fertiggewachsen: null, anzahlfelder: 3, level: 16 },

        { fortschritt: 741, feld: "Ölpresse", beschreibung: "Sonnenblumenöl für die Küche.", name: "Sonnenblumenöl", dauer: 18, xp: 22, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 60, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 9, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Sonnenblume": 3 } },

        { fortschritt: 742, feld: "Ölpresse", beschreibung: "Kürbiskernöl mit intensivem Aroma.", name: "Kürbiskernöl", dauer: 22, xp: 26, benutzer_exp: 0, kaufpreis: null, verkaufspreis: 70, ansehen: 0, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 11, magieverbrauch: 0, gold: 0, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahlfelder: null, level: null, pflanzen: { "Kürbis": 2, "Sonnenblume": 1 } }
    ]
};


const gebaeudeListe = [
    { fortschritt: 1000, feld: "Goldmine", beschreibung: "Fördert wertvolles Gold über die Zeit.", name: "Goldmine", dauer: 7.50, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 10, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 1, wasser: 0, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, anzahl_slots: 5, lager: null, betriebsmittel_level: 1, level: 1 },
  { fortschritt: 1001, feld: "Wasserpumpe", beschreibung: "Pumpt stetig frisches Wasser aus dem Boden.", name: "Wasserpumpe", dauer: 5, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 12, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 1, energie: 0, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, lager: null, anzahl_slots: 5, betriebsmittel_level: 1, level: 2 },

  { fortschritt: 1002, feld: "Elektrizitätswerk", beschreibung: "Erzeugt Energie für deine Farmen.", name: "Elektrizitätswerk", dauer: 10, xp: null, benutzer_exp: 0, kaufpreis: 75, verkaufspreis: null, ansehen: 15, freigeschaltet: false, wasserverbrauch: 0, energieverbrauch: 0, magieverbrauch: 0, gold: 0, wasser: 0, energie: 1, magie: 0, samen: 0, geerntet: 0, bonus: false, fertiggewachsen: null, lager: null, anzahl_slots: 5, betriebsmittel_level: 1, level: 3 },
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








