// Global Variables
const words = ["pikachu", "squirtle", "charmander", "bulbasaur"];
let chosenWord = "";
let wrongGuesses = [];
let numGuesses = 0;
let candidate = [];
// Function Definitions

function startGame() {
    
    // initialize to 9 guesses
    numGuesses = 9;

    chosenWord = words[Math.floor(Math.random() * words.length)]
    console.log("Chosen word is:", chosenWord);

    let numBlanks = chosenWord.length;

    // initize underscores
    for(let i = 0; i < numBlanks; i++){
        candidate.push("_");
    }



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

    

}

// Main Process
startGame();

document.onkeyup = function(event) {
    let letterGuessed = event.key;

    checkLetter(letterGuessed);

    roundComplete();
}