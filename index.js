//make gamescreen elements global scoped for future use
//make the randomword appear, issues with it not being defined yet as its a lower function

let words = [
  ["apple", "appel", "apple", "pepla"],
  ["mountain"],
  ["ocean", "canoe"],
  ["bicycle"],
  ["galaxy"],
  ["window"],
  ["fetors", "forest", "fortes", "foster", "softer"],
  ["hammer"],
  ["castle", "cleats", "eclats"],
  ["bridge", "begird"],
  ["river"],
  ["journey"],
  ["winter", "twiner"],
  ["flame", "fleam"],
  ["ervils", "livers", "livres", "silver", "sliver"],
  ["danger", "gander", "garden", "ranged"],
  ["cloud", "could"],
  ["desert", "deters", "rested"],
  ["silent", "elints", "enlist", "inlets", "listen", "tinsel"],
  ["shadow"],
];

let userInput;
let randomWord;
let submitAnswerBtn = document.createElement("button");

function loadScreen() {
  //delete start screen
  document.getElementById("titleText").remove();
  document.getElementById("startGameBtn").remove();
  document.getElementById("gameScreen").remove();

  //make game screen elements
  let outerDiv = document.createElement("div");
  let scrambledWordTitleText = document.createElement("h2");
  let scrambledWord = document.createElement("div");
  let timer = document.createElement("div");
  userInput = document.createElement("input"); //connect input to button

  let foundWords = document.createElement("div");
  outerDiv.id = "outerDiv";
  scrambledWord.id = "scrambledWord";
  timer.id = "timer";
  userInput.id = "userInput";
  submitAnswerBtn.id = "submitAnswerBtn";
  foundWords.id = "foundWords";
  scrambledWordTitleText.id = "scrambledWordTitleText";

  //background color gradient
  document.body.style.backgroundColor = "#076585";
  document.body.style.background =
    "-webkit-linear-gradient(to right, #fff, #076585)";
  document.body.style.background = "linear-gradient(to right, #fff, #076585)";
  scrambledWord.style.backgroundColor = "gray";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";
  scrambledWord.textContent = "Placeholder Word";

  submitAnswerBtn.textContent = "SUBMIT";
  userInput.placeholder = "Type Answer Here..";

  //append gameScreen elements
  document.body.appendChild(outerDiv);
  outerDiv.appendChild(scrambledWordTitleText);
  outerDiv.appendChild(scrambledWord);
  outerDiv.appendChild(timer);
  outerDiv.appendChild(userInput);

  outerDiv.appendChild(submitAnswerBtn);
  outerDiv.appendChild(foundWords);
  console.log(scrambleWord(words));
  scrambledWord.textContent = scrambleWord(words);
}

function scrambleWord(wordList) {
  //take random word from list and randomize it for future use
  let selectedIndex = Math.floor(Math.random() * wordList.length);
  let innerArrayIndex = Math.floor(Math.random() * wordList[selectedIndex]);
  randomWord =
    wordList[selectedIndex[innerArrayIndexIndex]] || wordList[selectedIndex];
  console.log(randomWord);

  //find element using index on randomword then turn element into string
  let scrambledWord = randomWord.split("");
  for (let i = scrambledWord.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [scrambledWord[i], scrambledWord[j]] = [scrambledWord[j], scrambledWord[i]]; // Swap elements
  }
  return scrambledWord.join("");
}

submitAnswerBtn.addEventListener("click", function () {
  if (userInput.value == randomWord) {
    console.log("success");

    console.log("Button was clicked!");
    alert("Hello World!");
  }
});
