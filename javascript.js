function getComputerChoice() {
    const moves = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

let playerSelection = prompt("Elige entre piedra, papel o tijera").toLowerCase();
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "¡Es un empate!";
    }
    else if (playerSelection === 'piedra') {
        if (computerSelection === 'papel') {
          computerScore +=1;
          return {
            playerScore: playerScore,
            computerScore: computerScore,
        }
        } else {
          playerScore +=1;
          return {
            playerScore: playerScore,
            computerScore: computerScore,
        }
        }
    } else if (playerSelection === 'papel') {
        if (computerSelection === 'tijera') {
          computerScore +=1;
          return {
            playerScore: playerScore,
            computerScore: computerScore,
        }
        } else {
          playerScore +=1;
          return "¡Ganaste! Papel vence a Tijera";
        }
    } else if (playerSelection === 'tijera') {
        if (computerSelection === 'piedra') {
          computerScore +=1;
          return {
            playerScore: playerScore,
            computerScore: computerScore,
        }
        } else {
          playerScore +=1;
          return {
            playerScore: playerScore,
            computerScore: computerScore,
        }
        }
    } else {
        return "Entrada inválida. Por favor escribe 'piedra', 'papel', o 'tijera'";
    }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    playerSelection = prompt("Elige entre piedra, papel o tijera").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
    alert("Jugador " + playerScore + " - " + computerScore + " Computador") 
  }
  if (playerScore == 5) {
    alert('¡Ganaste!')
  }
  else {
    alert('¡Perdiste!')
  }
}

console.log(game());
