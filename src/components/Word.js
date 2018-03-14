import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess } from '../lib/game'

export class Word extends PureComponent {

  static propTypes = {
    guesses: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired
  }

  render() {
    const guesses = this.props.guesses
    const word = this.props.word

      return (
        <div className="Word">
          <p>{showGuess(word, guesses)}</p>
        </div>
      )
  }
}


const mapStateToProps = (state) => {
  return {
    guesses: state.guesses,
    word: state.word
  }
}

export default connect(mapStateToProps)(Word)
