var choices = ["r", "p", "s"];
var userChoice;
var computerChoice;
// var randIndex = Math.floor(Math.random()*3)

function returnRandomNumber(){
    return Math.floor(Math.random()*3);
}

alert("welcome to rock paper scissors");

userChoice = prompt("pick between r, p, s");
computerChoice = choices[returnRandomNumber()];

console.log(userChoice);
console.log(computerChoice);

if(userChoice === computerChoice){
    alert("tie");
}

if (userChoice === "r" && computerChoice === "s"){
    alert("user wins");
} else if (userChoice === "s" && computerChoice === "r"){
    alert("computer wins");
}

if (userChoice === "p" && computerChoice === "r"){
    alert("user wins");
} else if (userChoice === "r" && computerChoice === "p"){
    alert("computer wins");
}

if (userChoice === "s" && computerChoice === "p"){
    alert("user wins");
} else if (userChoice === "p" && computerChoice === "s"){
    alert("computer wins");
}