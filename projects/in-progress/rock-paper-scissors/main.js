/* New Game button switched from start page to game page */
document.getElementById("new-game").addEventListener("click", newGame);

function newGame() {
  document.getElementById("landing-page").className += " hide";
  document.getElementById("page-title").classList.remove("hide");
  document.getElementById("game-page").classList.remove("hide");
  document.getElementById("top-nav").classList.remove("hide");
  document.getElementById("score-panel").classList.remove("hide");
}

/* Exit back to landing page */
document.getElementById("exit").addEventListener("click", exitGame);

function exitGame() {
  document.getElementById("landing-page").classList.remove("hide");
  document.getElementById("page-title").className += " hide";
  document.getElementById("game-page").className += " hide";
  document.getElementById("top-nav").className += " hide";
  document.getElementById("score-panel").className += " hide";
}
/* Show who won the round */
document.getElementById("winner-page").addEventListener("click", displayWinner);

function displayWinner() {
  document.getElementById("winner-page").classList.remove("hide");
  document.getElementById("landing-page").className += " hide";
}
/* Get player's Selection*/
document.getElementById("game-page").addEventListener("mousedown", function(e){
  var playerChoice = e.target.id;
  game(playerChoice);
  waitComputerChoice(playerChoice);
 });
 
 
function game (playerChoice){
    let playerSelection = playerChoice;
 /* Computer's Random choice */
    const plays = ["Rock", "Paper", "Scissors"];
    const computerSelection = plays[Math.floor(Math.random() * plays.length)];
    console.log("The computer chose " + computerSelection);
    
    console.log(playRound(playerSelection, computerSelection));
    function playRound(playerSelection, computerSelection) {
        if ( playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Rock") {
                return(`You won! ${playerSelection} beats ${computerSelection}!`);    
            } else if (playerSelection === computerSelection) {
                return("It's a tie play again.");
            } else {
                return(`You lost! ${computerSelection} beats ${playerSelection}!`);
            }
    }
}
