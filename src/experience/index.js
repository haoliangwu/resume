import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Work from './Work'
import WorkExperience from './WorkExperience'

import './experience.css'

class Experience extends Component {
  render () {
    return (
      <Grid width={1} className='experience'>
        <Grid width={1 / 2}>
          <Work/>
        </Grid>
        <Grid width={1 / 2}>
          <WorkExperience/>
        </Grid>
      </Grid>
    )
  }
}

export default Experience
