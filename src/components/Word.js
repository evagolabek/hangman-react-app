import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'




export class Word extends PureComponent {
  static propTypes = {
    guesses: PropTypes.array.isRequired,
    word: PropTypes.string.isRequired
  }

  render() {


      return (
        <div className="Word">
          <p>{this.props.word}</p>
        </div>
      )


  }
}


export default Word
