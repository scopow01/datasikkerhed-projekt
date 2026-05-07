const scenes = {
  start: {
    title: "Du modtager en mail",
    text: "Du får en mail fra 'SU-styrelsen'. Hvad gør du? Hvad ville du gøre i denne situation?",
    choices: [
      { text: "Klik på linket", next: "phishing" },
      { text: "Ignorer mailen", next: "wifi" }
    ]
  },

  phishing: {
    title: "Falsk login side",
    text: "Du klikker på linket og kommer ind på en side, der ligner en officiel login-side. Hvad gør du?",
    choices: [
      { text: "Indtast dine oplysninger", next: "hacked" },
      { text: "Luk siden", next: "safePhishing" }
    ]
  },

  wifi: {
    title: "Offentligt WiFi",
    text: "Du sidder på en café og er forbundet til et offentligt WiFi. Overvejer du at logge ind på din bank?",
    choices: [
      { text: "Ja", next: "hackedWifi" },
      { text: "Nej", next: "safeWifi" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Dine oplysninger er blevet stjålet, og din konto er nu kompromitteret. Dette kunne være undgået ved at undlade at klikke på mistænkelige links.",
    end: true
  },

  hackedWifi: {
    title: "Ikke sikkert!",
    text: "Dine data kan blive opsnappet på offentlige netværk, hvilket kan føre til misbrug af dine personlige oplysninger.",
    end: true
  },

  safePhishing: {
    title: "Godt valg!",
    text: "Du genkendte den mistænkelige side og undgik at indtaste dine oplysninger. Det beskyttede dine data.",
    end: true
  },

  safeWifi: {
    title: "Godt valg!",
    text: "Du undgik at logge ind på et usikkert netværk og beskyttede dermed dine personlige oplysninger.",
    end: true
  }
};

// Function to display a scene
function showScene(sceneKey) {
  console.log(sceneKey); // Debug: shows which scene is loaded

  const scene = scenes[sceneKey];

  // Safety check (prevents crashes)
  if (!scene) {
    console.error("Scene not found:", sceneKey);
    return;
  }

  // Update content
  document.getElementById("title").innerText = scene.title;
  document.getElementById("text").innerText = scene.text;

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";

  // If it's an ending scene
  if (scene.end) {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Prøv igen";
    restartBtn.addEventListener("click", startGame);
    buttonsDiv.appendChild(restartBtn);
    return;
  }

  // Create buttons for choices
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.addEventListener("click", () => showScene(choice.next));
    buttonsDiv.appendChild(btn);
  });
}

// Start or restart game
function startGame() {
  showScene("start");
}

// Run on page load
startGame();