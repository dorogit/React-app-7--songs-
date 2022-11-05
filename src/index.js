import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'
import { Provider } from 'react-redux'
import {configureStore} from 'redux'
import reducers from './reducers'

ReactDOM.render(
  <Provider store = {configureStore(reducers)}>
    <App/>
  </Provider>
  ,document.querySelector('#root')
)