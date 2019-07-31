/* JS for de-stress page */

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
var fullListButton = $("fullListButton");
fullListButton.on("click", displayFullList);

function displayFullList() {
  var output = "";
  for (var i = 0; i < positivityMessages.length; i++) {
    output = output.concat(positivityMessages[i])
    console.log(output);
  }
  fullList.text(output);
}
