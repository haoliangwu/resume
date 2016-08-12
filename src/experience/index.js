import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Work from './Work'
import WorkExperience from './WorkExperience'

import './experience.css'

class Experience extends Component {
  render () {
    return (
      <Grid width={1} className='experience'>
        <Grid width={1 / 2} className='work-wrapper'>
          <Work/>
        </Grid>
        <Grid width={1 / 2} className='project-wrapper'>
          <WorkExperience/>
        </Grid>
      </Grid>
    )
  }
}

export default Experience
