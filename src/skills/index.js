import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Skill from './Skill'

import './skills.css'

class Skills extends Component {
  render () {
    return (
      <Grid width={1} className='skills'>
        <Grid width={1 / 5} className='skill-wrapper'>
          <Skill name='JS' percent={75}/>
        </Grid>
        <Grid width={1 / 5} className='skill-wrapper'>
          <Skill name='CSS' percent={65}/>
        </Grid>
        <Grid width={1 / 5} className='skill-wrapper'>
          <Skill name='HTML' percent={80}/>
        </Grid>
        <Grid width={1 / 5} className='skill-wrapper'>
          <Skill name='Node' percent={70}/>
        </Grid>
        <Grid width={1 / 5} className='skill-wrapper'>
          <Skill name='Java' percent={50}/>
        </Grid>
      </Grid>
    )
  }
}

export default Skills
