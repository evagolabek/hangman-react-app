export const wrongGuess= function(input) {
  return {
    type: 'WRONG_GUESS',
    payload: {
      wrong: 1
    }
  }
}
