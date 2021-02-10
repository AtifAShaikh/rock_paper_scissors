var choices = ["r", "p", "s"];
var userChoice;
var computerChoice;
var playAgain =true;
var stats = {
    wins: 0,
    losses: 0,
    ties:0,

    increaseWins: function() {
        this.wins++;
    },
    increaseLosses: function() {
        this.losses++;
    },
    increaseTies: function() {
        this.ties++;
    },

    displayStats: function() {
        console.log("test");
        alert("Current Stats \nwins: " + this.wins + " \nlosses: " + this.losses+ " \nties: " + this.ties);

    }
};


// var randIndex = Math.floor(Math.random()*3)

function returnRandomChoice(){
    return choices[Math.floor(Math.random()*3)];
}

alert("Welcome to rock paper scissors");

while (playAgain){

userChoice = prompt("pick between r, p, s");
computerChoice = returnRandomChoice();

if(userChoice !== "r" || userChoice !== "p" || userChoice !== "s"){
    userChoice = returnRandomChoice();
}

if(userChoice === computerChoice){
    alert("TIE, you and the computer both picked " + userChoice);
    stats.increaseTies();
}

if (userChoice === "r" && computerChoice === "s"){
    alert("WINNER, " + userChoice + " beats " + computerChoice);
    stats.increaseWins();
} else if (userChoice === "s" && computerChoice === "r"){
    alert("LOOSER, " + computerChoice + " beats " + userChoice);
    stats.increaseLosses();
}

if (userChoice === "p" && computerChoice === "r"){
    alert("WINNER, " + userChoice + " beats " + computerChoice);
    stats.increaseWins();
} else if (userChoice === "r" && computerChoice === "p"){
    alert("LOOSER, " + computerChoice + " beats " + userChoice);
    stats.increaseLosses();
}

if (userChoice === "s" && computerChoice === "p"){
    alert("WINNER, " + userChoice + " beats " + computerChoice);
    stats.increaseWins();
} else if (userChoice === "p" && computerChoice === "s"){
    alert("LOOSER, " + computerChoice + " beats " + userChoice);
    stats.increaseLosses();
}

stats.displayStats();

playAgain=confirm("Do you want to play again?");

}
