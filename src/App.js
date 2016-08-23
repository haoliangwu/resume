import React, { Component } from 'react'
import Grid from 'rctui/Grid'
import { Section, HeadLine } from './common'
import Profile from './profile'
import Expectation from './expectation'
import Experience from './experience'
import Projects from './projects'
import Skills from './skills'
import Languages from './languages'
import Others from './others'

import './common/common.css'

class App extends Component {
  render () {
    return (
      <Grid width={1 / 2} offset={1 / 4} className='resume'>
        <Section>
          <HeadLine>
            Hi, I am Lyon Wu
          </HeadLine>
          <Profile/>
        </Section>
        <Section>
          <HeadLine>
            Skills
          </HeadLine>
          <Skills/>
        </Section>
        <Section>
          <HeadLine>
            Experience
          </HeadLine>
          <Experience/>
        </Section>
        <Section>
          <HeadLine>
            Expectation
          </HeadLine>
          <Expectation/>
        </Section>
        <Section>
          <HeadLine>
            Projects
          </HeadLine>
          <Projects/>
        </Section>
        <Section>
          <HeadLine>
            English
          </HeadLine>
          <Languages/>
        </Section>
        <Section>
          <HeadLine>
            Others
          </HeadLine>
          <Others/>
        </Section>
        <Section>
          <HeadLine>
            Thank You
          </HeadLine>
        </Section>
        <Section>
          <footer>
            Designed and implemented by Lyon Wu
          </footer>
        </Section>
      </Grid>
    )
  }
}

export default App
