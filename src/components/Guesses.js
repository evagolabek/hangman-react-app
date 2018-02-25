import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { connect } from 'react-redux'
import '../styles/styles.css';



export class Guesses extends PureComponent {

  static propTypes = {
    guesses: PropTypes.array.isRequired,
  }

  render() {

    return (
      <div>
        <p>Your Guesses: </p>
        <p className="Guesses">{this.props.guesses.join(" ")}</p>
        <Input className="Input"/>
      </div>
    )
  }
}


const mapStateToProps = ({ guesses }) => ({ guesses })

export default connect(mapStateToProps)(Guesses)
