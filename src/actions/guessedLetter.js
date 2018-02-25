export const guessedLetter = function(input) {
  return {
    type: 'GUESSED_LETTER',
    payload: {
      letter: input
    }
  }
}
