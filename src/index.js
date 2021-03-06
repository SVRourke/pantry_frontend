import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './sass/index.scss'
import App from './App'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import { store, persistor } from "./store.js"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
