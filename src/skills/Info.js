import React, { Component } from 'react'
import Grid from 'rctui/Grid'

class Info extends Component {
  render () {
    return (
      <Grid width={1} className='info'>
        <Grid width={1 / 2}>
          <h2>前端方向</h2>
          <ul>
            <li>
              - 熟练使用html/css对设计稿进行实施，了解html5/css3新特性
            </li>
            <li>
              - 可以使用原生js进行模块开发，了解es6新特性, 如class, promise, module等
            </li>
            <li>
              - 熟练使用webpack/gulp等构建工具，并具有插件开发能力
            </li>
            <li>
              - 熟练使用less/sass等预编译处理器，对postCSS有一定了解
            </li>
            <li>
              - 熟练使用nodejs相关知识，具备使用原生模块和第三方模块进行开发的能力
            </li>
            <li>
              - 熟练使用主流前端框架，如react, redux, react-router, bootstrap等。
            </li>
          </ul>
        </Grid>
        <Grid width={1 / 2}>
          <h2>后端方向</h2>
          <ul>
            <li>
              - 熟悉java及并对相关框架的有一定了解，如ssh框架，osgi等
            </li>
            <li>
              - 熟练使用express，koa并具有开发middleware的能力
            </li>
            <li>
              - 熟悉主流关系型数据库与非关系型数据库的配置与使用，如mysql, oracle及mangoDB等。
            </li>
            <li>
              - 熟悉主流服务器tomcat, jboss, glassfish, weblogic, ws等服务器的配置与使用
            </li>
          </ul>
        </Grid>
        <Grid width={1 / 2}>
          <h2>测试方向</h2>
          <ul>
            <li>
              - 熟悉常规web测试流程及用例设计
            </li>
            <li>
              - 熟悉主流web测试框架如webdriver, selenium等及在不同语言上的实现，如java, py, js等。
            </li>
            <li>
              - 可以按照page object的思想开发自动化测试框架及用例
            </li>
          </ul>
        </Grid>
        <Grid width={1 / 2}>
          <h2>通用知识</h2>
          <ul>
            <li>
              - 了解http协议, json, xml等相关知识
            </li>
            <li>
              - 熟练使用linux操作系统
            </li>
            <li>
              - 熟悉网络代理服务的搭建与配置
            </li>
            <li>
              - 熟悉使用git作为版本控制工具
            </li>
          </ul>
        </Grid>
        <Grid width={1 / 2}>
          <h2>其他</h2>
          <ul>
            <li>
              - 熟悉chrome和firefox浏览器插件开发
            </li>
            <li>
              - 熟悉vscode编辑器插件开发
            </li>
            <li>
              - 熟悉Liferay Portal的使用及二次开发，如theme, portlet等
            </li>
          </ul>
        </Grid>
        <Grid width={1 / 2}>
          <h2>软素质</h2>
          <ul>
            <li>
              - 自学能力强
            </li>
            <li>
              - 善于与人合作
            </li>
            <li>
              - 有毅力
            </li>
          </ul>
        </Grid>
      </Grid>
    )
  }
}

export default Info
