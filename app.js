const user = document.querySelector('#user-choice');
const rock = document.getElementById('rock');
rock.addEventListener('click', function() {
    user.innerText = "rock";
});
const paper = document.getElementById('paper');
paper.addEventListener('click', function() {
    user.innerText = "paper";
});
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {
    user.innerText = "scissors";
});

