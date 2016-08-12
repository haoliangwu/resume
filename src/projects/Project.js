import React, { Component, PropTypes } from 'react'

class Project extends Component {
  render () {
    const {_role, date, name, children} = this.props

    return (
      <section className='project'>
        <label className='title'>
          <a href='#' className='link'>
            <strong>{name}</strong>
          </a>
          <label className='sub-title'>
            <span className='role'>{_role}</span>
            <span className='date'>{date}</span>
          </label>
        </label>
        {children}
      </section>
    )
  }
}

Project.propTypes = {
  name: PropTypes.string,
  _role: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.any
}

export default Project
