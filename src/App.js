import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Profile from './profile'

import './common/main.css'

class App extends Component {
  render () {
    return (
      <div>
        <Grid width={3 / 5}>
          <Profile/>
        </Grid>
      </div>
    )
  }
}

export default App
