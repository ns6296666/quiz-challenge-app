const TotalQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Madrid", "Rome"],
    correctIndex: 1,
  },
  {
    question:
      "Which programming language is this code written in? \n\n```python\nprint('Hello, World!')```",
    answers: ["Java", "Python", "C++", "JavaScript"],
    correctIndex: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctIndex: 1,
  },
  {
    question: "Which of the following is not a primary color?",
    answers: ["Red", "Blue", "Yellow", "Green"],
    correctIndex: 3,
  },
  {
    question: "In what year did Christopher Columbus reach the Americas?",
    answers: ["1492", "1607", "1776", "1812"],
    correctIndex: 0,
  },
];
console.log("cliked");
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

// function to start quiz
function startQuiz() {
  document.getElementById("questions").style.display = "block";
  document.getElementById("end-screen").style.display = "none";
  startTimer();
  showQuestion();
}

// function to start timer
function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0 || currentQuestionIndex === TotalQuestions.length) {
      endQuiz();
    }
  }, 1000);
}

// function to show question
function showQuestion() {
  const currentQuestion = TotalQuestions[currentQuestionIndex];
  document.getElementById("question-title").textContent =
    currentQuestion.question;

  const answersContainer = document.getElementById("choices");
  answersContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = currentQuestion.answers[i];
    button.onclick = function () {
      checkAnswer(i);
    };
    answersContainer.appendChild(button);
  }
}
// function to check answer
function checkAnswer(answerIndex) {
  console.log("next question", currentQuestionIndex);
  const currentQuestion = TotalQuestions[currentQuestionIndex];
  if (answerIndex === currentQuestion.correctIndex) {
    // Correct answer, move to the next question
    console.log("next question", currentQuestionIndex++);
    currentQuestionIndex++;
    if (currentQuestionIndex < TotalQuestions.length) {
      console.log("showQuestion", showQuestion());
      showQuestion();
    } else {
      endQuiz();
    }
  } else {
    //Incorrect answer, subtract time
    timeLeft -= 10;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }
}
// function to end quiz
function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("questions").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  document.getElementById("final-score").textContent = timeLeft;
}

function saveScore() {
  const initials = document.getElementById("initials").value;
  alert("Score saved: " + initials + " - " + timeLeft);
}
