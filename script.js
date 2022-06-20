
const elements = ["Pedra", "Papel", "Tesoura"];

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return elements[randomNum];
}

let playerSelection = "Pedra".toLocaleLowerCase();
let computerSelection = computerPlay().toLocaleLowerCase();
let score = [0,0];

const playRound = (playerSelection, computerSelection) => {
  
  switch (playerSelection + computerSelection) {
    case "pedra"+"papel":
      score[1] += 1;
      return "Você perdeu! Papel cobre pedra";
      break;
    case "papel"+"pedra":
      score[0] += 1;
      return "Você ganhou! Papel cobre pedra"
      break;
    case "pedra"+"tesoura":
      score[0] += 1;
      return "Você ganhou! Pedra quebra tesoura"
      break;
    case "tesoura"+"pedra":
      score[1] += 1;
      return "Você perdeu! Pedra quebra tesoura"
      break;
    case "papel"+"tesoura":
      score[1] += 1;
      return "Você perdeu! Tesoura corta papel"
      break;
    case "tesoura"+"papel":
      score[0] += 1;
      return "Você ganhou! Tesoura corta papel"
      break;

    default:
      return "Empate!"
      break;
  }
  
}

const playGame = () => {
  for (let index = 0; index < 5; index++) {
    playerSelection = prompt("Qual a sua escolha? Pedra, Papel ou Tesoura?");
    computerSelection = computerPlay().toLocaleLowerCase();
    console.log(playRound(playerSelection, computerSelection));    
  }
  if (score[0] > score[1]) {
    return console.log('Parabéns! Você ganhou a partida');
  } else if (score[0] < score[1]) {
    return console.log('Que pena! Você perdeu a partida');
  } else {
    return console.log('Ninguém ganhou, deu empate');
  }
}