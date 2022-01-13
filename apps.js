let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector (".score-board");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("r");
const paper_div = document.getElementById ("p");
const scissors_div = document.getElementById ("s"); 


function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumer = Math.floor(Math.random()*3);
    return choices [randomNumer];
}

function converToWord (letter) {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "(🧍)".fontsize(3).sup();
    const smallComputerWord = "(💻)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} beats ${converToWord(computerChoice)} ${smallComputerWord} You Win!!! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 500);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "(🧍)".fontsize(3).sup();
    const smallComputerWord = "(💻)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} lost to ${converToWord(computerChoice)} ${smallComputerWord} You Lost.. 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "(🧍)".fontsize(3).sup();
    const smallComputerWord = "(💻)".fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} = ${converToWord(computerChoice)} ${smallComputerWord} It's a Draw! 🤝`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove("grey-glow"), 500);
}

function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }   
}
function main ()  {
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissors_div.addEventListener('click', function() {
        game("s")
})
}

main ();
