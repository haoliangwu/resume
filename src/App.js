import React, { Component } from 'react'
import Grid from 'rctui/Grid'
import { Section, HeadLine } from './common'
import Profile from './profile'
import Experience from './experience'

import './common/common.css'

class App extends Component {
  render () {
    return (
        <Grid width={1 / 2} offset={1 / 4}>
          <Section>
            <HeadLine>
              Hi, I am Lyon Wu
            </HeadLine>
            <Profile/>
          </Section>
          <Section>
            <HeadLine>
              Experience
            </HeadLine>
            <Experience/>
          </Section>
        </Grid>
    )
  }
}

export default App