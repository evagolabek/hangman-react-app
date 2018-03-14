import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { imageList } from './images/imageList'
import './styles/styles.css';
//Components:
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'

//Game Logic:
import { wrongGuessCount, showGuess, isWinner, displayResult } from './lib/game'




class App extends Component {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {

    const guesses = this.props.guesses
    const word = this.props.word

    showGuess(word, guesses)
    wrongGuessCount(word, guesses)
    isWinner(word, guesses)
    displayResult (word, guesses)

    return (
      <div className="App">

        <img className="title" alt="hangman"
          src="https://occ-0-1428-2433.1.nflxso.net/art/87e01/5694568c69ef4be79164f46b967e7f4c1a387e01.png"
        />
        <img src={imageList[wrongGuessCount(word, guesses)]} alt="hangman-stages" className="hangman-image"/>

        <Word className="Word"/>
        <Guesses />
        
        <p className="result">{displayResult (word, guesses)}</p>
        <CreateGame className="CreateGame"/>
      </div>
    );
  }
}

const mapStateToProps = (state, ) => {
  return {
    guesses: state.guesses,
    word: state.word
  }
}

export default connect(mapStateToProps)(App)
