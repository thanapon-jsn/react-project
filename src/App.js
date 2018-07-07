import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import defaultImage from './assets/images/panda.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'
import './assets/styles/pikkanode.css'
import './assets/styles/pikkanode_mp.css'
import Navbar from './components/Navbar'
import Picturecard from './components/Picturecard'

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <Picturecard image={defaultImage} />
        </div>

        <div className='App'>
          <footer className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h1 className='App-title'>Welcome to React</h1>
          </footer>
        </div>
      </div>
    )
  }
}

export default App
