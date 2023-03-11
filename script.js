const messageEl = document.querySelector(".message-text");
const changeBtn = document.querySelector(".change-message");
const mainEl = document.querySelector("main");
const explainBtn = document.querySelector(".explanation");

// Design

// set a gradient color on the main
mainEl.style.background = `linear-gradient(90deg,rgba(238, 174, 202, 1) 0%,rgba(99, 166, 246, 1) 100%)`;
//change the colors each time user press the change button
function changeGradientBackground() {
  mainEl.style.background = `linear-gradient(${randomNumber(
    0,
    360
  )}deg, hwb(${randomNumber(0, 360)} ${randomNumber(0, 30)}% ${randomNumber(
    0,
    25
  )}%) ${randomNumber(0, 25)}%, hwb(${randomNumber(0, 360)} ${randomNumber(
    0,
    30
  )}% ${randomNumber(0, 25)}%) ${randomNumber(75, 100)}%)`;
}
changeBtn.addEventListener("click", changeGradientBackground);
// Funtionality
//	You should: "trust no one"
const sentenceObj1 = {
  subject: ["You"],
  verb: ["should:", "must:", "advised to:", "recommended to:", "better:"],
  phrase: [
    "trust no one.",
    "Be skeptical of people's intentions.",
    "Exercise caution in all interactions.",
    "Don't be too quick to trust.",
    "Trust your instincts more than others.",
    "Always have a healthy dose of suspicion.",
  ],
};
const sentenceObj2 = {
  subject: ["You"],
  verb: ["will", "are going to", ""],
  phrase: [
    "find a lot of money.",
    "make true love later!",
    "discover your passion soon!",
    "find inner peace very soon.",
    "find happiness and joy later!",
    "encounter challenges and obstacles!",
    "face tough decisions and situations next year!",
    "face rejection and disappointment next month!",
    "experience heartbreak and loss!",
    "struggle with personal issues soon!",
  ],
};
const sentences = [sentenceObj1, sentenceObj2];

changeBtn.addEventListener("click", function () {
  //generate a random sentence;
  const sentence = sentences[randomNumber(0, 1)];
  let message = `${
    sentence.subject[randomNumber(0, sentence.subject.length - 1)]
  } ${sentence.verb[randomNumber(0, sentence.verb.length - 1)]} ${
    sentence.phrase[randomNumber(0, sentence.phrase.length - 1)]
  }`;
  messageEl.innerHTML = "";
  let i = 0;
  let speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < message.length) {
      messageEl.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
});

// generate a random number between min and max included
function randomNumber(min = 0, max = 256) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
