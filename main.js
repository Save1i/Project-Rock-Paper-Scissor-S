function getComputerChoice(min, max) {
    let choice = Math.random() * (max - min) * min; // 1 ... 3
    alert(choice.toFixed(0));
}

getComputerChoice(1, 4);
