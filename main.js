let scoreComp = 0;
let scorePeople = 0;

let people = document.querySelector(".people");
let comp = document.querySelector(".comp");

people.textContent = scorePeople;
comp.textContent = scoreComp;

function random() {
  let choice = Math.round(Math.random() * 2); // 0, 1, 2
  return choice;
}

console.log(random());

function getComputerChoice() {
  if (random() == 0) {
    return "Камень";
  } else if (random() == 1) {
    return "Ножницы";
  } else {
    return "Бумага";
  }
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

let result = "Let`s go";
let resultElem = document.querySelector(".result");
resultElem.innerHTML = result;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  let result = "";

  if (
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

  if (scoreComp === 5 || scorePeople === 5) {
    document.querySelectorAll(".menu button").forEach((btn) => {
      console.log(btn);
      btn.disabled = true;
      btn.style = "background-color: #c1dfff";
    });
    return;
  }
}
