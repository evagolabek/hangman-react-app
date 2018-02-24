import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export class Guesses extends PureComponent {
  static propTypes = {
    letters: PropTypes.array.isRequired,
    wrong: PropTypes.number.isRequired
  }

  render() {
    return (
      <div className="Guesses">
        <p>Your Guesses: {this.props.letters}</p>
      </div>
    )
  }
}

export default Guesses
