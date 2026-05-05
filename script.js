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
    title: "Fake login side",
    text: "Du indtaster dine oplysninger...",
    choices: [
      { text: "Fortsæt", next: "hacked" }
    ]
  },

  wifi: {
    title: "Offentligt WiFi",
    text: "Du er på café. Logger du ind på din bank?",
    choices: [
      { text: "Ja", next: "hackedWifi" },
      { text: "Nej", next: "safe" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Du blev hacket 😬",
    end: true
  },

  hackedWifi: {
    title: "Ikke sikkert!",
    text: "Dine data kan blive opsnappet ⚠️",
    end: true
  },

  safe: {
    title: "Godt valg!",
    text: "Du er sikker 🎉",
    end: true
  }
};

function showScene(sceneKey) {
  const scene = scenes[sceneKey];

  document.getElementById("title").innerText = scene.title;
  document.getElementById("text").innerText = scene.text;

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";

  if (scene.end) {
    buttonsDiv.innerHTML = `<button onclick="startGame()">Prøv igen</button>`;
    return;
  }

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.addEventListener("click", () => showScene(choice.next));
    buttonsDiv.appendChild(btn);
  });
}

function startGame() {
  showScene("start");
}

startGame();