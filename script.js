const scenes = {
  start: {
    title: "Du modtager en mail",
    text: "Du modtager en mail fra 'SU-styrelsen', som beder dig om at opdatere dine oplysninger via et link. Hvad gør du?",
    choices: [
      { text: "Klikker på linket i mailen", next: "phishing" },
      { text: "Ignorerer mailen", next: "wifi" }
    ]
  },

  phishing: {
    title: "Mistænkelig login-side",
    text: "Du får en mail fra SU styrelsen som beder dig om din kortoplysninger til et specielt ekstra SU tillæg. Hvad gør du?",
    choices: [
      { text: "Indtaster mine oplysninger", next: "hacked" },
      { text: "Lukker siden med det samme", next: "safe" }
    ]
  },

  wifi: {
    title: "Offentligt WiFi",
    text: "Du sidder på en café og er forbundet til offentligt WiFi. Vil du logge ind på din netbank?",
    choices: [
      { text: "Ja, det gør jeg", next: "hackedWifi" },
      { text: "Nej, jeg venter til et sikkert netværk", next: "safe" }
    ]
  },

  hacked: {
    title: "Åh nej!",
    text: "Du indtastede dine kort oplysninger på en falsk side, og de er nu blevet stjålet.",
    end: true
  },

  hackedWifi: {
    title: "Ikke sikkert!",
    text: "Dine data kan blive opsnappet på offentlige netværk og misbrugt.",
    end: true
  },

  safe: {
    title: "Godt valg!",
    text: "Du handlede sikkert og beskyttede dine personlige oplysninger.",
    end: true
  }
};