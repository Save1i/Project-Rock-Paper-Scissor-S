let scoreComp = 0;

let scorePeople = 0;

let comp = (function random() {
    let choice = Math.random() * (3 - 1) * 1; // 0, 1, 2
    let result = choice.toFixed();
    return result;
})();

// новая запись присвоения переменной значения функции:

// let Anylet = (function( {
//     ..x..
//     return x;
// }());

let computerSelection = function getComputerChoice() {
    if (comp === "0") {
        return "Камень";
    } else if (comp === "1") {
        return "Ножницы";
    } else {
        return "Бумага";
    }
};

// alert(computerSelection());

function playerSelection() {
    let playerChoiceNoRegister = prompt(
        "Выбери: Камень, Ножницы, Бумага!",
        "Бумага"
    );

    let playerChoice = playerChoiceNoRegister.toLowerCase();

    if (playerChoice === "камень") {
        return "Камень";
    } else if (playerChoice === "ножницы") {
        return "Ножницы";
    } else if (playerChoice === "бумага") {
        return "Бумага";
    } else {
        return "Не мухлюй";
    }
}

// alert(playerSelection());

// Ситуации:
// 1. камень бьет ножницы
// 2. бумага бьет камень
// 3. ножницы бьют бумагу

function playRound(computerSelection, playerSelection) {
    if (computerSelection === "Камень" && playerSelection === "Ножницы") {
        scoreComp++;
        return "Камень бьет ножницы. Ты проигал(";
    } else if (computerSelection === "Бумага" && playerSelection === "Камень") {
        scoreComp++;
        return "Бумага бьет камень. Ты проиграл(";
    } else if (computerSelection == "Ножницы" && playerSelection === "Бумага") {
        scoreComp++;
        return "Ножницы бьют бумагу. Ты проиграл(";
    } else if (
        computerSelection === "Бумага" &&
        playerSelection === "Ножницы"
    ) {
        scorePeople++;
        return "Ножницы бьют бумагу. Ты выйграл)";
    } else if (
        computerSelection === "Ножницы" &&
        playerSelection === "Камень"
    ) {
        scorePeople++;
        return "Камень бьет ножницы. Ты выйграл)";
    } else if (computerSelection === "Камень" && playerSelection === "Бумага") {
        scorePeople++;
        console.log(
            "Победы игрока: " +
                scorePeople +
                " ," +
                "Победы компьютера: " +
                scoreComp
        );
        return "Бумага бьет камень. Ты выйграл)";
    } else {
        return "Ничья!";
    }
}

console.log(
    "Победы игрока: " + scorePeople + " ," + "Победы компьютера: " + scoreComp
);

alert(playRound(computerSelection(), playerSelection()));
