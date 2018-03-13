import { WRONG_GUESS } from '../actions/types'

const initialState = 0

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case WRONG_GUESS:
      return state + payload
    default:
      return state
  }
}
