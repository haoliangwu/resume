import React, { Component, PropTypes } from 'react'

import './index.css'

class HeadLine extends Component {
  render () {
    const {children} = this.props

    return (
      <div className='headline'>
        <span className='title'>{children}</span>
      </div>
    )
  }
}

HeadLine.propTypes = {
  children: PropTypes.any
}

export default HeadLine
