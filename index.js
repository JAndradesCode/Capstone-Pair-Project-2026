//needs to assemble gamescreen elements to look good and functional
//make gamescreen elements global scoped for future use

function loadScreen() {
  //delete start screen
  document.getElementById("titleText").remove();
  document.getElementById("startGameBtn").remove();
  document.getElementById("gameScreen").remove();

  //make game screen elements
  let outerDiv = document.createElement("div");
  let scrambledWord = document.createElement("div");
  let timer = document.createElement("div");
  let userInput = document.createElement("input"); //connect input to button
  let submitAnswerBtn = document.createElement("button");
  let foundWords = document.createElement("div");
  outerDiv.id = "outerDiv";
  scrambledWord.id = "scrambledWord";
  timer.id = "timer";
  userInput.id = "userInput";
  submitAnswerBtn.id = "submitAnswerBtn";
  foundWords.id = "foundWords";

  timer.textContent = "Hello World";
  //background color gradient
  document.body.style.backgroundColor = "#076585";
  document.body.style.background =
    "-webkit-linear-gradient(to right, #fff, #076585)";
  document.body.style.background = "linear-gradient(to right, #fff, #076585)";

  //append gameScreen elements
  document.body.appendChild(outerDiv);
  outerDiv.appendChild(scrambledWord);
  outerDiv.appendChild(timer);
  outerDiv.appendChild(userInput);
  outerDiv.appendChild(submitAnswerBtn);
  outerDiv.appendChild(foundWords);
}
