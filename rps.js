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
        alert("wins: " + this.wins + " losses " + this.losses+ " ties " + this.ties);

    }
};


// var randIndex = Math.floor(Math.random()*3)

function returnRandomNumber(){
    return Math.floor(Math.random()*3);
}

alert("welcome to rock paper scissors");

while (playAgain){


userChoice = prompt("pick between r, p, s");
computerChoice = choices[returnRandomNumber()];

console.log(userChoice);
console.log(computerChoice);

if(userChoice === computerChoice){
    alert("tie");

    stats.increaseTies();
}

if (userChoice === "r" && computerChoice === "s"){
    alert("user wins");
    stats.increaseWins();
} else if (userChoice === "s" && computerChoice === "r"){
    alert("computer wins");
    stats.increaseLosses();
}

if (userChoice === "p" && computerChoice === "r"){
    alert("user wins");
    stats.increaseWins();
} else if (userChoice === "r" && computerChoice === "p"){
    alert("computer wins");
    stats.increaseLosses();
}

if (userChoice === "s" && computerChoice === "p"){
    alert("user wins");
    stats.increaseWins();
} else if (userChoice === "p" && computerChoice === "s"){
    alert("computer wins");
    stats.increaseLosses();
}

stats.displayStats();

playAgain=confirm("Do you want to play again?");

}
