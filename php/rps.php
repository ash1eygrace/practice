<?php

$choices = ["rock", "paper", "scissors"];
$computerChoice = $choices[array_rand($choices)];

echo "Enter your choice (rock, paper, scissors): ";
$playerChoice = trim(fgets(STDIN));

if(!in_array($playerChoice, $choices)) {
    echo "Invalid choice. Please choose either rock, paper or scissors.\n";
    exit(1);
}

echo "Player chose: $playerChoice\n";
echo "Computer chose: $computerChoice\n";

if($playerChoice === $computerChoice) {
    echo "It's a draw!\n";
} else {
    switch($playerChoice) {
        case 'rock':
            echo $computerChoice === 'scissors' ? "Player wins!\n" : "Computer wins!\n";
            break;
        case 'paper':
            echo $computerChoice === 'rock' ? "Player wins!\n" : "Computer wins!\n";
            break;
        case 'scissors':
            echo $computerChoice === 'paper' ? "Player wins!\n" : "Computer wins!\n";
            break;
    }
}
