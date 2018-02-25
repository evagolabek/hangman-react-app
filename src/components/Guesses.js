import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { connect } from 'react-redux'



export class Guesses extends PureComponent {

  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {




    return (
      <div className="Guesses">
        <p>Your Guesses: {this.props.guesses}</p>
        <Input />
      </div>
    )
  }
}



const mapStateToProps = ({ guesses }) => ({ guesses })

export default connect(mapStateToProps)(Guesses)
