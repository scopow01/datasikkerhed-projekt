const scenes = {
  start: {
    title: "Du modtager en besked",
    text: "Du får en besked fra en ukendt afsender med et link.",
    choices: [
      { text: "Klik på linket", next: "link" },
      { text: "Ignorer beskeden", next: "safe" }
    ]
  },

  link: {
    title: "Phishing side",
    text: "Du bliver sendt til en side, der ligner din bank.",
    choices: [
      { text: "Indtast dine oplysninger", next: "hacked" },
      { text: "Gå væk fra siden", next: "safe" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Dine oplysninger er blevet stjålet, og din konto er nu kompromitteret.",
    end: true
  },

  safe: {
    title: "Godt valg!",
    text: "Du undgik svindel og beskyttede dine data.",
    end: true
  }
};

function showScene(sceneKey) {
  const scene = scenes[sceneKey];

  document.getElementById("title").innerText = scene.title;
  document.getElementById("text").innerText = scene.text;

  const buttonsDiv = document.getElementById("buttons");
  buttonsDiv.innerHTML = "";

  // 👉 Hvis det er en slutning
  if (scene.end) {
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Prøv igen";
    restartBtn.onclick = () => showScene("start");
    buttonsDiv.appendChild(restartBtn);
    return;
  }

  // 👉 Ellers vis valg
  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;
    btn.onclick = () => showScene(choice.next);
    buttonsDiv.appendChild(btn);
  });
}

// Start spillet
showScene("start");