import React, { Component, PropTypes } from 'react'

let _home = ''

class Project extends Component {
  render () {
    const {href, _role, date, name, children} = this.props

    return (
      <section className='project'>
        <label className='title'>
          <a href={`${_home}${href}`} className='link'><strong>{name}</strong></a>
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

Project.setGitHub = function (home) {
  _home = home
}

Project.propTypes = {
  href: PropTypes.string,
  name: PropTypes.string,
  _role: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.any
}

export default Project
