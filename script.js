// Selecting Elements
const messageEl = document.querySelector(".message-text");
const changeBtn = document.querySelector(".change-message");
const mainEl = document.querySelector("main");
const explainBtn = document.querySelector(".explanation");
const howItWorksEl = document.querySelector(".how-it-words");
const closeBtn = document.querySelector(".close-info");

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
//sentence structure #1
const sentenceObj1 = {
  subject: ["You"],
  verb: [
    "should",
    "must",
    "are advised to",
    "recommended to",
    "better",
    "are encouraged to",
    "are urged to",
    "need to",
    "would be wise to",
  ],
  phrase: [
    "trust no one.",
    "be skeptical of people's intentions.",
    "exercise caution in all interactions.",
    "not be too quick to trust.",
    "trust your instincts more than others.",
    "always have a healthy dose of suspicion.",
    "always stay true to yourself.",
    "never compromise your values.",
    "never give up on your dreams.",
    "always treat others with kindness and respect.",
    "never judge others based on appearance or stereotypes.",
    "always be open to new ideas and perspectives.",
    "never let fear hold you back from achieving your goals.",
    "always strive to be the best version of yourself.",
    "never let others determine your self-worth.",
  ],
};
//sentence structure #2
const sentenceObj2 = {
  subject: ["You"],
  verb: [
    "will",
    "are going to",
    "",
    "are destined to",
    "are bound to",
    "are likely to",
  ],
  phrase: [
    "find a lot of money.",
    "find true love later!",
    "discover your passion soon!",
    "find inner peace very soon.",
    "find happiness and joy later!",
    "encounter challenges and obstacles!",
    "face tough decisions and situations next year!",
    "face rejection and disappointment next month! :(",
    "experience heartbreak and loss! :(",
    "struggle with personal issues soon! :(",
    "make meaningful connections with others!",
    "find your true purpose in life!",
    "develop a strong sense of confidence and self-worth!",
    "make a positive impact on the lives of others!",
    "have many opportunities to travel and explore the world!",
    "meet the love of your life soon!",
  ],
};
// sentence types
const sentenceTypes = [sentenceObj1, sentenceObj2];

changeBtn.addEventListener("click", function makeNewMessage() {
  //remove event listener, so that messages won't mix if user keep pressing
  changeBtn.removeEventListener("click", makeNewMessage);
  changeBtn.removeEventListener("click", changeGradientBackground);
  //generate a random sentence;
  // #1- select sentence structure
  const sentence = sentenceTypes[randomNumber(0, 1)];
  //#2- construct the sentence : subject + verb + phrase
  let message = `${
    sentence.subject[randomNumber(0, sentence.subject.length - 1)]
  } ${sentence.verb[randomNumber(0, sentence.verb.length - 1)]} ${
    sentence.phrase[randomNumber(0, sentence.phrase.length - 1)]
  }`;
  // empty the message box on the screen
  messageEl.innerHTML = "";
  // character at which message will start to show up
  let i = 0;
  // speed in ms that each character will show up
  let speed = 50;
  typeWriter();
  // print the message char by char to the message box
  function typeWriter() {
    if (i < message.length) {
      //add the character from message to the message box
      messageEl.innerHTML += message.charAt(i);
      i++;
      // change speed of typing for each character to represent thoughtful elaboration of ideas :)
      speed = randomNumber(30, 100);
      // once message has been shown completely:
      if (i >= message.length) {
        //put event listener back so user can make more messages
        changeBtn.addEventListener("click", changeGradientBackground);
        changeBtn.addEventListener("click", makeNewMessage);
      }
      // add 1 character to the message box every {speed}ms.
      setTimeout(typeWriter, speed);
    }
  }
});

// how it works Pop-up
explainBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mainEl.style.filter = "blur(1rem)";
  howItWorksEl.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mainEl.style.filter = "blur(0)";
  howItWorksEl.style.display = "none";
});

// generate a random number between min and max included
function randomNumber(min = 0, max = 256) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
