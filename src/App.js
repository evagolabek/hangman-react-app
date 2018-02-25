import React, { Component } from 'react';
import './styles/App.css';
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

    function next(word, guesses) {
        // check if lost
        if (wrongGuessCount(word, guesses) > 6) {
          return console.log(`LOSER! The word was: ${word}`)
        }
        // check if won
        if (isWinner(word, guesses)) {
          //rl.close();       // Exits rl program (input/output mode) before returning.
          return console.log('You win. Would you like to play again? (y/n)')


          }
        }

    next(word, guesses)

    console.log(isWinner(word, guesses) )
    console.log(wrongGuessCount(word, guesses));

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
