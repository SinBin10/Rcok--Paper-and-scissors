const user = document.querySelector('#user-choice');
const computer = document.querySelector('#computer-choice');
const result = document.querySelector('#result');
const computerChoice = ["rock", "paper", "scissors"];
const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    user.innerText = "rock";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
    if(computer.innerText === "paper")
    result.innerText = "Lose";
    if(computer.innerText === "scissors")
    result.innerText = "Win";
    if(computer.innerText === "rock")
    result.innerText = "Draw";
});
const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    user.innerText = "paper";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
    if(computer.innerText === "rock")
    result.innerText = "Win";
    if(computer.innerText === "scissors")
    result.innerText = "Lose";
    if(computer.innerText === "paper")
    result.innerText = "Draw";
});
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    user.innerText = "scissors";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
    if(computer.innerText === "paper")
    result.innerText = "Win";
    if(computer.innerText === "scissors")
    result.innerText = "Draw";
    if(computer.innerText === "rock")
    result.innerText = "Lose";
});



