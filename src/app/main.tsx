'use client'
import ReactDOM from 'react-dom'
import React from 'react'
import App from '../app/app'
import { store } from './Context/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
)
