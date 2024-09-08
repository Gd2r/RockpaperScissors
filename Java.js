function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        const roundResult = document.getElementById('round-result');
        const score = document.getElementById('score');
        const gameWinner = document.getElementById('game-winner');

        if (humanChoice === computerChoice) {
            roundResult.textContent = `It's a tie`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            roundResult.textContent = `You win the round!`;
        } else {
            computerScore++;
            roundResult.textContent = `You lose the round! computer wins`;
        }

        score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

        if (humanScore + computerScore === 5) {
            if (humanScore > computerScore) {
                gameWinner.textContent = `Humans are better! You won the game (score is ${humanScore} - ${computerScore})`;
            } else if (computerScore > humanScore) {
                gameWinner.textContent = `Sorry, Bots are taking over the world! The computer won (score is ${humanScore} - ${computerScore})`;
            } else {
                gameWinner.textContent = `The game is a tie! (score is ${humanScore} - ${computerScore})`;
            }
            humanScore = 0;
            computerScore = 0;
        }
    }

    document.getElementById('rock').addEventListener('click', () => playRound('rock'));
    document.getElementById('paper').addEventListener('click', () => playRound('paper'));
    document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
}

// Call playGame to set up event listeners
playGame();
