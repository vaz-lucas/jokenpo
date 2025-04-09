document.addEventListener("DOMContentLoaded", () => {
  let playerChoice = "";
  const rock = "rock";
  const paper = "paper";
  const scissor = "scissor";
  const playerPoints = document.getElementById("playerPoints");
  const computerPoints = document.getElementById("computerPoints");
  const againBtn = document.getElementById("againBtn");
  const roundDetails = document.getElementById("roundDetails");
  const maxPoints = 3;

  function getComputerChoice() {
    let computerResult = Math.ceil(Math.random() * 3);
    if (computerResult === 1) {
      return "rock";
    }
    if (computerResult === 2) {
      return "paper";
    } else {
      return "scissor";
    }
  }

  function getPlayerChoice() {
    playerChoice = prompt("Rock, Paper or Scissor?").toLowerCase();

    while (!["rock", "paper", "scissor"].includes(playerChoice)) {
      playerChoice = prompt(
        "Please, choose only one of the three: Rock, Paper or Scissor?",
      ).toLowerCase();
    }
    return playerChoice;
  }

  function checkWinner() {
    if (checkGameOver()) return;

    const computerInput = getComputerChoice();
    const playerInput = getPlayerChoice();
    console.log("Fake AI: " + computerInput);
    console.log("Player: " + playerInput);

    if (
      (playerInput === "rock" && computerInput === "scissor") ||
      (playerInput === "scissor" && computerInput === "paper") ||
      (playerInput === "paper" && computerInput === "rock")
    ) {
      playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
      roundDetails.textContent = "You won this round!";
    }
    if (
      (computerInput === "rock" && playerInput === "scissor") ||
      (computerInput === "scissor" && playerInput === "paper") ||
      (computerInput === "paper" && playerInput === "rock")
    ) {
      computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
      roundDetails.textContent = "Fake AI won this round!";
    }
    if (playerInput === computerInput) {
      roundDetails.textContent = "Round tie!";
    }

    checkGameOver();
  }

  function checkGameOver() {
    const playerScore = parseInt(playerPoints.textContent);
    const computerScore = parseInt(computerPoints.textContent);

    if (playerScore >= maxPoints) {
      roundDetails.textContent = "You won the game!";
      againBtn.disabled = true;
      return true;
    }
    if (computerScore >= maxPoints) {
      roundDetails.textContent = "Fake AI won the game!";
      againBtn.disabled = true;
      return true;
    }
    return false;
  }

  checkWinner();

  function nextRound() {
    checkWinner();
  }

  againBtn.addEventListener("click", nextRound);
});
