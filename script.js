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
    title: "Fake login page",
    text: "You click the link and land on a login page that looks official. What do you do?",
    choices: [
      { text: "Enter your information", next: "hacked" },
      { text: "Close the page", next: "safePhishing" }
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
    text: "You recognized the suspicious website and avoided entering your information. This protected your personal data.",
    end: true
  },

  safeWifi: {
    title: "Godt valg!",
    text: "Du undgik at logge ind på et usikkert netværk og beskyttede dermed dine personlige oplysninger. Dette er et eksempel på sikker digital adfærd.",
    end: true
  }
};

// Function to display a scene based on its key
function showScene(sceneKey) {
  const scene = scenes[sceneKey];

  // Update title and text content
  document.getElementById("title").innerText = scene.title;
  document.getElementById("text").innerText = scene.text;

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";

  // If the scene is an ending, show restart button
  if (scene.end) {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Start again";
    restartBtn.addEventListener("click", startGame);
    buttonsDiv.appendChild(restartBtn);
    return;
  }

  // Create buttons for each choice
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.addEventListener("click", () => showScene(choice.next));
    buttonsDiv.appendChild(btn);
  });
}

// Function to start or restart the game
function startGame() {
  showScene("start");
}

// Set the game on page load
startGame();