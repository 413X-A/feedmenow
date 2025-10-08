window.onload = function () {
    ui_setzen();
    levelsystem();
}

function ui_setzen() {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));

    if (!benutzername || !aktuellerBenutzer) {
        alert("Kein Benutzer eingeloggt!");
        window.location.href = "index.html";
        return;
    } else {
        const daten = alleBenutzer[aktuellerBenutzer];

        // Basis-Infos anzeigen
        document.getElementById("benutzername").textContent = daten.benutzername;

        document.getElementById("menge_ansehen").textContent = daten.benutzer_ansehen;


        if (daten.lagerplatz.gold >= 1000) {
            const gold_in_tausen = (daten.ressourcen.gold / 1000).toFixed(2);
            const gold_in_tausen_lager = (daten.lagerplatz.gold / 1000).toFixed(2);


            document.getElementById("menge_gold").innerHTML = `${gold_in_tausen}k / ${gold_in_tausen_lager}k`;

        } else if (daten.lagerplatz.gold >= 1000000) {
            const gold_in_millionen = (daten.ressourcen.gold / 1000000).toFixed(2);
            const gold_in_tausen_millionen = (daten.lagerplatz.gold / 1000000).toFixed(2);

            document.getElementById("menge_gold").innerHTML = `${gold_in_millionen}m / ${gold_in_tausen_millionen}m`;
        } else {
            document.getElementById("menge_gold").innerHTML = `${daten.ressourcen.gold} / ${daten.lagerplatz.gold}`;
        }

        if (daten.lagerplatz.wasser >= 1000) {
            const wasser_in_tonnen = (daten.ressourcen.wasser / 1000).toFixed(2);
            const wasser_in_tonnen_lager = (daten.lagerplatz.wasser / 1000).toFixed(2);
            document.getElementById("menge_wasser").innerHTML = `${wasser_in_tonnen}T / ${wasser_in_tonnen_lager}T`;
        } else {
            document.getElementById("menge_wasser").innerHTML = `${daten.ressourcen.wasser}L / ${daten.lagerplatz.wasser}L`;
        }

        if (daten.ressourcen.energie >= 1000) {
            const energie_in_tonnen = (daten.ressourcen.energie / 1000).toFixed(2);
            const energie_in_tonnen_lager = (daten.lagerplatz.energie / 1000).toFixed(2);
            document.getElementById("menge_energie").innerHTML = `${energie_in_tonnen}kW / ${energie_in_tonnen_lager}kW`;
        } else {
            document.getElementById("menge_energie").innerHTML = `${daten.ressourcen.energie}W / ${daten.lagerplatz.energie}W`;
        }

        if (daten.ressourcen.magie >= 1000) {
            const magie_in_kMyr = (daten.ressourcen.magie / 1000).toFixed(2);
            const magie_in_kMyr_lager = (daten.lagerplatz.magie / 1000).toFixed(2);
            document.getElementById("menge_magie").innerHTML = `${magie_in_kMyr}kMyr / ${magie_in_kMyr_lager}kMyr`;
        } else {
            document.getElementById("menge_magie").innerHTML = `${daten.ressourcen.magie}Myr / ${daten.lagerplatz.magie}Myr`;
        }



        document.getElementById("menge_level").innerHTML = `[${daten.benutzer_level}] ${daten.benutzer_exp}`;

        document.getElementById("menge_pflanzen").innerHTML = `${daten.ressourcen.anz_pflanzen}st. / ${daten.lagerplatz.pflanzen}st.`;

        document.getElementById("menge_produkte").innerHTML = `${daten.ressourcen.anz_produkte}st. / ${daten.lagerplatz.produkte}st.`;
    }
}


// Button-Funktionen
function zum_login() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "index.html";
    }, 375);
}
function zur_startseite() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "hauptseite.html";
    }, 375);
}


function zum_weltmarkt() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "weltmarkt.html";
    }, 375);
}


function zu_gebaeude() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "produkte.html";
    }, 375);
}


function zur_reise() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "deinereise.html";
    }, 375);
}


function zur_normalefarm() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "normalefarmen.html";
    }, 375);
}
function zur_magischefarm() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    const daten = alleBenutzer[aktuellerBenutzer];
    // Sound Effekt
    if (daten.einstellungen.effekte) {
        const purchaseSound = new Audio("button.mp3");
        purchaseSound.volume = 1.00;
        purchaseSound.play().catch(() => { });
    }
    setTimeout(() => {
        window.location.href = "magischefarmen.html";
    }, 375);
}



function levelsystem() {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    let alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    let daten = alleBenutzer[aktuellerBenutzer];

    if (daten.benutzer_explevel >= daten.benutzer_levelsystem) {
        daten.benutzer_explevel -= daten.benutzer_levelsystem;
        daten.benutzer_level += 1;
        daten.benutzer_levelsystem += 15;

        // Optionaler Soundeffekt ✨
        if (daten.einstellungen.effekte) {
            const sound = new Audio("levelup.mp3");
            sound.volume = 0.75;
            sound.play().catch(() => { });
        }

        // Falls schon ein Overlay existiert → entfernen
        const vorhandenesOverlay = document.getElementById("levelup_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        // Neues Overlay anzeigen
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
            <h2>Levelaufstieg!</h2>
            <p>Level ${daten.benutzer_level - 1} → ${daten.benutzer_level}</p>
        `;

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "Zurück";
        closeBtn.className = "ui_unten";
        closeBtn.addEventListener("click", () => ressOverlay.remove());

        ressDialog.appendChild(closeBtn);
        ressOverlay.appendChild(ressDialog);
        document.body.appendChild(ressOverlay);
    }

    // Geänderte Daten wieder abspeichern
    alleBenutzer[aktuellerBenutzer] = daten;
    localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

    ui_setzen();
}

setInterval(levelsystem, 100);




// EINSTELLUNGEN 

// // // //
// MUSIK //
// // // //

function initMusik() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return null;

    // Player erstellen oder wiederverwenden
    let player = document.getElementById("global_music_player");
    if (!window.globalMusikPlayer) {
        if (!player) {
            player = document.createElement("audio");
            player.id = "global_music_player";
            player.loop = true;
            player.style.display = "none";
            document.body.appendChild(player);
        }
        window.globalMusikPlayer = player;
        window.globalMusikPlayer.volume = 0.5;
    }
    player = window.globalMusikPlayer;

    // Song + Timestamp
    const song = daten.einstellungen.song || "haupttitel_eins.mp3";
    const timestamp = daten.einstellungen.sound_timestamp || 0;
    player.src = song;
    player.currentTime = timestamp;

    // Musik starten falls aktiv
    if (daten.einstellungen.sound) {
        player.play().catch(() => { });
    }

    // Timestamp regelmäßig speichern
    setInterval(() => {
        if (!player.paused) {
            daten.einstellungen.sound_timestamp = player.currentTime;
            daten.einstellungen.song = player.src;
            alleBenutzer[aktuellerBenutzer] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
        }
    }, 100);

    return player;
}

// EINSTELLUNGEN FENSTER
function zeige_einstellungen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    let player = window.globalMusikPlayer;
    if (!player) {
        player = document.createElement("audio");
        player.id = "global_music_player";
        player.loop = true;
        player.style.display = "none";
        document.body.appendChild(player);
        window.globalMusikPlayer = player;
        player.volume = 0.5;

        const song = daten.einstellungen.song || "haupttitel_eins.mp3";
        const timestamp = daten.einstellungen.sound_timestamp || 0;
        player.src = song;
        player.currentTime = timestamp;

        if (daten.einstellungen.sound) player.play().catch(() => { });

        window.globalMusikInterval = setInterval(() => {
            if (!player.paused) {
                daten.einstellungen.sound_timestamp = player.currentTime;
                daten.einstellungen.song = player.src;
                alleBenutzer[aktuellerBenutzer] = daten;
                localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
            }
        }, 1000);
    }

    const vorhandenesOverlay = document.getElementById("einstellungen_overlay");
    if (vorhandenesOverlay) vorhandenesOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "einstellungen_overlay";
    Object.assign(overlay.style, {
        position: "fixed",
        top: 0,
        left: 0,
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
        textAlign: "left",
        minWidth: "320px",
        maxWidth: "420px"
    });

    const soundChecked = daten.einstellungen.sound ?? true;
    const effekteChecked = daten.einstellungen.effekte ?? true;
    const gespeicherterSong = (daten.einstellungen.song || "haupttitel_eins.mp3").split("/").pop();
    const gespeicherteMail = daten.mail || "";

    dialog.innerHTML = `
        <h2>⚙️ Spiel-Einstellungen</h2>
        <label>
            <input type="checkbox" id="sound_enabled" ${soundChecked ? "checked" : ""}>
            Sound aktivieren
        </label>
        <br><br>
        <label>
            <input type="checkbox" id="sound_effekte_enabled" ${effekteChecked ? "checked" : ""}>
            Soundeffekte aktivieren
        </label>
        <br><br>
        <label for="musik-auswahl"><b>🎶 Hintergrundmusik:</b></label><br>
        <select id="musik-auswahl" style="width:100%; margin-top:0.5rem;">
            <option value="haupttitel_eins.mp3">Haupttitel Eins</option>
            <option value="haupttitel_zwei.mp3">Haupttitel Zwei</option>
            <option value="Hirstorische Musik.mp3">Hirstorische Musik</option>
            <option value="Trauriges Klavier.mp3">Trauriges Klavier</option>
            <option value="Beruhigende Natur.mp3">Beruhigende Natur</option>
            <option value="Ökologische Umwelt.mp3">Ökologische Umwelt</option>
            <option value="Ernte-Symphonie.mp3">Ernte-Symphonie</option>
            <option value="Campoagroalegre.mp3">Campoagroalegre</option>
            <option value="Zartes Land.mp3">Zartes Land</option>
            <option value="Dallas Texas.mp3">Dallas Texas</option>
        </select>
        <br><br>
        <label for="email-input"><b>📧 E-Mail-Adresse:</b></label><br>
        <input type="email" id="email-input" style="width:100%; margin-top:0.5rem;" value="${gespeicherteMail}">
    `;

    const soundCheckbox = dialog.querySelector("#sound_enabled");
    const effekteCheckbox = dialog.querySelector("#sound_effekte_enabled");
    const musikAuswahl = dialog.querySelector("#musik-auswahl");
    const emailInput = dialog.querySelector("#email-input");

    if (musikAuswahl.querySelector(`option[value="${gespeicherterSong}"]`)) {
        musikAuswahl.value = gespeicherterSong;
    }

    // --- Event: Songwechsel ---
    musikAuswahl.addEventListener("change", function () {
        const neuerSong = this.value;
        if (!player.src.endsWith(neuerSong)) {
            player.src = neuerSong;
            player.currentTime = 0;
            if (soundCheckbox.checked) player.play().catch(() => { });
            daten.einstellungen.song = neuerSong;
            daten.einstellungen.sound_timestamp = 0;
            alleBenutzer[aktuellerBenutzer] = daten;
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
        }
    });

    // --- Event: Sound an/aus ---
    soundCheckbox.addEventListener("change", function () {
        daten.einstellungen.sound = this.checked;
        alleBenutzer[aktuellerBenutzer] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
        if (this.checked) player.play().catch(() => { }); else player.pause();
    });

    // --- Event: Soundeffekte an/aus ---
    effekteCheckbox.addEventListener("change", function () {
        daten.einstellungen.effekte = this.checked;
        alleBenutzer[aktuellerBenutzer] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
    });

    // --- Event: E-Mail ändern ---
    emailInput.addEventListener("input", function () {
        daten.mail = this.value;
        alleBenutzer[aktuellerBenutzer] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));
    });

    // --- Buttons ---
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Schließen";
    saveBtn.className = "save-btn";
    saveBtn.onclick = () => overlay.remove();

    const buttonsDiv = document.createElement("div");
    buttonsDiv.appendChild(saveBtn);

    dialog.appendChild(buttonsDiv);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

// --- Button: Benutzer löschen ---
const loeschenBtn = document.createElement("button");
loeschenBtn.textContent = "Benutzerkonto löschen";
loeschenBtn.className = "save-btn";
loeschenBtn.style.backgroundColor = "#ff4d4d";
loeschenBtn.style.marginTop = "1rem";

loeschenBtn.addEventListener("click", () => {
    const code = Math.floor(1000 + Math.random() * 9000);

    // Overlay-Hintergrund
    const overlayCode = document.createElement("div");
    overlayCode.remove();
    
    Object.assign(overlayCode.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
    });

    // Dialogfeld
    const dialogCode = document.createElement("div");
    Object.assign(dialogCode.style, {
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "12px",
        textAlign: "center",
        minWidth: "320px",
        maxWidth: "400px"
    });

    dialogCode.innerHTML = `
        <h2>Benutzer löschen</h2>
        <p>Zur Bestätigung wird ein Sicherheitscode angezeigt. Bitte geben Sie diesen unten ein, um Ihren Account zu löschen.</p>
        <p style="font-size:1.2rem; font-weight:bold;">Sicherheitscode: ${code}</p>
        <input type="text" id="loesch_code_input" placeholder="Code hier eingeben"
               style="width:100%; margin-top:0.5rem; padding:0.5rem; font-size:1rem;">
        <br><br>
        <button id="cancel_loesch" class="ui_unten" style="margin-right:8px;">Abbrechen</button>
        <button id="confirm_loesch" class="ui_unten" style="background-color:#ff4d4d;">Bestätigen</button>
    `;

    overlayCode.appendChild(dialogCode);
    document.body.appendChild(overlayCode);

    const confirmBtn = dialogCode.querySelector("#confirm_loesch");
    const cancelBtn = dialogCode.querySelector("#cancel_loesch");
    const codeInput = dialogCode.querySelector("#loesch_code_input");

    // --- Funktion: Benutzer löschen ---
    function benutzerLoeschen() {
        const alleBenutzerAktuell = JSON.parse(localStorage.getItem("benutzer")) || {};
        const aktuellerBenutzerAktuell = localStorage.getItem("aktuellerBenutzer");

        if (codeInput.value.trim() === code.toString()) {
            // Benutzer löschen
            delete alleBenutzerAktuell[aktuellerBenutzerAktuell];
            localStorage.setItem("benutzer", JSON.stringify(alleBenutzerAktuell));
            localStorage.removeItem("aktuellerBenutzer");

            // Erfolgsanzeige
            dialogCode.innerHTML = `
                <h2>Benutzer erfolgreich gelöscht</h2>
                <p>Dein Benutzerkonto wurde erfolgreich entfernt. Du wirst abgemeldet!</p>
            `;

            // Weiterleitung nach kurzer Verzögerung
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2500);

        } else {
            // Fehleranzeige
            dialogCode.innerHTML = `
                <h2>Falscher Sicherheitscode</h2>
                <p>Der eingegebene Code stimmt nicht mit dem angezeigten Sicherheitscode überein.</p>
                <button id="close_error" class="ui_unten" style="margin-top:1rem;">Schließen</button>
            `;
            const closeErrorBtn = dialogCode.querySelector("#close_error");
            closeErrorBtn.addEventListener("click", () => overlayCode.remove());
        }
    }

    // --- Button-Events ---
    confirmBtn.addEventListener("click", benutzerLoeschen);
    cancelBtn.addEventListener("click", () => overlayCode.remove());

    // --- Enter-Taste löst ebenfalls Löschung aus ---
    codeInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            benutzerLoeschen();
        }
    });
});

// Den Lösch-Button ins gewünschte Dialog-Element einfügen
dialog.appendChild(loeschenBtn);

}




// // // // // // // //
// MUSIK JEDE SEITE //
// // // // // // // //

// GLOBAL MUSIKPLAYER
function startPersistentMusic() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    if (!aktuellerBenutzer) return;

    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];
    if (!daten) return;

    let player = window.globalMusikPlayer;
    if (!player) {
        player = document.createElement("audio");
        player.id = "global_music_player";
        player.loop = true;
        player.style.display = "none";
        document.body.appendChild(player);
        window.globalMusikPlayer = player;
        player.volume = 0.5;
    }

    const song = daten.einstellungen.song || "haupttitel_eins.mp3";
    const timestamp = daten.einstellungen.sound_timestamp || 0;

    if (!player.src.endsWith(song)) {
        player.src = song;
        player.currentTime = timestamp;
    } else {
        player.currentTime = timestamp;
    }

    if (daten.einstellungen.sound) player.play().catch(() => { });

    if (!window.globalMusikInterval) {
        window.globalMusikInterval = setInterval(() => {
            saveMusicState();
        }, 1000);
    }

    window.addEventListener("beforeunload", () => {
        saveMusicState();
    });

    function saveMusicState() {
        const aktuelleDaten = JSON.parse(localStorage.getItem("benutzer")) || {};
        if (!aktuelleDaten[aktuellerBenutzer]) return;

        aktuelleDaten[aktuellerBenutzer].einstellungen = aktuelleDaten[aktuellerBenutzer].einstellungen || {};
        aktuelleDaten[aktuellerBenutzer].einstellungen.song = player.src.split("/").pop();
        aktuelleDaten[aktuellerBenutzer].einstellungen.sound_timestamp = player.currentTime;

        localStorage.setItem("benutzer", JSON.stringify(aktuelleDaten));
    }
}

startPersistentMusic();






