export function wrongGuessCount(word, guesses) {
  return guesses
    .filter(guess => word.indexOf(guess) === -1 )
    .length;
}

export function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join('')
}

export function isWinner(word, guesses) {
  return word.split('').join('') === showGuess(word, guesses)
  ;
  // Will return true if word and the guess matches.
  // Will return false if not.
}

export function displayResult (word, guesses) {
  if (wrongGuessCount(word, guesses) > 6) {
    return `Loser, the word was ${word}
            Refresh the page for a new game - Button is broke.`
  }
  if (isWinner(word, guesses)) {
    //rl.close();       // Exits rl program (input/output mode) before returning.
    return "Winner -  Refresh the page for a new game - Button is broke."


    }
}
