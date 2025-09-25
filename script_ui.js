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
    window.location.href = "index.html";
}
function zur_startseite() {
    window.location.href = "hauptseite.html";
}
function zum_weltmarkt() {
    window.location.href = "weltmarkt.html";
}
function zur_reise() {
    window.location.href = "deinereise.html";
}

function verstecke_einstellungen() {
    document.getElementById("einstellungen_fenster").style.display = "none";
}

function zur_normalefarm() {
    window.location.href = "normalefarmen.html";
}
function zur_magischefarm() {
    window.location.href = "magischefarmen.html";
}



function levelsystem() {
    // Benutzer aus localStorage holen
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    let alleBenutzer = JSON.parse(localStorage.getItem("benutzer"));
    let daten = alleBenutzer[aktuellerBenutzer];

    if (daten.benutzer_explevel >= daten.benutzer_levelsystem) {
        daten.benutzer_explevel -= daten.benutzer_levelsystem;
        daten.benutzer_level += 1;
        daten.benutzer_levelsystem += 5;

        // Falls schon ein Overlay existiert → entfernen
        const vorhandenesOverlay = document.getElementById("levelup_overlay");
        if (vorhandenesOverlay) vorhandenesOverlay.remove();

        // Neues Overlay anzeigen
        const ressOverlay = document.createElement("div");
        ressOverlay.id = "levelup_overlay"; // eindeutige ID vergeben
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

setInterval(levelsystem, 1000);


// EINSTELLUNGEN 
function zeige_einstellungen() {
    const aktuellerBenutzer = localStorage.getItem("aktuellerBenutzer");
    const alleBenutzer = JSON.parse(localStorage.getItem("benutzer")) || {};
    const daten = alleBenutzer[aktuellerBenutzer];

    // Overlay entfernen, falls schon vorhanden
    const vorhandenesOverlay = document.getElementById("einstellungen_overlay");
    if (vorhandenesOverlay) vorhandenesOverlay.remove();

    const overlay = document.createElement("div");
    overlay.id = "einstellungen_overlay";
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
        textAlign: "left",
        minWidth: "320px",
        maxWidth: "420px"
    });

    // Aktuelle Einstellungen
    const soundChecked = daten?.einstellungen?.sound ?? true;
    const notificationsChecked = daten?.einstellungen?.benachrichtigung ?? true;
    const effectsChecked = daten?.einstellungen?.effekte ?? true;
    let aktuellerSong = daten?.einstellungen?.song || "main_theme1.mp3";

    dialog.innerHTML = `
        <h2>⚙️ Spiel-Einstellungen</h2>
        
        <label>
            <input type="checkbox" id="sound_enabled" ${soundChecked ? "checked" : ""}>
            Sound aktivieren
        </label>
        <br><br>

        <label>
            <input type="checkbox" id="notifications_enabled" ${notificationsChecked ? "checked" : ""}>
            Benachrichtigungen anzeigen
        </label>
        <br><br>

        <label>
            <input type="checkbox" id="effects_enabled" ${effectsChecked ? "checked" : ""}>
            Effekte aktivieren
        </label>
        <br><br>

        <label>Musik auswählen:</label>
        <div id="song_buttons" style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;"></div>
    `;

    // Songs vorbereiten
    const songs = ["main_theme1.mp3","main_theme2.mp3","main_theme3.mp3","main_theme4.mp3"];
    const audioContainer = document.getElementById("audio_container") || document.createElement("div");
    audioContainer.id = "audio_container";
    audioContainer.style.display = "none";
    document.body.appendChild(audioContainer);

    songs.forEach(song => {
        let audio = document.getElementById(song);
        if (!audio) {
            audio = document.createElement("audio");
            audio.id = song;
            audio.loop = true;
            audio.src = `audio/${song}`;
            audioContainer.appendChild(audio);
        }
        audio.pause();
        audio.currentTime = 0;
    });

    // Gewählten Song starten
    if (soundChecked) {
        const activeSong = document.getElementById(aktuellerSong);
        activeSong.muted = false;
        activeSong.play().catch(err => console.log("Autoplay blockiert:", err));
    }

    // Song-Buttons
    const songButtonsDiv = dialog.querySelector("#song_buttons");
    songs.forEach(song => {
        const btn = document.createElement("button");
        btn.textContent = song.replace(".mp3","").replace("_"," ");
        btn.style.padding = "0.5rem 1rem";
        btn.style.backgroundColor = song === aktuellerSong ? "#2e7d32" : "#e0e0e0";
        btn.style.color = song === aktuellerSong ? "#fff" : "#333";
        btn.style.border = "none";
        btn.style.borderRadius = "6px";
        btn.addEventListener("click", () => {
            if (!document.getElementById("sound_enabled").checked) return;
            
            // Alle Songs stoppen
            songs.forEach(s => {
                const a = document.getElementById(s);
                a.pause();
                a.currentTime = 0;
            });

            // Gewählten Song starten
            aktuellerSong = song;
            const activeSong = document.getElementById(aktuellerSong);
            activeSong.muted = false;
            activeSong.play().catch(err => console.log("Autoplay blockiert:", err));

            // Buttons optisch aktualisieren
            Array.from(songButtonsDiv.children).forEach(b => {
                b.style.backgroundColor = b.textContent === song.replace(".mp3","").replace("_"," ") ? "#2e7d32" : "#e0e0e0";
                b.style.color = b.style.backgroundColor === "#2e7d32" ? "#fff" : "#333";
            });
        });
        songButtonsDiv.appendChild(btn);
    });

    // Speichern Button
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Speichern";
    saveBtn.style.backgroundColor = "#e0e0e0";
    saveBtn.style.color = "#333";
    saveBtn.style.marginRight = "0.5rem";

    saveBtn.addEventListener("click", () => {
        const settings = {
            sound: document.getElementById("sound_enabled").checked,
            benachrichtigung: document.getElementById("notifications_enabled").checked,
            effekte: document.getElementById("effects_enabled").checked,
            song: aktuellerSong
        };

        // Update in den Benutzerdaten
        daten.einstellungen = settings;
        alleBenutzer[aktuellerBenutzer] = daten;
        localStorage.setItem("benutzer", JSON.stringify(alleBenutzer));

        // Alle Songs stoppen
        songs.forEach(s => {
            const a = document.getElementById(s);
            a.pause();
            a.currentTime = 0;
        });

        // Gewählten Song starten
        if (settings.sound) {
            const activeSong = document.getElementById(settings.song);
            activeSong.muted = false;
            activeSong.play().catch(err => console.log("Autoplay blockiert:", err));
        }

        overlay.remove();
    });

    // Abbrechen Button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Abbrechen";
    closeBtn.style.backgroundColor = "#e0e0e0";
    closeBtn.style.color = "#333";
    closeBtn.addEventListener("click", () => overlay.remove());

    const buttonsDiv = document.createElement("div");
    buttonsDiv.style.display = "flex";
    buttonsDiv.style.justifyContent = "flex-end";
    buttonsDiv.style.marginTop = "1rem";
    buttonsDiv.appendChild(saveBtn);
    buttonsDiv.appendChild(closeBtn);

    dialog.appendChild(buttonsDiv);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}
