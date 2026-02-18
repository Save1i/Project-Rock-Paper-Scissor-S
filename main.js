const User = {
  score: 0
}

const Computer = {
  score: 0
}


// перенести в функцию самой игры
let peopleScore = document.querySelector(".people");
let compScore = document.querySelector(".comp");
peopleScore.textContent = scorePeople;
compScore.textContent = scoreComp;
//


function getComputerChoice() {
	return Math.round(Math.random() * 2) // 0, 1, 2
}

let playerSelection = ""; // Начальное значение

const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "btn1":
      playerSelection = "Камень"; // Устанавливаем значение при нажатии кнопки
      playRound(playerSelection);
      break;
    case "btn2":
      playerSelection = "Ножницы"; // Устанавливаем значение при нажатии кнопки
      playRound(playerSelection);
      break;
    case "btn3":
      playerSelection = "Бумага"; // Устанавливаем значение при нажатии кнопки
      playRound(playerSelection);
      break;
  }
});

function playRound(playerSelection) {
  let randNum = random();
  let computerSelection = getComputerChoice(randNum)
  let result = "";

  if (playerSelection == "") {
    result = "Let`s go";
  } else if (
    (computerSelection == "Камень" && playerSelection == "Ножницы") ||
    (computerSelection == "Бумага" && playerSelection == "Камень") ||
    (computerSelection == "Ножницы" && playerSelection == "Бумага")
  ) {
    scoreComp++;
    result = "Ты проиграл";

    people.innerHTML = scorePeople;
    comp.innerHTML = scoreComp;
  } else if (
    (computerSelection == "Бумага" && playerSelection == "Ножницы") ||
    (computerSelection == "Ножницы" && playerSelection == "Камень") ||
    (computerSelection == "Камень" && playerSelection == "Бумага")
  ) {
    scorePeople++;
    result = "Ты выйграл";

    people.innerHTML = scorePeople;
    comp.innerHTML = scoreComp;
  } else {
    result = "Ничья";
  }

  let resultElem = document.querySelector(".result");
  resultElem.innerHTML = result;

  console.log("Победы игрока: " + scorePeople + " ," + "Победы компьютера: " + scoreComp);
}
