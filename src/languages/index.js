import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Skill from '../common/SkillCircle'
import './languages.css'

class Languages extends Component {
  render () {
    return (
      <Grid width={1} className='languages'>
        <section>
          <Grid width={1 / 5} offset={1 / 10} className='skill-wrapper'>
            <Skill name='Listen' percent={80} />
          </Grid>
          <Grid width={1 / 5} className='skill-wrapper'>
            <Skill name='Speak' percent={65} />
          </Grid>
          <Grid width={1 / 5} className='skill-wrapper'>
            <Skill name='Read' percent={85} />
          </Grid>
          <Grid width={1 / 5} className='skill-wrapper'>
            <Skill name='Write' percent={85} />
          </Grid>
        </section>
      </Grid>
    )
  }
}

export default Languages
