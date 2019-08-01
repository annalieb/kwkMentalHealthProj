/* JS for de-stress page */

// QUIZ
var option1 = $("#option1");
console.log(option1);

var submitQuiz = $("#submitQuiz");
submitQuiz.on("click", getResult);
console.log(document.getElementsByClassName("option1").value);

function getResult() {  // repeat in for loop for all the questions?
  var total = 0;
  if (document.getElementByClass("answer").value == "Option 1") {
    total += 1;
  } else if (document.getElementByClass("answer").value == "Option 2") {
    total += 2;
  } else if (document.getElementByClass("answer").value == "Option 3") {
    total += 3;
  } else if (document.getElementByClass("answer").value == "Option 4") {
    total += 4;
  }
  var result = total / 4;
}

// POSITIVE MESSAGE GENERATOR

var positivityMessages = [
  "Never give up",
  "Believe in yourself",
  "Life is better with friends",
  "Your present situation is not your final destination",
  "The best is yet to come",
  "Mistakes can help you learn and grow",
  "Surround yourself with love & positivity",
  "You are capable of amazing things"];

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
    output.append(`<p>${positivityMessages[i]}</p>`)
  }
}
