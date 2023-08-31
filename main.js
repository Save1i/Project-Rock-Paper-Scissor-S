let scoreComp = 0;

let scorePeople = 0;

// let comp = (function random() {
//     let choice = Math.round(Math.random() * 2); // 0, 1, 2
//     return choice;
// })();

function random() {
    let choice = Math.round(Math.random() * 2); // 0, 1, 2
    return choice;
}

console.log(random());

// console.log(comp);

// новая запись присвоения переменной значения функции:

// let Anylet = (function( {
//     ..x..
//     return x;
// }());

function getComputerChoice() {
    if (random() == 0) {
        return "Камень";
    } else if (random() == 1) {
        return "Ножницы";
    } else {
        return "Бумага";
    }
}

// let rock = document.querySelector(".rock");
// let scissors = document.querySelector(".scissors");
// let paper = document.querySelector(".paper");
// console.log(rock);

// let buttons = document.getElementsByClassName("btn");
// let buttonScissors = document.getElementByClassName("scissors")[1];
// let buttonPaper = document.getElementByClassName("paper")[2];

// let buttons = document.querySelectorAll("button");
let playerSelection = () => {
    document.querySelector("#btn1").onclick = function () {
        playRound("Камень");
    };
    document.querySelector("#btn2").onclick = function () {
        playRound("Ножницы");
    };
    document.querySelector("#btn3").onclick = function () {
        playRound("Бумага");
    };
};
console.log(playerSelection());

// for (i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = function () {
//         console.log(buttons.value);
//     };
// }

// buttons.forEach((button) => {
//     button.addEventListener("click", function () {
//         console.log(buttons.value);
//     });
// });
// buttonRock.onclick = function () {
//     alert("hahahhaa");
// };

// buttonRock.onclick = function () {
//     console.log("Rock");
// };
// console.log(playerSelection());
// function playerSelection() {
//     if (button) {
//         return "Камень";
//     } else if (scissors) {
//         return "Ножницы";
//     } else if (paper) {
//         return "Бумага";
//     } else {
//         return "Не мухлюй";
//     }
// }
// alert(computerSelection());
// ________________________________________________________________________________________
// function playerSelection() {
//     let playerChoiceNoRegister = prompt(
//         "Выбери: Камень, Ножницы, Бумага!",
//         "Бумага"
//     );

//     let playerChoice = playerChoiceNoRegister.toLowerCase();

//     if (playerChoice === "камень") {
//         return "Камень";
//     } else if (playerChoice === "ножницы") {
//         return "Ножницы";
//     } else if (playerChoice === "бумага") {
//         return "Бумага";
//     } else {
//         return "Не мухлюй";
//     }
// }
// ________________________________________________________________________________________________
// alert(playerSelection());

// Ситуации:
// 1. камень бьет ножницы
// 2. бумага бьет камень
// 3. ножницы бьют бумагу

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    console.log(playerSelection);
    console.log(computerSelection + " rjvg");
    if (
        (computerSelection == "Камень" && playerSelection == "Ножницы") ||
        (computerSelection == "Бумага" && playerSelection == "Камень") ||
        (computerSelection == "Ножницы" && playerSelection == "Бумага")
    ) {
        scoreComp++;
        result = "Ты проиграл";

        let people = document.querySelector(".people");
        people.innerHTML = scorePeople;

        let comp = document.querySelector(".comp");
        comp.innerHTML = scoreComp;
        console.log(
            "Победы игрока: " +
                scorePeople +
                " ," +
                "Победы компьютера: " +
                scoreComp
        );
    } else if (
        (computerSelection == "Бумага" && playerSelection == "Ножницы") ||
        (computerSelection == "Ножницы" && playerSelection == "Камень") ||
        (computerSelection == "Камень" && playerSelection == "Бумага")
    ) {
        scorePeople++;
        result = "Ты выйграл";

        let people = document.querySelector(".people");
        people.innerHTML = scorePeople;

        let comp = document.querySelector(".comp");
        comp.innerHTML = scoreComp;
        console.log(
            "Победы игрока: " +
                scorePeople +
                " ," +
                "Победы компьютера: " +
                scoreComp
        );
    } else {
        result = "Ничья";
        scoreComp;
        scorePeople;

        let people = document.querySelector(".people");
        people.innerHTML = scorePeople;

        let comp = document.querySelector(".comp");
        comp.innerHTML = scoreComp;

        console.log(
            "Победы игрока: " +
                scorePeople +
                " ," +
                "Победы компьютера: " +
                scoreComp
        );
    }
    let resultElem = document.querySelector(".result");
    resultElem.innerHTML = result;

    return;
}

console.log(playRound(playerSelection));
