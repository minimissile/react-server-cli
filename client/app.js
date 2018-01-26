import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'     // eslint-disable-line
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './views/App'
import appState from './store/app-state'

const root = document.getElementById('root')

const render = (Component) => {
  // AppContainer: 包裹最外层组件，用于监听热加载
  // BrowserRouter: 用于监听浏览器路由跳转
  // Provider: 数据流控制
  ReactDOM.render(
    <AppContainer>
      <Provider appState={appState}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    root,
  )
}

render(App)

// 如果热更新出现，重新渲染内容
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default      // eslint-disable-line
    render(NextApp)
  })
}





