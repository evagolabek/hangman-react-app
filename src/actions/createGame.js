import { CREATE_GAME } from './types'

export const createGame = function() {

  function random(words) {
    return words[Math.floor(Math.random() * words.length)]
  }

  const words = ['javascript', 'sausage', 'juggling', 'frustration', 'satisfaction']
  const word = random(words)

  return {
    type: CREATE_GAME,
    payload: word
  }
}
