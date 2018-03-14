import { CREATE_GAME } from './types'
import { words, random } from '../lib/game'

export const createGame = function() {

  const word = random(words)

  return {
    type: CREATE_GAME,
    payload: word
  }
}
