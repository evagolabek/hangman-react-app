import React, { Component } from 'react';
import './styles/styles.css';
//Components:
import CreateGame from './components/CreateGame'
import Word from './components/Word'
import Guesses from './components/Guesses'
import GameStatus from './components/GameStatus'


class App extends Component {

  render() {

    return (
      <div className="App">
        <img className="title" alt="hangman" src="https://occ-0-1428-2433.1.nflxso.net/art/87e01/5694568c69ef4be79164f46b967e7f4c1a387e01.png" />
        <GameStatus />
        <Word className="Word"/>
        <Guesses />
        <CreateGame className="CreateGame"/>
      </div>
    );
  }
}

export default App
