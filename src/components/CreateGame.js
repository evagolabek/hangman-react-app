import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class CreateGame extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        // THIS BUTTON THAT DISPATCHES ACTION (Create new game, payload = click) TO reducer
        // Reducer takes action and executes a function to change the state
        // Sends state to store
        // When stores state is updated the whole page rerenders
        className="CreateGame"
      >
        New Game
      </button>
    )
  }
}

export default CreateGame
