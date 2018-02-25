import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'




export class Input extends PureComponent {
  handleSubmit = (e) => {
    if(e) e.preventDefault();
    const [input] = e.target.children
    console.log('You guessed: ', input.value);
    input.value = ""
  }

  render(){
     return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Please type letter" type="text"/>
        <button>Guess</button>
      </form>
    )
  }
}


export default Input
