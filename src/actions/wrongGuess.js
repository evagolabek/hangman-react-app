import { WRONG_GUESS } from './types'

export const wrongGuess = () => {
  return {
    type: WRONG_GUESS,
    payload: 1
  }
}
