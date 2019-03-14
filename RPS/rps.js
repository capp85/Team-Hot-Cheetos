// One iteration of the rps game
var rpsGame = () => {
    var choices = ["rock", "paper", "scissors"];
    var outcomes = ["u", "c", "t"];

    var compChoice = choices[Math.floor(Math.random() * choices.length)];
    var promptUserChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    var i = choices.indexOf(promptUserChoice);
    var userChoice = choices[i];

    alert("Your choice: " + userChoice + "\n" + "Computer's choice: " + compChoice);
    

    if (userChoice !== compChoice) {
        if (userChoice === "rock") {
            if (compChoice === "scissors") {
                return outcomes[0];
            } else {
                return outcomes[1];
            }
        } else if (userChoice === "paper") {
            if (compChoice === "rock") {
                return outcomes[0];
            } else {
                return outcomes[1];
            }
        } else {
            if (compChoice === "paper") {
                return outcomes[0];
            } else {
                return outcomes[1];
            }
        }
    } else {
        return outcomes[2];
    }
}

// Start game and keep score until quit
var playRps = () => {
    var keepPlaying = true;
    var timesPlayed = 0;
    var userScore = 0;
    var compScore = 0;
    var result;

    while (keepPlaying) {
        result = rpsGame();
        if (result === "u") {
            alert("You won!");
            userScore++;
        } else if (result == "c") {
            alert("You lost!");
            compScore++;
        } else {
            alert("You tied!")
        }
        keepPlaying = confirm("Keep playing?");
        timesPlayed++;
    }
    alert("User: " + userScore + ", Comp: " + compScore);
    alert("Times played: " + timesPlayed);
}

// Call main function
playRps();
