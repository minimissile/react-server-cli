import React from 'react'
// Route: 定义每项路由对应一个组件
import {
  Route,
  Redirect,
} from 'react-router-dom'

import TestApi from '../views/test/api-test'

export default () => [
  // 路由精准性，避免模糊匹配，即路由完全和定义的相等，才加载对应的组件
  <Route path="/" render={() => <Redirect to="/test" />} exact key="first" />,
  <Route path="/test" component={TestApi} key="test" />,
]
