import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showGuess, isLoser } from '../lib/game'

export class Word extends PureComponent {

  static propTypes = {
    guesses: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired
  }

  render() {
    const { guesses, word } = this.props

      return (
        <div className="Word">

        {
          isLoser(word, guesses) ? (
          <p>
            <b>Loser!</b> The word was:
            <p className="word-big lose"> {word}</p>
          </p>
          ) : (
          <p className="word-big">{showGuess(word, guesses)}</p>
          )
        }

        </div>
      )
  }
}

const mapStateToProps = ({ guesses, word }) => ({ guesses, word })

export default connect(mapStateToProps)(Word)
