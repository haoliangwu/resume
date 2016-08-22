import React, { Component } from 'react'
import Grid from 'rctui/Grid'

class Others extends Component {
  render () {
    return (
      <Grid width={1} className='languages'>
        <ul>
          <li>
            弹的一手好吉他
          </li>
          <li>
            烧的一手好菜
          </li>
          <li>
            背的一手好单词
          </li>
        </ul>
      </Grid>
    )
  }
}

export default Others
