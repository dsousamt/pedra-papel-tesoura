
const elements = ["Pedra", "Papel", "Tesoura"];

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return elements[randomNum];
}

computerPlay()