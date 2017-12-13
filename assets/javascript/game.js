var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var letterGuesses = "";



// Make a string from A to Z. Then get a random letter from the string 
// and store the letter to a variable for logical comparison
var txt = "abcdefghijklmnopqrstuvwxyz";
// Gets a random letter based on the index of the string.
function randomIndex() {
    var randomLetterIndex = Math.floor(Math.random() * 26);
    return randomLetterIndex;
}

randomLetter = txt.charAt(randomIndex());

console.log(randomLetter);


document.addEventListener('keypress', (event) => {
    const userInput = event.key;
    
    if(userInput != randomLetter) {
        document.getElementById("letter-guesses").innerHTML = letterGuesses;
        document.getElementById("guess-count").innerHTML = guessesLeft;
        guessesLeft--;
        letterGuesses += " " + userInput + ",";
    }   else if(userInput == randomLetter) {
        document.getElementById("win-count").innerHTML = winCount;
        document.getElementById("letter-guesses").innerHTML = letterGuesses
        document.getElementById("guess-count").innerHTML = guessesLeft;
        winCount++;
        guessesLeft = 9;
        randomIndex();
        randomLetter = txt.charAt(randomIndex());
        letterGuesses = "";
        console.log("updated from correct " + randomLetter);
    }

    if(guessesLeft === 0) {
        document.getElementById("loss-count").innerHTML = lossCount;
        document.getElementById("letter-guesses").innerHTML = letterGuesses;
        document.getElementById("guess-count").innerHTML = guessesLeft;
        lossCount++;
        guessesLeft = 9;
        randomIndex();
        randomLetter = txt.charAt(randomIndex());
        letterGuesses = "";
        console.log("updated num: " + randomLetter);
    }

})







// need to loop through letter guesses string to compare if a 

