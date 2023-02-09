function getComputerChoice() {
    const moves = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

// let playerSelection = prompt("Elige entre piedra, papel o tijera").toLowerCase();
let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
const display = document.getElementById("result");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
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

const result = document.createElement('p');


const clickPiedra = function() {
  playRound('piedra', getComputerChoice());
  result.textContent = 'Jugador ' + playerScore + ' - ' + computerScore + ' Computador';
  if (playerScore >= 5 || computerScore >= 5) {
    stopGame();
  };
};

const clickPapel = function() {
  playRound('papel', getComputerChoice());
  result.textContent = 'Jugador ' + playerScore + ' - ' + computerScore + ' Computador';
  if (playerScore >= 5 || computerScore >= 5) {
    stopGame();
  };
}

const clickTijera = function() {
  playRound('tijera', getComputerChoice());
  result.textContent = 'Jugador ' + playerScore + ' - ' + computerScore + ' Computador';
  if (playerScore >= 5 || computerScore >= 5) {
    stopGame();
  };
}

piedra.addEventListener("click", clickPiedra);
papel.addEventListener("click", clickPapel);
tijera.addEventListener("click", clickTijera);

display.appendChild(result);

function stopGame() {
  piedra.removeEventListener("click", clickPiedra);
  papel.removeEventListener("click", clickPapel);
  tijera.removeEventListener("click", clickTijera);
  if (playerScore == 5) {
    const won = document.createElement('p');
    won.textContent = 'Ganaste!';
    display.appendChild(won);
  }
  else if (computerScore == 5) {
    const lost = document.createElement('p');
    lost.textContent = 'Perdiste!';
    display.appendChild(lost);
  }
};

// function game() {
//   while (playerScore < 5 && computerScore < 5) {
//     playerSelection = prompt("Elige entre piedra, papel o tijera").toLowerCase();
//     computerSelection = getComputerChoice();
//     playRound(playerSelection,computerSelection)
//     alert("Jugador " + playerScore + " - " + computerScore + " Computador") 
//   }
//   if (playerScore == 5) {
//     alert('¡Ganaste!')
//   }
//   else {
//     alert('¡Perdiste!')
//   }
// }

// console.log(game());
