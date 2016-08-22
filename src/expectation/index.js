import React, { Component } from 'react'

import './expectation.css'

class Expectation extends Component {
  render () {
    return (
      <section className='expec'>
        <label>
          <input type='checkbox' />
          <div className='card'>
            <div className='front'>
              Front End Dev & QA Engineer
            </div>
            <div className='back'>
              About 6k - 8k in Dalian
            </div>
          </div>
        </label>
      </section>
    )
  }
}

export default Expectation
