export const handleGuess = (e) => {
  e.preventDefault();
  return { type: 'GUESS_LETTER',
    payload: {
      letter: [].concat(e.value)
    }
  }
}
