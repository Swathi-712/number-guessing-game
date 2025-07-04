let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100.";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "green";
  } else if (userGuess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
    message.style.color = "orange";
  } else {
    message.textContent = "📈 Too high! Try again.";
    message.style.color = "orange";
  }
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}