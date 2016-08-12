import React, { Component } from 'react'

class Info extends Component {
  render () {
    return (
      <ul className='contact'>
        <li className='item'>
          <i className='fa fa-mail-forward fa-fw' />
          <a href='#' className='link'>ouerbeiju_whl@163.com</a>
        </li>
        <li className='item'>
          <i className='fa fa-qq fa-fw' />
          <a href='#' className='link'>358707496</a>
        </li>
        <li className='item'>
          <i className='fa fa-phone fa-fw' />
          <a href='#' className='link'>13304089221</a>
        </li>
        <li className='item'>
          <i className='fa fa-weixin fa-fw' />
          <a href='#' className='link'>likeone8023</a>
        </li>
      </ul>
    )
  }
}

export default Info
