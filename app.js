const user = document.querySelector('#user-choice');
const computer = document.querySelector('#computer-choice');
const computerChoice = ["rock", "paper", "scissors"];
const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    user.innerText = "rock";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
});
const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    user.innerText = "paper";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
});
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    user.innerText = "scissors";
    computer.innerText = computerChoice[Math.floor(Math.random()*3)];
});

