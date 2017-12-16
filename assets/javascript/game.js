var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var letterGuesses = "";
var userInputArray = [];
var txt = "abcdefghijklmnopqrstuvwxyz";
randomLetter = txt.charAt(randomIndex());
console.log(randomLetter);


document.addEventListener('keypress', (event) => {
    userInput = event.key;
    if(userInputArray.indexOf(userInput) != -1) {
        console.log("The indexOf found a duplicate");
    }
    if(userInput != randomLetter) {
        incorrectInput();
    }   else if(userInput == randomLetter) {
        correctOutcome();
    }
    if(guessesLeft === 0) {
        lossOutcome();
    }
    console.log(userInputArray);
})



// functions 

// Gets a random letter based on the index of the string.
function randomIndex() {
    var randomLetterIndex = Math.floor(Math.random() * 26);
    return randomLetterIndex;
}

// Will test if the userInput is a duplicate in the array
// If not a duplicat it will process the guess and add it to the array
function incorrectInput() {
    if(userInputArray.indexOf(userInput) == -1) {
        userInputArray.push(userInput); 
        guessesLeft--;
        letterGuesses += " " + userInput + ",";
        document.getElementById("letter-guesses").innerHTML = letterGuesses;  
    }
    document.getElementById("guess-count").innerHTML = guessesLeft;
    // console.log(inputArray);
}

// Occurs when the user guesses the correct letter
function correctOutcome() {
    winCount++;
    guessesLeft = 9;
    letterGuesses = "";
    document.getElementById("win-count").innerHTML = winCount;
    document.getElementById("guess-count").innerHTML = guessesLeft;
    randomIndex();
    randomLetter = txt.charAt(randomIndex());
    document.getElementById("letter-guesses").innerHTML = letterGuesses
    clearArray();
    console.log("updated from correct " + randomLetter);
}

// Occurs whent he user exceeds the number of guesses
function lossOutcome() {
    lossCount++;
    guessesLeft = 9;     
    letterGuesses = "";        
    document.getElementById("loss-count").innerHTML = lossCount;
    document.getElementById("guess-count").innerHTML = guessesLeft;
    randomIndex();
    randomLetter = txt.charAt(randomIndex());
    document.getElementById("letter-guesses").innerHTML = letterGuesses
    clearArray();
    console.log("updated num: " + randomLetter);
}

// Removes array items when the user either records a win or a loss. 
function clearArray() {
    userInputArray = [];
}




