document.addEventListener("DOMContentLoaded", () => {
  const rock = "rock";
  const paper = "paper";
  const scissor = "scissor";
  const playerPoints = document.getElementById("playerPoints");
  const computerPoints = document.getElementById("computerPoints");
  const roundDetails = document.getElementById("roundDetails");
  const fightBtn = document.getElementById("fightBtn");
  const resetBtn = document.getElementById("resetBtn");
  // const maxPoints = 3;

  // Jokenpo Buttons
  const playerRock = document.getElementById("playerRock");
  const playerPaper = document.getElementById("playerPaper");
  const playerScissor = document.getElementById("playerScissor");
  const playerButtons = document.getElementById("playerButtons");

  // Player Pics
  const playerPics = document.querySelectorAll(".playerPics");
  const rockPic = document.getElementById("rockPic");
  const paperPic = document.getElementById("paperPic");
  const scissorPic = document.getElementById("scissorPic");
  // const picJokenpoPlayer = document.getElementById("picJokenpoPlayer");

  // Fake AI Pics
  const computerPics = document.querySelectorAll(".computerPic");
  const computerQuestion = document.getElementById("computerQuestion");
  const computerRock = document.getElementById("computerRock");
  const computerPaper = document.getElementById("computerPaper");
  const computerScissor = document.getElementById("computerScissor");

  // Variáveis de estado
  let playerChoice = "";
  let computerChoice = "";

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

  // function getPlayerChoice() {
  //   playerChoice = prompt("Rock, Paper or Scissor?").toLowerCase();

  //   while (!["rock", "paper", "scissor"].includes(playerChoice)) {
  //     playerChoice = prompt(
  //       "Please, choose only one of the three: Rock, Paper or Scissor?",
  //     ).toLowerCase();
  //   }
  //   return playerChoice;
  // }

  function getPlayerChoice() {
    if (playerRock.checked) {
      console.log("ROCK ROCK ROCK");
      return "rock";
    } else if (playerPaper.checked) {
      console.log("PAPER PAPER PAPER");
      return "paper";
    } else {
      console.log("SCISSOR SCISSOR SCISSOR");
      return "scissor";
    }
  }

  function changePlayerPicture() {
    // Esconde todas as imagens do jogador
    playerPics.forEach((pic) => pic.classList.add("hide"));

    // Mostra a imagem selecionada
    if (playerRock.checked) {
      rockPic.classList.remove("hide");
      playerChoice = "rock";
    } else if (playerPaper.checked) {
      paperPic.classList.remove("hide");
      playerChoice = "paper";
    } else if (playerScissor.checked) {
      scissorPic.classList.remove("hide");
      playerChoice = "scissor";
    }
  }

  function revealComputerChoice(choice) {
    computerQuestion.classList.add("hide");
    computerPics.forEach((pic) => pic.classList.add("hide"));

    switch (choice) {
      case "rock":
        computerRock.classList.remove("hide");
        break;
      case "paper":
        computerPaper.classList.remove("hide");
        break;
      case "scissor":
        computerScissor.classList.remove("hide");
        break;
    }
  }

  function resetImages() {
    computerPics.forEach((pic) => pic.classList.add("hide"));
    computerQuestion.classList.remove("hide");

    changePlayerPicture();
  }

  function playRound() {
    if (!playerChoice) {
      roundDetails.textContent = "Please select an option!";
      return;
    }

    computerChoice = getComputerChoice();
    revealComputerChoice(computerChoice);
    checkWinner();
  }

  function checkWinner() {
    // if (checkGameOver()) return;

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

    // checkGameOver();
  }

  // function checkGameOver() {
  //   const playerScore = parseInt(playerPoints.textContent);
  //   const computerScore = parseInt(computerPoints.textContent);

  //   if (playerScore >= maxPoints) {
  //     roundDetails.textContent = "You won the game!";
  //     againBtn.disabled = true;
  //     return true;
  //   }
  //   if (computerScore >= maxPoints) {
  //     roundDetails.textContent = "Fake AI won the game!";
  //     againBtn.disabled = true;
  //     return true;
  //   }
  //   return false;
  // }

  // checkWinner();

  function nextRound() {
    checkWinner();
  }

  getPlayerChoice();

  function resetBattle() {
    playerPoints.textContent = "0";
    computerPoints.textContent = "0";
    roundDetails.textContent = "";
    resetImages();
  }

  // Event Listeners
  fightBtn.addEventListener("click", playRound);
  resetBtn.addEventListener("click", resetBattle);

  // Change player picture
  playerRock.addEventListener("change", changePlayerPicture);
  playerPaper.addEventListener("change", changePlayerPicture);
  playerScissor.addEventListener("change", changePlayerPicture);

  // Inicializa com uma seleção padrão
  playerRock.checked = true;
  changePlayerPicture();
});
