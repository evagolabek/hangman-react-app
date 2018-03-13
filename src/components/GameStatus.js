import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class GameStatus extends PureComponent {

  static propTypes = {
    wrongGuesses: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="GameStatus">
        <p>Incorrect Guesses: {this.props.wrongGuesses}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wrongGuesses: state.wrongGuesses,
    guesses: state.guesses,
    word: state.word
  }
}

export default connect(mapStateToProps)(GameStatus)
