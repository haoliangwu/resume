import React, { Component } from 'react'

class Info extends Component {
  render () {
    return (
      <ul className='contact'>
        <li className='item'>
          <i className='fa fa-male fa-fw' />
          <a href='#' className='link'>Haoliang Wu</a>
        </li>
        <li className='item'>
          <i className='fa fa-group fa-fw' />
          <a href='#' className='link'>Dalian Liferay Inc</a>
        </li>
        <li className='item'>
          <i className='fa fa-home fa-fw' />
          <a href='http://littlelyon.com/' className='link'>littlelyon.com</a>
        </li>
        <li className='item'>
          <i className='fa fa-github fa-fw' />
          <a href='https://github.com/haoliangwu' className='link'>haoliangwu@github.com</a>
        </li>
      </ul>
    )
  }
}

export default Info
