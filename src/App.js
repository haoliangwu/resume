import React, { Component } from 'react'
import Grid from 'rctui/Grid'
import HeadLine from './headline'
import Profile from './profile'

import './common/common.css'

class App extends Component {
  render () {
    return (
      <div>
        <Grid width={3 / 5} offset={1 / 5}>
          <HeadLine>
            Hi, I am Lyon Wu
          </HeadLine>
          <Profile/>
        </Grid>
      </div>
    )
  }
}

export default App
