function getComputerChoice() {
    const moves = ['piedra', 'papel', 'tijera'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

const playerSelection = prompt("Elige entre piedra, papel o tijera");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "¡Es un empate!";
    }
    else if (playerSelection === 'piedra') {
        if (computerSelection === 'papel') {
          return "¡Perdiste! Papel vence a Piedra";
        } else {
          return "¡Ganaste! Piedra vence a Tijera";
        }
    } else if (playerSelection === 'papel') {
        if (computerSelection === 'tijera') {
          return "¡Perdiste! Tijera vence a Papel";
        } else {
          return "¡Ganaste! Papel vence a Tijera";
        }
    } else if (playerSelection === 'tijera') {
        if (computerSelection === 'piedra') {
          return "¡Perdiste! Piedra vence a Tijera";
        } else {
          return "¡Ganaste! Tijera vence a Papel";
        }
    } else {
        return "Entrada inválida. Por favor escribe 'piedra', 'papel', o 'tijera'";
    }
}

console.log(playRound(playerSelection, computerSelection));
