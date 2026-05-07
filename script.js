const scenes = {
  start: {
    title: "Du modtager en mail",
    text: "Du får en mail fra 'SU-styrelsen'. Hvad gør du?",
    choices: [
      { text: "Klik på linket", next: "phishing" },
      { text: "Ignorer mailen", next: "wifi" }
    ]
  },

  phishing: {
    title: "Fake login page",
    text: "Du klikker på linket og kommer ind på en side, der ligner en officiel login-side. Hvad gør du?",
    choices: [
      { text: "Indtast dine oplysninger", next: "hacked" },
      { text: "Luk siden", next: "safePhishing" }
    ]
  },

  wifi: {
    title: "Offentligt WiFi",
    text: "Du sidder på en café og er på offentligt WiFi. Logger du ind på din bank?",
    choices: [
      { text: "Ja", next: "hackedWifi" },
      { text: "Nej", next: "safeWifi" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Dine oplysninger er blevet stjålet, fordi du indtastede dem på en falsk side.",
    end: true
  },

  hackedWifi: {
    title: "Ikke sikkert!",
    text: "Dine data kan blive opsnappet på offentlige netværk.",
    end: true
  },

  safePhishing: {
    title: "Godt valg!",
    text: "Du undgik phishing ved ikke at indtaste dine oplysninger.",
    end: true
  },

  safeWifi: {
    title: "Godt valg!",
    text: "Du undgik at bruge følsomme oplysninger på usikkert netværk.",
    end: true
  }
};


function showScene(sceneKey) {
  const scene = scenes[sceneKey];


  if (!scene) {
    console.error("Scene not found:", sceneKey);
    return;
  }


  document.getElementById("title").innerText = scene.title;
  document.getElementById("text").innerText = scene.text;

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";


  if (scene.end) {
    const btn = document.createElement("button");
    btn.innerText = "Prøv igen";
    btn.addEventListener("click", () => showScene("start"));
    buttonsDiv.appendChild(btn);
    return;
  }


  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.addEventListener("click", () => showScene(choice.next));
    buttonsDiv.appendChild(btn);
  });
}


showScene("start");