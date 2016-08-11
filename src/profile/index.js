import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Avatar from './Avatar'
import Info from './Info'

import './index.css'

class Profile extends Component {
  render () {
    return (
      <Grid width={1} className='profile'>
        <Grid width={1 / 2} className='avatar-wrapper'>
          <Avatar/>
        </Grid>
        <Grid width={1 / 2} className='info-wrapper'>
          <Info/>
        </Grid>
      </Grid>
    )
  }
}

export default Profile
