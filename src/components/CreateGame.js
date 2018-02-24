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
        className="CreateGame"
      >
        New Game
      </button>
    )
  }
}

export default CreateGame
