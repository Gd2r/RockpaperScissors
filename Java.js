function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanChoice() {
        let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
        while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
            choice = prompt("Invalid choice. Please enter either rock, paper, or scissors").toLowerCase();
        }
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        }

        console.log("Score: Human " + humanScore + " - Computer " + computerScore);
    }

    // loop for the 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log("Humans are better! You won the game with a score of " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("Sorry Bots are taking over the world! The computer won the game with a score of " + computerScore + " to " + humanScore);
    } else {
        console.log("The game is a tie! Both scored " + humanScore);
    }
}
