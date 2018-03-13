import { GUESSED_LETTER } from './types'

export const guessedLetter = function(input) {
  return {
    type: GUESSED_LETTER,
    payload: {
      guesses: input
    }
  }
}
