import React, { Component } from 'react'

class WorkExperience extends Component {
  render () {
    return (
      <section className='work-exp'>
        <h2 className='title'>工作经验</h2>
        <small className='sub-title'>experience</small>
        <ul>
          <li>
            2014.7-2015.7
          </li>
          <li>
            来锐软件 手动测试组
          </li>
          <li>
            手动测试组日常工作
            <ol>
              <li>
                1. Jira, 负责验收开发对bug提交的fix是否有效
              </li>
              <li>
                2. Smoke Testing，广度优先测试
              </li>
              <li>
                3. Testray Testing，深度优先测试
              </li>
            </ol>
          </li>
        </ul>
        <ul>
          <li>
            2015.1-至今
          </li>
          <li>
            来锐软件　Fix Pack测试组
          </li>
          <li>
            Fix Pack测试组日常工作
            <ol>
              <li>
                1. 手动测试，评估fixpack是否达标
              </li>
              <li>
                2. 自动测试分析，寻找fixpack引起的regression
              </li>
              <li>
                3. 自动测试用例修复，完善自动测试体系
              </li>
            </ol>
          </li>
        </ul>
        <ul>
          <li>
            2015.7-至今
          </li>
          <li>
            来锐软件　测试开发
          </li>
          <li>
            对组内工作流程提供技术支持与培训
            <ol>
              <li>
                1. web应用知识相关培训
              </li>
              <li>
                2. 测试组内部脚本相关培训
              </li>
              <li>
                3. 测试组内部工作工具与脚本的维护与开发
              </li>
            </ol>
          </li>
        </ul>
      </section>
    )
  }
}

export default WorkExperience
