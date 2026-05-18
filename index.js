let words = [
  ["galaxy"],
  ["window"],
  ['family'],
  ['center', 'centre', 'recent'],
  ['credit', 'direct'],
  ['safety'],
  ['person'],
  ['action', 'atonic', 'cation'],
  ['mobile'],
  ['source', 'course', 'crouse'],
  ['region', 'ignore'],
  ["fetors", "forest", "fortes", "foster", "softer"],
  ["hammer"],
  ["castle", "cleats"],
  ["bridge"],
  ["winter", "twiner"],
  ["silver", "livers", "sliver"],
  ["danger", "gander", "garden", "ranged"],
  ["desert", "deters", "rested"],
  ["silent", "elints", "enlist", "listen", "tinsel"],
  ["shadow"],
];

let currentAnswers = [];
let scrambledDisplayWord = "";

let userInput;
let submitAnswerBtn;
let score = 0;
let guesses = 0;
let roundTotal;
let scrambledWord;
let firstWord;
let outerDiv;

function loadScreen() {
  // Remove start screen
  // document.getElementById("titleText")?.remove();
  // document.getElementById("startGameBtn")?.remove();
  // document.getElementById("gameScreen")?.remove();

  const pages = document.querySelectorAll(".page");
  const translateAmount = 100; 
  let translate = 0;

  let slide = (direction) => {
    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    pages.forEach(
      pages => (pages.style.transform = `translateX(${translate}%)`)
    );
  }

  slide('next');

  // Create elements
  const playScreen = document.getElementById('playScreen');
  outerDiv = document.createElement("div");
  const scrambledWordTitleText = document.createElement("h1");
  scrambledWord = document.createElement("div");
  const foundWords = document.createElement("div");
  pointsDisplay = document.createElement("div");
  const rules = document.createElement('p');

  userInput = document.createElement("input");
  userInput.setAttribute('type', 'text');

  submitAnswerBtn = document.createElement("button");

  // IDs
  userInput.id = "userInput";
  outerDiv.id = "outerDiv";
  scrambledWord.id = "scrambledWord";
  foundWords.id = "foundWords";
  pointsDisplay.id = "points";
  submitAnswerBtn.id = "submitAnswerBtn";
  scrambledWordTitleText.id = "scrambledWordTitleText";
  scrambledWord.id = "scrambledWord";
  rules.id = "rules";

  // Text
  scrambledWordTitleText.textContent = "Unscramble The Word";
  submitAnswerBtn.textContent = "UNSCRAMBLE";
  

  scrambledDisplayWord = getRandomScrambledWord();
  scrambledWord.textContent = scrambledDisplayWord;
  pointsDisplay.textContent = "Score: " + score;
  rules.textContent = "Make a word using the letters below!";

  // Append elements
  playScreen.appendChild(outerDiv);
  outerDiv.appendChild(scrambledWordTitleText);
  outerDiv.appendChild(pointsDisplay);
  outerDiv.appendChild(rules);
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
  firstWord = currentAnswers[0];

  console.log(firstWord);
  userInput.setAttribute('maxlength', `${firstWord.length}`)
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
    // alert("Correct!");
    showNotification('Correct!');
    score++;
    guesses++;
    pointsDisplay.textContent = "Score: " + score;
    
    hooray();
      
    foundWords.innerHTML = "";

    scrambledDisplayWord = getRandomScrambledWord();

    scrambledWord.textContent = scrambledDisplayWord;

  } else {
      showNotification('Wrong answer!');
      // alert("Wrong answer!");
  }

  userInput.value = "";
}

function showNotification(message) {
    const container = document.querySelector('.notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function hooray(){
  const duration = 1.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 35,
      spread: 360,
      ticks: 120,
      zIndex: 1000,
    };
    const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      for (let i = 0; i < 3; i++) {
          confetti(
            Object.assign({}, defaults, {
              particleCount: 25,
                origin: {
                  x: Math.random(),
                  y: Math.random() * 0.2,
                },
            }),
          );
        }
      }, 150);
}
