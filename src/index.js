import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import App from './App'
import Home from './Home'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Home />, document.getElementById('root'))
registerServiceWorker()
