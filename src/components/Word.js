import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'



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

const mapStateToProps = (state) => {
  word: state.word
}


export default connect(mapStateToProps)(Word)
