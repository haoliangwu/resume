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
              Salary 7k - 10k in Dalian
            </div>
          </div>
        </label>
      </section>
    )
  }
}

export default Expectation
