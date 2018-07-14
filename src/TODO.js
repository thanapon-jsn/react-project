import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'
import AddForm from './components/AddForm'
import ListItem from './components/ListItem'

class TODO extends Component {
  render () {
    return (
      <div className='mx-5 my-5'>
        <div>
          <AddForm />
        </div>
        <div>
          <ListItem />
        </div>
      </div>
    )
  }
}

export default TODO
