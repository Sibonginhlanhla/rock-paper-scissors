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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice)return 0;
    else if (humanChoice == "rock" && computerChoice == "scissors")return 1;
    else if (humanChoice == "paper" && computerChoice == "rock")return 1;
    else if (humanChoice == "scissors" && computerChoice == "paper")return 1;
    else return -1;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
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

const buttons = document.querySelectorAll("button");
const hScore = document.querySelector("#my-score");
const cScore = document.querySelector("#computer-score");
let lastOne = document.querySelector("#last-one");
let lastTwo = document.querySelector("#last-two");
let roundsOne = document.querySelector("#rounds-one");
let roundsTwo = document.querySelector("#rounds-two");
let humanScore = 0;
let computerScore = 0;
let roundsWon = 0;
let roundsLost = 0;

function updateScore() {
    if (computerScore === 6 || humanScore === 6){
        const winner = document.querySelector("#winner");
        if (computerScore == 6){
            winner.textContent = "computer";
            roundsLost += 1;
            roundsTwo.textContent = roundsLost;
        }
        else {
            winner.textContent = "me";
            roundsWon += 1;
            roundsOne.textContent = roundsWon;
        }
        humanScore = 0;
        computerScore = 0;
        cScore.textContent = "0";
        hScore.textContent = "0";
    }
    hScore.textContent = `${humanScore}`;
    cScore.textContent = `${computerScore}`;
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let myChoice = button.textContent;
        let comChoice = getComputerChoice();
        lastOne.textContent = myChoice;
        lastTwo.textContent = comChoice;
        let score = playRound(myChoice, comChoice);
        if (score == 1)humanScore += 1;
        else if (score == -1)computerScore += 1;
        updateScore();
    });
});