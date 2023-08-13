let comp = function random() {
    let choice = Math.random() * (3 - 1) * 1; // 0, 1, 2
    return choice.toFixed(0);
};

// alert(comp());

function getComputerChoice() {
    if (comp() == 0) {
        return "Камень";
    } else if (comp() == 1) {
        return "Ножницы";
    } else {
        return "Бумага";
    }
}
getComputerChoice();
