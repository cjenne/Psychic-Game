		
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//start point of numbers to display for the following 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuessesSoFar = [];
//once key is pressed the following actions take place and the following text is posted. In html formatting will not apply. 
document.onkeyup = function (event) {

    var userGuess = event.key;
    // var computerGuess returns a random selection from computerChoices array from position 0 to 25 in the array (using array length of 26 as the stop number)
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    //indexOf() method searches the array for a specified item and returns it's position in the array.  A -1 is returned if the item is not found.  This starting if statement states that if the user selects an option within the choices of the array (> -1 = found) then we will review the following if statements for truth.  If the userGuess equals the computer guess then a win is recorded, the number of guesses resets to 9 to start the next round and the guess choices are cleared.  However if instead the user guess does not equal the computer guess then the number of guesses is reduced by one and the incorrect guess (userGuess) is pushed to the yourGuessesSoFar array to be recorded.  First though there is a check if the guess was already recorded so the name letter does not record as a guess multiple times. The player is alerted of their error of selecting the multiple letter twice. When the number of guesses equals 0 (after being reduced by an increment of 1 for each incorrect guess) then a loss is recorded, the number of guesses is reset to 9 and the yourGuessesSoFar array is cleared.

    if (options.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            yourGuessesSoFar = [];

        }
        //else is executed as a test if the first "if" condition is not true. If userGuess != (does not equal) computerGuess then the following is executed....First reviewing for duplicate guesses and then if not a duplicate (else) is exectuted recording reducing the guesses and recording the wrong guess in the yourGuessesSoFar
        else {
            if (yourGuessesSoFar.includes(userGuess)) {
                alert("You already chose " + userGuess + ". Please pick another letter.");
            }
            else {
                guessesLeft--;
                yourGuessesSoFar.push(userGuess);
            }
            }
        if (guessesLeft === 0) {

            guessesLeft = 9;
            losses++;
            yourGuessesSoFar = [];

        }
        // document.querySelector("# ***div id in HTML***".innerHTML = ***var created in javascript***   This changes the text of an element with the ***div id in HTML*** in this case the div id in HTML is div id="game" refered to as #game in js **or css** the + signs link the html elements to make sure they all display after the onkeyup function(event) with the indicated variables displaying within the text with their originally assigned values or differing values defendent on the if statements presented.
        var html =
            "<h1> The Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + yourGuessesSoFar.join(", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};

