import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

import { connect } from 'react-redux'
import '../styles/styles.css';
import { wrongGuessCount } from '../lib/game'



export class Guesses extends PureComponent {

  static propTypes = {
    guesses: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired
  }

  render() {

    const { word, guesses } = this.props

    return (
      <div>
        <Input className="Input"/>

        <div className="guess-info">
          <p className="Guesses">Your Guesses: {guesses.join(" ")}</p>
          <p>Incorrect Guesses: {wrongGuessCount(word, guesses)}</p>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = ({ guesses, word }) => ({ guesses, word })

export default connect(mapStateToProps)(Guesses)
