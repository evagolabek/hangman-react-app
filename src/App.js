import React, { Component } from 'react';
import './styles/styles.css';
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function random(words) {
  return words[Math.floor(Math.random() * words.length)]
}

const words = ['javascript', 'sausage', 'juggling', 'frustration', 'satisfaction']
const word = random(words)



class App extends Component {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {

    const guesses = this.props.guesses

    function wrongGuessCount(word, guesses) {
      return guesses
        .filter(guess => word.indexOf(guess) === -1 )
        .length;
    }

    function showGuess(word, guesses) {
      return word
        .split('')
        .map(letter => guesses.indexOf(letter) < 0 ? "_" : letter)
        .join('')
    }

    function isWinner(word, guesses) {
      return word.split('').join('') === showGuess(word, guesses)
      ;
      // Will return true if word and the guess matches.
      // Will return false if not.
    }

    function displayResult (word, guesses) {
      if (wrongGuessCount(word, guesses) > 6) {
        return `Loser, the word was ${word}
                Refresh the page for a new game - Button is broke.`
      }
      if (isWinner(word, guesses)) {
        //rl.close();       // Exits rl program (input/output mode) before returning.
        return "Winner - Refresh the page for a new game - Button is broke."


        }
    }


    console.log(isWinner(word, guesses) )
    console.log(wrongGuessCount(word, guesses));

    return (
      <div className="App">
        <h1 className="title">Hangman Game</h1>
        <Word word={showGuess(word, guesses)} className="Word"/>
        <Guesses />
        <p>Incorrect Guesses: {wrongGuessCount(word, guesses)}</p>
        <p className="result">{displayResult (word, guesses)}</p>
        <CreateGame className="CreateGame"/>
      </div>
    );
  }
}

const mapStateToProps = ({ guesses }) => ({ guesses })

export default connect(mapStateToProps)(App)
