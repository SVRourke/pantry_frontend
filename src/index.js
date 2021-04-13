import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

import { Provider } from "react-redux"
import combinedStore from "./store.js"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={combinedStore} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
