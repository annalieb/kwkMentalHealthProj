/* JS for de-stress page */

// QUIZ
var QUIZ_OUTCOMES = ["You enjoy being active and getting connected with your body. Next time you feel down, try some yoga poses to center yourself. ",
"You enjoy your relaxation time, but you also like to stay busy. If you're feeling sad or stressed, make some hot tea and take a moment to yourself. ",
"You are calm by nature and gravitate towards peaceful environments. When you feel overwhelmed, try some breathing exercises to refocus your energy. ",
"You have a creative spirit. You're also good at concentrating on the things you care about. If you feel anxious, try drawing or coloring as a calming activity. "]

var resultText = $("#result");

var submitQuiz = $("#submitQuiz");
submitQuiz.on("click", getResult);

function getResult() {  // repeat in for loop for all the questions?
  var total = 0;
  for (var i = 1; i <= 4; i++) {
    if (document.getElementById(`Q${i}OP1`).checked) {
      total += 1;
    } else if (document.getElementById(`Q${i}OP2`).checked) {
      total += 2;
    } else if (document.getElementById(`Q${i}OP3`).checked) {
      total += 3;
    } else if (document.getElementById(`Q${i}OP4`).checked) {
      total += 4;
    }
  }

  var result = Math.round (total / 4);
  console.log(total);
  console.log(result);
  resultText.text(QUIZ_OUTCOMES[result]);

}

// POSITIVE MESSAGE GENERATOR

var positivityMessages = [
  "Never give up",
  "Believe in yourself",
  "Your present situation is not your final destination",
  "The best is yet to come",
  "Mistakes can help you learn and grow",
  "Surround yourself with love & positivity",
  "You are capable of amazing things",
  "Just keep going",
  "The rainbow only comes after rain",
];

var messageText = $("#messageOutput");

var generateButton = $("#positivity-generator");
generateButton.on("click", displayMsg);

function displayMsg() {
  var randNum = Math.floor(Math.random() * positivityMessages.length);
  var message = positivityMessages[randNum];
  messageText.text(message);
}

var addButton = $("#add-positivity");
var textMsg = $("#new-msg");
addButton.on("click", addMsg);

function addMsg() {
  newMsg = textMsg.val();
  console.log(newMsg);
  positivityMessages.push(newMsg);
  console.log(positivityMessages);
}

var fullList = $("#fullList"); // the text
var fullListButton = $("#fullListButton"); // the button
fullListButton.on("click", displayFullList);

function displayFullList() {
  var output = $("#fullList");
  for (var i = 0; i < positivityMessages.length; i++) {
    output.append(`<p>${positivityMessages[i]}</p>`);
  }
}
