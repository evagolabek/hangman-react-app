import React, { Component } from 'react';
import './App.css';
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'
import Input from './components/Input'

const words = ["sausage", "javascript"];

function random(words) {
  return words[Math.floor(Math.random() * words.length)]
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hangman Game</h1>
        <CreateGame createGame={function() {}}/>
        <Word content={random(words)}/>
        <Guesses letters={["f", "g", "p"]} wrong={3}/>
        <Input />
      </div>
    );
  }
}

export default App;
