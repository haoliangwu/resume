import React, { Component } from 'react'
import Grid from 'rctui/Grid'

import Project from './Project'

import './projects.css'

class Projects extends Component {
  render () {
    return (
      <Grid width={1} className='projects'>
        <Grid width={1} className='project-wrapper'>
          <Project name='vscode-poshi-extension' date='2016.4-至今' _role='全栈开发'>
            <p className='description'>公司内部首个测试脚本语言poshi在vscode editor中的support extension,能够使团队在利用富文本编辑器提供的smart功能更快捷地编写testcase，如代码完成、linter、hover提示等功能。</p>
            <p className='description'>开发这个extension的动机是因为poshi作为测试部门自动化的脚本语言，竟然没有统一的集成开发环境，虽然大部分人都在使用Sublime，但是却无法提供code support相关功能，因此工作效率较低。团队使用这个extension后，分析自动测试结果和编写testcase的工作效率可以提升至少<b>50%</b>。</p>
          </Project>
          <Project name='react-ui' date='2015.10-至今' _role='项目参与者'>
            <p className='description'>github上的开源项目，由于项目的owner是大神，而且比较忙，对于编写测试用例分身乏术，我帮他维护一部分测试用例以确保项目更好地发展，主要包含单元测试和e2e测试。</p>
            <p className='description'>利用工作之余的时间，从零开始，为这个项目搭建自动化测试框架的过程中，使我收货颇多，尤其是编写对于web应用UI组件相关的测试用例，同时也提高了使用react框架的熟练度。</p>
          </Project>
          <Project name='teatray-screenshot' date='2016.4-2016-5' _role='全栈开发'>
            <p className='description'>公司Testray（深度优先测试）服务器chrome快照插件，能针对服务器提供的对比功能生成的数据进行快照截取。</p>
            <p className='description'>由于服务器在美国搭建，因此受网络影响，访问服务器十分困难，更别提使用服务器提供的对比功能，需要多次页面跳转。一开始团队采取google doc的方式记录，但记录的过程需要消耗人力成本，使用快照插件可以节省<b>40%</b>进行粘贴、复制、备份等机械操作的时间。</p>
          </Project>
          <Project name='fixpack-workbench' date='2015.11-2016.3' _role='全栈开发'>
            <p className='description'>fixpack测试组工作平台，根据fix pack日常工作流程辅助团队更高效的完成工作。平台模块包含，自动测试结果爬虫，手动sub task生成器，自动测试结果对比器，自动测试结果回归评估脚本等。</p>
            <p className='description'>在没有这个工作平台之前，fixpack组的所有流程需要花费更多的人力成本，使用这个工作平台之后可以节省大约<b>50%</b>进行粘贴、复制、备份、分析等机械操作的时间。</p>
          </Project>
          <Project name='easy-comment' date='2015.8-2015-10' _role='全栈开发'>
            <p className='description'>帮助团队针对不同的测试结果，动态生成相应comment的浏览器插件(chrome)。</p>
            <p className='description'>测试工作的成果往往体现在测试结果上，对于不同的测试结果与特殊的工作流程，需要填写的comment也不同，随着工作流程复杂程度的提升，comment模板的数量也随着增加。使用插件之前，需要将这些模板保存在记事本或者其他记录软件中，使用时进行粘贴、复制，再进行修改。使用插件后，只需要输入comment所对应的关键字并配合鼠标即可根据jira页面信息自动生成正确的comment，可以节省<b>70%</b>进行粘贴、复制、修改等机械操作的时间。</p>
          </Project>
        </Grid>
      </Grid>
    )
  }
}

export default Projects
