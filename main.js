let comp = (function random() {
    let choice = Math.random() * (3 - 1) * 1; // 0, 1, 2
    let result = choice.toFixed();
    return result;
})();

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
        return "Камень бьет ножницы. Ты проигал(";
    } else if (computerSelection === "Бумага" && playerSelection === "Камень") {
        return "Бумага бьет камень. Ты проиграл(";
    } else if (computerSelection == "Ножницы" && playerSelection === "Бумага") {
        return "Ножницы бьют бумагу. Ты проиграл(";
    } else if (
        computerSelection === "Бумага" &&
        playerSelection === "Ножницы"
    ) {
        return "Ножницы бьют бумагу. Ты выйграл)";
    } else if (
        computerSelection === "Ножницы" &&
        playerSelection === "Камень"
    ) {
        return "Камень бьет ножницы. Ты выйграл)";
    } else if (computerSelection === "Камень" && playerSelection === "Бумага") {
        return "Бумага бьет камень. Ты выйграл)";
    } else {
        return "Ничья!";
    }
}

alert(playRound(computerSelection(), playerSelection()));
