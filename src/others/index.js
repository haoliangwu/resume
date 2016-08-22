import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import './others.css'

class Others extends Component {
  render () {
    return (
      <Grid width={1} className='others'>
        <div className='play'>
          <span>弹的一手好吉他</span>
          <span>烧的一手好菜</span>
          <span>背的一手好单词</span>
        </div>
      </Grid>

    )
  }
}

export default Others
