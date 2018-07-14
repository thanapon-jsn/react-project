import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import App from './App'
import Home from './Home'
import TODO from './TODO'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<TODO />, document.getElementById('root'))
registerServiceWorker()
