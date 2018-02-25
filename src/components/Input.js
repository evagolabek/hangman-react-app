import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { guessedLetter } from '../actions/guessedLetter'




export class Input extends PureComponent {
  static propTypes = {
    guessedLetter: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    if(e) e.preventDefault();
    const [input] = e.target.children
    console.log('You guessed: ', input.value);
    this.props.guessedLetter(input.value)
    input.value = ""
  }

  render(){
     return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Please type letter:" type="text"/>
        <button>Guess</button>
      </form>
    )
  }
}

export default connect(null, { guessedLetter })(Input)
