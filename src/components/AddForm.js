import React from 'react'
import styled from 'styled-components'

class AddForm extends React.Component {
  state = {
    message: ''
  }

  changeMessageHandler = () => {

  }
  
  render () {
    return (
      <form>
        <textarea className='form-control' rows='5' name='message' value='sssss' />
      </form>
    )
  }
}

export default AddForm
