const User = {
  score: 0
}

const Computer = {
  score: 0
}

function getComputerChoice() {
	return Math.round(Math.random() * 2) // 0, 1, 2
}

function getPlayerChoice() {
  document.querySelector('.menu').addEventListener('click', event => {
    playRound(event.target.id)
  }
)};

function playRound(playerSelection) {
  let peopleScore = document.querySelector('.people')
	let compScore = document.querySelector('.comp')
  
  let computerSelection = getComputerChoice()
  let result = "Делай ход";
  
  
  if(playerSelection) {
		let roundResult = computerSelection - playerSelection

		if (roundResult == 0) {
			result = 'ничья'
			console.log('ничья')
		} else if (roundResult == 1 || roundResult == -2) {
			console.log('ты победил')
			result = 'ты победил'
			User.score++
		} else {
			result = 'ты проиграл'
			console.log('ты проиграл')
			Computer.score++
		}
    	peopleScore.textContent = User.score
			compScore.textContent = Computer.score
	}
		let resultElem = document.querySelector('.result')
		resultElem.innerHTML = result
    
    
  console.log(
		'Победы игрока: ' +
			User.score +
			' ,' +
			'Победы компьютера: ' +
			Computer.score,
	)
}

window.addEventListener('load', () => {

  playRound()
})
  getPlayerChoice()