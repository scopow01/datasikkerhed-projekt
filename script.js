const scenes = {
  start: {
    title: "Velkommen",
    text: "Du modtager en mærkelig besked. Hvad gør du?",
    choices: [
      { text: "Klik på linket", next: "hacked" },
      { text: "Ignorer beskeden", next: "safe" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Dine oplysninger er blevet stjålet, og din konto er nu kompromitteret.",
    end: true
  },

  safe: {
    title: "Godt valg!",
    text: "Du undgik et phishing-angreb.",
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