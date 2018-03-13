import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createGame } from '../actions/createGame'

export class CreateGame extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }



  handleClick = () => {
    this.props.createGame()
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

export default connect(null, { createGame } )(CreateGame)
