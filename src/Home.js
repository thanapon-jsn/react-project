import React from 'react'
import logo from './assets/images/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'
import styled from 'styled-components'
import RandomBox from './components/RandomBox'
import CardDeck from './components/CardDeck'
import soc from '30-seconds-of-code'


const Button = styled.button`
  display: inline-block;
  padding: 15px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #3d3d5c;
  border: none;
  box-shadow: 0 2px #999;
  
  :hover {
  background-color: #47476b;
  border: none;
  }

  :active {
  background-color: #3d3d5c;
  border: none;
  box-shadow: 0 3px #666;
  transform: translateY(1px);`

class Home extends React.Component {
  state = {
    cardId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  randomDeck = () => {
    this.setState((prevState) => ({
      cardId: soc.shuffle(prevState.cardId)
    }))
  }

  clickCardHandler = (color) => {
    alert(`${color} color`)
  }

  render () {
    const color = ['red', 'blue', 'green', 'purple', 'pink','red', 'blue', 'green', 'purple', 'pink']

    const allCard = this.state.cardId.map(cid =>
      <div className='col-xs-6 col-md-2 m-3'>
        <CardDeck cardColor={color[cid]} cid={cid} eventClick={this.clickCardHandler.bind(this, color[cid])} />
      </div>
    )

    return (
      <div>
        <div className='d-flex justify-content-center row'>
          {soc.shuffle(allCard)}
          <Button onClick={this.randomDeck}>New Deck</Button>
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

const randomColorBox = () => Math.floor(Math.random() * Math.floor(5))

const randomFontSize = () => Math.floor(Math.random() * Math.floor(20)) + 20

export default Home
