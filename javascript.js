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
  let playerChoice = "rock";
  let computerChoice = "";

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 3)];
  }

  function getPlayerChoice() {
    if (playerRock.checked) return "rock";
    if (playerPaper.checked) return "paper";
    return "scissor";
  }

  function changePlayerPicture() {
    // Esconde todas as imagens do jogador
    playerPics.forEach((pic) => pic.classList.add("hide"));

    // Mostra apenas a imagem selecionada
    playerChoice = getPlayerChoice(); // Atualiza a variável de estado
    document.getElementById(`${playerChoice}Pic`).classList.remove("hide");
  }

  function revealComputerChoice(choice) {
    computerQuestion.classList.add("hide");
    computerPics.forEach((pic) => pic.classList.remove("hide"));
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
    computerQuestion.classList.remove("hide");
    computerPics.forEach((pic) => pic.classList.add("hide"));
    changePlayerPicture();
  }

  function playRound() {
    playerChoice = getPlayerChoice(); // Garante que temos o valor atual
    computerChoice = getComputerChoice();

    revealComputerChoice(computerChoice);
    checkWinner(playerChoice, computerChoice);
  }

  function checkWinner(playerInput, computerInput) {
    console.log("Player:", playerInput, "| AI:", computerInput);

    if (playerInput === computerInput) {
      roundDetails.textContent = "Round tie!";
      return;
    }

    const winConditions = {
      rock: "scissor",
      paper: "rock",
      scissor: "paper",
    };
    if (winConditions[playerInput] === computerInput) {
      playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
      roundDetails.textContent = "You won this round!";
    } else {
      computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
      roundDetails.textContent = "Fake AI won this round!";
    }
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

  // getPlayerChoice();

  function resetBattle() {
    playerPoints.textContent = "0";
    computerPoints.textContent = "0";
    roundDetails.textContent = "";
    playerRock.checked = true;
    playerChoice = "rock";
    resetImages();
  }

  // Event Listeners
  fightBtn.addEventListener("click", playRound);
  resetBtn.addEventListener("click", resetBattle);
  playerRock.addEventListener("change", changePlayerPicture);
  playerPaper.addEventListener("change", changePlayerPicture);
  playerScissor.addEventListener("change", changePlayerPicture);

  // Change player picture
  playerRock.addEventListener("change", changePlayerPicture);
  playerPaper.addEventListener("change", changePlayerPicture);
  playerScissor.addEventListener("change", changePlayerPicture);

  // Inicializa com uma seleção padrão
  changePlayerPicture();
});
