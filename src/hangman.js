//HANGMAN

// to read from the console

// Wrong Guess Count function
function wrongGuessCount(word, guesses) {
  return guesses
    .filter(guess => word.indexOf(guess) === -1 )
    .length;
}

// console.log(wrongGuessCount('sausage', guesses));

// Show Guess Function:

function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join('')
}

// console.log(showGuess('sausage', guesses));

function isWinner(word, guesses) {
  return word.split('').join('') === showGuess(word, guesses);
  // Will return true if word and the guess matches.
  // Will return false if not.
}

// console.log(isWinner('sausage', guesses));

function next(word, guesses) {
    // check if lost
    if (wrongGuessCount(word, guesses) > 6) {
      rl.close(); // Exits rl program (input/output mode) before returning.
      return console.log(`LOSER! The word was: ${word}`)
    }
    // check if won
    if (isWinner(word, guesses)) {
      //rl.close();       // Exits rl program (input/output mode) before returning.
      return rl.question('You win. Would you like to play again? (y/n)', function(answer) {
        if (answer === 'y') {
          next(random(words), [])
        } else if (answer === 'n') {
          return console.log("Thanks, see you next time!")
        }

      })
    }
    // ask for the next letter

    rl.question('next letter? ', answer => {
       console.log('player wrote:', answer)
        // do something with answer
        //guesses.concat(answer.split(''));
        console.log(showGuess(word, guesses.concat(answer.split(''))));
        next(word, guesses.concat(answer.split('')) );
        console.log(`Your guesses: ${guesses.concat(answer)}`)
      })


}
var words = ['sausage', 'fornicate', 'deliberate', 'coding', 'beer', 'javascript']
// next('sausage', [])

function random(words) {
  return words[Math.floor(Math.random() * words.length)]
}

next(random(words), [])
