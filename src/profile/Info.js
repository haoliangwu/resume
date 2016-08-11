import React, { Component } from 'react'

class Info extends Component {
  render () {
    return (
      <ul className='info'>
        <li className='item'>
          <i className='fa fa-home fa-fw' />
          <a href='http://littlelyon.com/' className='link'>littlelyon.com</a>
        </li>
        <li className='item'>
          <i className='fa fa-github fa-fw' />
          <a href='https://github.com/haoliangwu' className='link'>haoliangwu@github.com</a>
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
