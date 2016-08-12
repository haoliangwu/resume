import React, { Component, PropTypes } from 'react'

import './section.css'

class Section extends Component {
  render () {
    return (
      <section className='section'>
        {this.props.children}
      </section>
    )
  }
}

Section.propTypes = {
  children: PropTypes.any
}

export default Section
