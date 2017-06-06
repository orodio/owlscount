import React                 from 'react'
import ReactDOM              from 'react-dom'
import { Provider }          from 'react-redux'
import App                   from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal }      from 'styled-components'
import store                 from './store'
import { generator }         from 'uigradients'

injectGlobal`
  * { padding:0; margin:0; border:none; outline:none; text-decoration:none; }

  html, body {
    ${generator({gradient: 'clouds'})}
    height:100%;
    font-family:helvetica,arial,sans-serif;
  }
`

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
registerServiceWorker();
