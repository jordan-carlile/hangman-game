// Global Variables
const words = ["pikachu", "squirtle", "charmander", "bulbasaur"];
let chosenWord = "";
let wrongGuesses = [];
let numGuesses = 0;
let candidate = [];
let winCounter = 0;
// Function Definitions

function startGame() {

    console.log("starting game")
    
    // initialize to 9 guesses
    numGuesses = 9;

    candidate = [];
    wrongGuesses = [];
    
    chosenWord = words[Math.floor(Math.random() * words.length)]
    console.log("Chosen word is:", chosenWord);

    let numBlanks = chosenWord.length;

    // initize underscores
    for(let i = 0; i < numBlanks; i++){
        candidate.push("_");
    }
    
    // update HMTL
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = candidate.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}


function checkLetter(letter) {

    let correct = false;

    for(let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] == letter){
            correct = true;
        }
    }

    if (correct) {
        // guessed correctly

        for(let j = 0; j < chosenWord.length; j++) {
            if (chosenWord[j] == letter) {
                candidate[j] = letter
            }
        }
    }
    else {
        // guessed wrong

        wrongGuesses.push(letter);
        numGuesses--;
        

    }

}

function roundComplete() {
    
    // update HMTL
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = candidate.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

        // If we have gotten all the letters to match the solution...
    console.log("chosenword =",chosenWord);
    console.log("candidate =", candidate.join(""));
    console.log(chosenWord == candidate.join(""))
    if (chosenWord == candidate.join("")) {
        console.log("entered")
        // ..add to the win counter & give the user an alert.
        winCounter++;
        document.getElementById("win-counter").innerHTML = winCounter;

        alert("You win!");

        startGame();
    }

    

}

// Main Process
startGame();


document.onkeyup = function(event) {
    let letterGuessed = event.key;
    if(numGuesses > 1) {
        checkLetter(letterGuessed);
        roundComplete();
    }
    else {
        alert("Play Again?")
        startGame();
    }
}