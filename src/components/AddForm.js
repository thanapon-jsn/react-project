import React from 'react'
import styled from 'styled-components'

const inputTextStyle = {
  padding: 12,
  border: '1px solid #c6c6c6',
  width: '100%',
  color: '#888',
  fontWeight: 300,
  borderRadius: 4
}

const Button = styled.button`
  display: flex;
  border: none;
  color: #fff;
  text-decoration: none;
  background-color: #19334d;
  padding: 10px 30px;
  font-size: 13px;
  font-weight: 500;
  margin-top: 3%;
  transform: 'translateY(-50%)'
`

class AddForm extends React.Component {
  state = {
    message: ''
  }

  changeMessageHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submmitHandler = e => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className='card' style={{width: '30%'}}>
      <a className='card-body'>
        <h5 className='card-title'>Add Card</h5>
        <form onSubmit={this.submmitHandler}>
          <textarea
            style={inputTextStyle}
            rows='6'
            name='message'
            value={this.state.message}
            onChange={this.changeMessageHandler}
          />
          <Button>ADD TODO</Button>
        </form>
      </a>
      </div>
    )
  }
}

export default AddForm
