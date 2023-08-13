let comp = function getComputerChoice() {
    let choice = Math.random() * (3 - 1) * 1; // 0, 1, 2.
    return choice.toFixed(0);
};

alert(comp());
