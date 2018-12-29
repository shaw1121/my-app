import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

// Store 不是类。它只是有几个方法的对象。 要创建它，只需要把根部的
// reducing 函数 传递给 createStore。
let store = createStore(todoApp)

// 使用指定的 React Redux 组件 
// <Provider> 来 魔法般的 让所有容器组件都可以访问 store，而不必显式地传递它
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)