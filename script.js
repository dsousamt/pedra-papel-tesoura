
const elements = ["Pedra", "Papel", "Tesoura"];

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return elements[randomNum];
}

const playerSelection = "Pedra".toLocaleLowerCase();
const computerSelection = computerPlay().toLocaleLowerCase();

// Pedra - Pedra, ----
// Papel - Papel, -----
// Tesoura - Tesoura ----

// Pedra - Papel, 
// Pedra - Tesoura
// Papel - Tesoura


const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection + computerSelection) {
    case "pedra"+"papel":
      return "Você perdeu! Papel cobre pedra"
      break;
    case "papel"+"pedra":
      return "Você ganhou! Papel cobre pedra"
      break;
    case "pedra"+"tesoura":
      return "Você ganhou! Pedra quebra tesoura"
      break;
    case "tesoura"+"pedra":
      return "Você perdeu! Pedra quebra tesoura"
      break;
    case "papel"+"tesoura":
      return "Você perdeu! Tesoura corta papel"
      break;
    case "tesoura"+"papel":
      return "Você ganhou! Tesoura corta papel"
      break;

    default:
      return "Empate!"
      break;
  }
  
}

console.log(playRound(playerSelection, computerSelection));