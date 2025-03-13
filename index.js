let arr = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = arr[Math.floor(Math.random() * 3)];
    console.log(choice);
    return choice;
}

function getHumanChoice(){
    let choice = prompt("rock/paper/scissors???");
    console.log(choice);
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice)return 0;
        else if (humanChoice == "rock" && computerChoice == "scissors")return 1;
        else if (humanChoice == "paper" && computerChoice == "rock")return 1;
        else if (humanChoice == "scissors" && computerChoice == "paper")return 1;
        else return -1;
    }
    let i = 0;
    while (i < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let score = playRound(humanSelection, computerSelection);
        if (score == 1)humanScore += 1;
        else if (score == -1)computerScore += 1;
        console.log("you:" + humanScore + "  computer:" + computerScore)
        ++i;
    }
    if (humanScore > computerScore)console.log("you win");
    else if (humanScore < computerScore)console.log("you lose");
    else console.log("tie");
}

playGame();