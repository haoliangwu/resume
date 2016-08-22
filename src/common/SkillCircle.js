import React, { Component, PropTypes } from 'react'

import './skill-circle.css'

class SkillCircle extends Component {
  render () {
    const {name, percent} = this.props

    const deg = 3.6 * percent

    const degRight = deg > 180 ? 180 : deg
    const degLeft = deg > 180 ? deg - 180 : 0

    return (
      <div className='skill'>
        <div className='wrapper right'>
          <div className='circle rightcircle' style={{transform: `rotate(${degRight - 135}deg)`}}></div>
        </div>
        <div className='wrapper left'>
          <div className='circle leftcircle' style={{transform: `rotate(${degLeft - 135}deg)`}}></div>
        </div>
        <span className='skill-overlay'>{`${percent}%`}</span>
        <span className='skill-name'>{name}</span>
      </div>
    )
  }
}

SkillCircle.propTypes = {
  name: PropTypes.string,
  percent: PropTypes.number
}

export default SkillCircle
