import React, { Component } from 'react';
import './styles/App.css';
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'

const words = ["sausage", "javascript"];

function random(words) {
  return words[Math.floor(Math.random() * words.length)]
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <CreateGame />
        <Word content={random(words)}/>
        <Guesses />
      </div>
    );
  }
}

export default App;
