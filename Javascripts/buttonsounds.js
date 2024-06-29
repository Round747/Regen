const audio = new Audio("Sounds/Keyboard-Button-Click.wav");
const audiolow = new Audio("Sounds/Keyboard-Button-Click low pitch.wav");
const audiolower = new Audio("Sounds/Keyboard-Button-Click lower pitch.wav");
const audiohigh = new Audio("Sounds/Keyboard-Button-Click high pitch.wav");
const audiohigher = new Audio("Sounds/Keyboard-Button-Click higher pitch.wav");

const list = [audio, audiolow, audiohigh, audiohigher, audiolower];

document.addEventListener('keydown', b => {

    if (b.repeat) { return }

    list[Math.floor(Math.random() * 4)].cloneNode().play();
    
  });