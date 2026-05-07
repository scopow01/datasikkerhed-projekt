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
    text: "Du klikker på linket og lander på en side der ligner en officiel login. Hvad gør du?",
    choices: [
      { text: "Indtast oplysninger", next: "hacked" },
      { text: "Luk siden", next: "safe" }
    ]
  },

  wifi: {
    title: "Offentligt WiFi",
    text: "Du er på café og bruger offentligt WiFi. Logger du ind på din bank?",
    choices: [
      { text: "Ja", next: "hackedWifi" },
      { text: "Nej", next: "safe" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Dine oplysninger er blevet stjålet, og din konto er nu kompromitteret.",
    end: true
  },

  hackedWifi: {
    title: "Ikke sikkert!",
    text: "Dine data kan blive opsnappet på offentlige netværk ⚠️",
    end: true
  },

  safe: {
    title: "Godt valg!",
    text: "Du undgik en potentiel trussel og beskyttede dine personlige oplysninger.",
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
    btn.addEventListener("click", startGame);
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


function startGame() {
  showScene("start");
}

startGame();