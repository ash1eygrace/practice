<?php

use PHPUnit\Framework\TestCase;

class GameTest extends TestCase
{
    /**
     * Tests getGameResult function by passing all possible combinations of 
     * player and computer choices. It checks if the function correctly
     * determines the winner or identifies a draw.
     *
     * The purpose of these tests is to ensure that the game logic is correct.
     * Since getGameResult() is a deterministic function, we can easily test
     * it by calling it with all possible combinations of inputs and checking
     * if the output is what we expect.
     */
    public function testGetGameResult()
    {
        // Test that the player wins when they should
        $this->assertEquals("Player wins!", getGameResult("rock", "scissors"));
        $this->assertEquals("Player wins!", getGameResult("paper", "rock"));
        $this->assertEquals("Player wins!", getGameResult("scissors", "paper"));

        // Test that the computer wins when they should
        $this->assertEquals("Computer wins!", getGameResult("scissors", "rock"));
        $this->assertEquals("Computer wins!", getGameResult("rock", "paper"));
        $this->assertEquals("Computer wins!", getGameResult("paper", "scissors"));

        // Test that it's a draw when both the player and the computer make the same choice
        $this->assertEquals("It's a draw!", getGameResult("rock", "rock"));
        $this->assertEquals("It's a draw!", getGameResult("paper", "paper"));
        $this->assertEquals("It's a draw!", getGameResult("scissors", "scissors"));
    }
     /**
     * Tests getComputerChoice function by checking if it always returns a valid
     * choice. Since getComputerChoice() is a non-deterministic function (it
     * returns a random choice), we can't test it by comparing the output to an
     * expected value. Instead, we call the function multiple times and check
     * if it always returns a valid choice.
     *
     * Note that this doesn't guarantee with absolute certainty that the function
     * always works correctly, but if the test passes, it gives us a high level
     * of confidence.
     *
     * Also note that testing randomness is tricky. In more complex scenarios, we
     * might need to use techniques like dependency injection and mocking to control
     * the randomness during testing.
     */
    public function testGetComputerChoice()
    {
        $validChoices = ["rock", "paper", "scissors"];
        for ($i = 0; $i < 1000; $i++) {
         $choice = getComputerChoice();
            // Check if the function's return value is in the array of valid choices
            $this->assertContains($choice, $validChoices);
        }
    }

}
