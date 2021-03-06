// src/reducers/board.js
//
// The default export for a reducer is the reducer function, that takes 2
// arguments:
//
//   - the (current) state, should default to the initial state
//   - an action Object:
//     - type : the action type
//     - payload : [optional] payload
//

import { guessedLetter } from '../actions/guessedLetter';

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case 'GUESSED_LETTER':
      return state.concat(payload.guesses)
    default :
      return state
  }
}
