import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'



export class Word extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Word">
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default Word
