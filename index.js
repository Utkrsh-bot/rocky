// Track scores
let userScore = 0;
let computerScore = 0;
let gameOver = false;

function res(str1, str2) {
  const valid = ["rock", "paper", "scissors"];
  if (!valid.includes(str1) || !valid.includes(str2)) {
    return "Write correctly";
  }

  if (str1 === str2) return "draw";
  if (str1 === "rock") return str2 === "scissors" ? "win" : "loss";
  if (str1 === "paper") return str2 === "rock" ? "win" : "loss";
  if (str1 === "scissors") return str2 === "paper" ? "win" : "loss";
}

function task(userChoice) {
  if (gameOver) return;

  const x = Math.random();
  const compChoice =
    x < 1 / 3 ? "rock" : x < 2 / 3 ? "paper" : "scissors";

  const outcome = res(userChoice, compChoice);

  // Update scores
  if (outcome === "win") userScore++;
  else if (outcome === "loss") computerScore++;

  // Build result message
  let resultMessage = `
    <p>You chose: <strong>${userChoice}</strong></p>
    <p>Computer chose: <strong>${compChoice}</strong></p>
    <p><strong>${
      outcome === "win"
        ? "You win this round!"
        : outcome === "loss"
        ? "You lose this round!"
        : "It's a draw!"
    }</strong></p>
    <p>🧮 Score — You: ${userScore} | Computer: ${computerScore}</p>
  `;

  // Check for winner
  if (userScore === 5 || computerScore === 5) {
    gameOver = true;
    resultMessage += `
      <p style="font-size: 24px; font-weight: bold; color: ${
        userScore === 5 ? "#2e7d32" : "#c62828"
      }">
        ${userScore === 5 ? "🎉 You win the game!" : "😞 Computer wins the game!"}
      </p>
      <button onclick="resetGame()">🔄 Play Again</button>
    `;
  }

  document.getElementById("result").innerHTML = resultMessage;
}

// Reset game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  gameOver = false;
  document.getElementById("result").innerHTML = "Game reset. Make your move!";
}
