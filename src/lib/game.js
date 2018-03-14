export function wrongGuessCount(word, guesses) {
  return guesses
    .filter(guess => word.indexOf(guess) === -1 )
    .slice(0,7)
    .length;
}

export function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
    .join('')
}

export function isWinner(word, guesses) {
  return word.split('').join('') === showGuess(word, guesses);
}

export function isLoser(word, guesses)  {
  if (wrongGuessCount(word, guesses) >= 6) {
    return true
  }
}

export function displayResult (word, guesses) {
  if (wrongGuessCount(word, guesses) > 6) {
    return `Loser, the word was ${word}
            Refresh the page for a new game - Button is broke.`
  }
  if (isWinner(word, guesses)) {
    return "Winner -  Refresh the page for a new game - Button is broke."
    }
}
