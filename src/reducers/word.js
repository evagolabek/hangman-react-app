
import { CREATE_GAME } from '../actions/types'

export default (state=[], { type, payload } = {}) => {
  switch(type) {
    case CREATE_GAME:

    function random(words) {
      return words[Math.floor(Math.random() * words.length)]
    }

    const words = ['javascript', 'sausage', 'juggling', 'frustration', 'satisfaction']
    const word = random(words)
      return state.concat(word)
    default:
      return state
  }
}
