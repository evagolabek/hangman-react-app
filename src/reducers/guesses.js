
import { GUESSED_LETTER } from '../actions/types';
import { CREATE_GAME } from '../actions/types'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case GUESSED_LETTER:
      return state.concat(payload.guesses)
    case CREATE_GAME:
      return []
    default :
      return state
  }
}
