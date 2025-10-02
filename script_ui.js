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
            sound.play().catch(() => {});
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

// EINSTELLUNGEN
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
    const effekteChecked = daten.einstellungen.effekte ?? true; // neue Checkbox für Effekte
    const gespeicherterSong = (daten.einstellungen.song || "haupttitel_eins.mp3").split("/").pop();

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
    `;

    const soundCheckbox = dialog.querySelector("#sound_enabled");
    const effekteCheckbox = dialog.querySelector("#sound_effekte_enabled"); // Checkbox für Effekte
    const musikAuswahl = dialog.querySelector("#musik-auswahl");

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

    // --- Buttons ---
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Schließen";
    saveBtn.className = "save-btn";
    saveBtn.onclick = () => overlay.remove();

    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "flex-end";
    buttonsDiv.style.marginTop = "1rem";
    buttonsDiv.appendChild(saveBtn);

    dialog.appendChild(buttonsDiv);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
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
