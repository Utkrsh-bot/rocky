// Track scores
let userScore = 0;
let computerScore = 0;

function res(str1, str2){
  const valid = ["rock", "paper", "scissors"];
  if (!valid.includes(str1) || !valid.includes(str2)) {
      return "Write correctly";
  }

  if(str1 === str2) return "It's a draw!";

  if(str1 === "rock") {
    return str2 === "scissors" ? "win" : "loss";
  }
  if(str1 === "paper") {
    return str2 === "rock" ? "win" : "loss";
  }
  if(str1 === "scissors") {
    return str2 === "paper" ? "win" : "loss";
  }
}

function task(userChoice){
  let x = Math.random();
  let compChoice;

  if(x < 1/3){
      compChoice = "rock";
  } else if(x < 2/3){
      compChoice = "paper";
  } else {
      compChoice = "scissors";
  }

  const outcome = res(userChoice, compChoice);

  // Update scores based on result
  if (outcome === "win") userScore++;
  else if (outcome === "loss") computerScore++;

  // Update result display
  document.getElementById("result").innerHTML = `
    <p>You chose: <strong>${userChoice}</strong></p>
    <p>Computer chose: <strong>${compChoice}</strong></p>
    <p><strong>${outcome === "win" ? "You win!" : outcome === "loss" ? "You lose!" : "It's a draw!"}</strong></p>
    <p>🧮 Score — You: ${userScore} | Computer: ${computerScore}</p>
  `;
}
