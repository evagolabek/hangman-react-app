import React, { Component } from 'react';
import './styles/App.css';
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'




class App extends Component {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {

    const word = "javascript"

    const guesses = this.props.guesses

    function showGuess(word, guesses) {
      return word
        .split('')
        .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
        .join(' ')
    }


    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <CreateGame />
        <Word word={showGuess(word, guesses)}/>
        <Guesses />
      </div>
    );
  }
}

const mapStateToProps = ({ guesses }) => ({ guesses })

export default connect(mapStateToProps)(App)
