import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export class Input extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
      <div className="Input">
        <input type="text" placeholder="Please guess a letter" />
        <input type="submit" />
      </div>
    )
  }
}

export default Input
