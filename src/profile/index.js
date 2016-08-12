import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Avatar from './Avatar'
import Contact from './Contact'
import Info from './Info'

import './profile.css'

class Profile extends Component {
  render () {
    return (
      <Grid width={1} className='profile'>
        <Grid width={1 / 3} className='avatar-wrapper'>
          <Avatar/>
        </Grid>
        <Grid width={1 / 3} className='info-wrapper'>
          <Info/>
        </Grid>
        <Grid width={1 / 3} className='contact-wrapper'>
          <Contact/>
        </Grid>
      </Grid>
    )
  }
}

export default Profile
