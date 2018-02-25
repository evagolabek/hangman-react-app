import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const guesses = ['s']

export class Guesses extends PureComponent {
  props
  static propTypes = {
    letters: guesses,
    wrong: PropTypes.number.isRequired
  }

  render() {

    return (
      <div className="Guesses">
        <p letters={this.props.letters}>Your Guesses: {this.props.letters}</p>
        <Input />
      </div>
    )
  }
}

export default Guesses
