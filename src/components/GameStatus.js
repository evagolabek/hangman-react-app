import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { wrongGuessCount, isWinner, isLoser } from '../lib/game'
import { imageList } from '../images/imageList'


export class GameStatus extends PureComponent {

  static propTypes = {
    word: PropTypes.string.isRequired
  }

  render() {
    const { word, guesses } = this.props

    return (
      <div className="GameStatus">

        <img src={imageList[wrongGuessCount(word, guesses)]} alt="hangman-stages" className="hangman-image"/>

        { isWinner(word, guesses) ? (
          <p>Winner!</p>
        ) : (
          <p></p>
        )}

        { isLoser(word, guesses) ? (
          <p>Loser! The word was {word}</p>
        ) : (
          <p></p>
        )}

      </div>
    )
  }
}

const mapStateToProps = ({ guesses, word }) => ({ guesses, word })

export default connect(mapStateToProps)(GameStatus)
