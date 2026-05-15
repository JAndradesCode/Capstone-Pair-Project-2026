let words = [
  ["apple", "appel", "pepla"],
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

let currentAnswers = [];
let scrambledDisplayWord = "";

let userInput;
let submitAnswerBtn;
let score = 0;
let guesses = 0;
let totalWords;
let roundTotal;
let scrambledWord;
let firstWord;
let outerDiv;

function loadScreen() {
  // Remove start screen
  document.getElementById("titleText")?.remove();
  document.getElementById("startGameBtn")?.remove();
  document.getElementById("gameScreen")?.remove();

  // Create elements
  outerDiv = document.createElement("div");
  const scrambledWordTitleText = document.createElement("h2");
  scrambledWord = document.createElement("div");
  const foundWords = document.createElement("div");
  pointsDisplay = document.createElement("div");
  totalWordsDisplay = document.createElement("div");

  userInput = document.createElement("input");
  submitAnswerBtn = document.createElement("button");

  // IDs
  outerDiv.id = "outerDiv";
  scrambledWord.id = "scrambledWord";
  foundWords.id = "foundWords";
  pointsDisplay.id = "points";
  totalWordsDisplay.id = "totalWords";
  submitAnswerBtn.id = "submitAnswerBtn";
  scrambledWordTitleText.id = "scrambledWordTitleText";
  scrambledWord.id = "scrambledWord";
  // Styles
  document.body.style.background = "linear-gradient(to right, #fff, #076585)";
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";

  scrambledWord.style.backgroundColor = "gray";
  scrambledWord.style.padding = "20px";
  scrambledWord.style.fontSize = "2rem";

  // Text
  scrambledWordTitleText.textContent = "Unscramble The Word";
  submitAnswerBtn.textContent = "SUBMIT";
  userInput.placeholder = "Type Answer Here...";

  scrambledDisplayWord = getRandomScrambledWord();
  scrambledWord.textContent = scrambledDisplayWord;
  pointsDisplay.textContent = "Score: " + score;

  // Append elements
  document.body.appendChild(outerDiv);
  outerDiv.appendChild(pointsDisplay);
  outerDiv.appendChild(totalWordsDisplay);
  outerDiv.appendChild(scrambledWordTitleText);
  outerDiv.appendChild(scrambledWord);
  outerDiv.appendChild(userInput);
  outerDiv.appendChild(submitAnswerBtn);
  outerDiv.appendChild(foundWords);

  // Button click
  submitAnswerBtn.addEventListener("click", () => {
    checkAnswer(foundWords);
  });
}

function getRandomScrambledWord() {
  // Pick random word group
  guesses = 0;

  currentAnswers = words[Math.floor(Math.random() * words.length)];
  totalWordsDisplay.textContent =
    "Total Answers: " + guesses + "/" + currentAnswers.length;
  firstWord = currentAnswers[0];
  console.log(firstWord);
  let letters = firstWord.split("");

  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  return letters.join("");
}

function checkAnswer(foundWordsElement) {
  const guess = userInput.value.toLowerCase().trim();

  // Check if guess exists in currentAnswers
  if (currentAnswers.includes(guess)) {
    foundWordsElement.innerHTML += `<p>${guess} ✅</p>`;
    alert("Correct!");
    score++;
    guesses++;
    pointsDisplay.textContent = "Score: " + score;
    totalWordsDisplay.textContent =
      "Total Answers: " + guesses + "/" + currentAnswers.length;
  } else {
    alert("Wrong answer!");
  }

  userInput.value = "";

  if (guesses === currentAnswers.length) {
    alert("Round Complete!");

    foundWords.innerHTML = "";

    scrambledDisplayWord = getRandomScrambledWord();

    scrambledWord.textContent = scrambledDisplayWord;
  }
}
