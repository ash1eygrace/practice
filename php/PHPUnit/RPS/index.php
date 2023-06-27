<?php

function getComputerChoice() {
    $choices = ["rock", "paper", "scissors"];
    return $choices[array_rand($choices)];
}

function getGameResult($playerChoice, $computerChoice) {
    if($playerChoice === $computerChoice) {
        return "It's a draw!";
    } else {
        switch($playerChoice) {
            case 'rock':
                return $computerChoice === 'scissors' ? "Player wins!" : "Computer wins!";
            case 'paper':
                return $computerChoice === 'rock' ? "Player wins!" : "Computer wins!";
            case 'scissors':
                return $computerChoice === 'paper' ? "Player wins!" : "Computer wins!";
        }
    }
}
