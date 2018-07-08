import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import defaultImage from './assets/images/panda.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.css'
import './assets/styles/pikkanode.css'
import './assets/styles/pikkanode_mp.css'
import RandomBox from './components/RandomBox'
import Navbar from './components/Navbar'
import Picturecard from './components/Picturecard'

class App extends Component {
  render () {
    const color = ['red', 'blue', 'green', 'purple', 'pink']

    const picturecard = [{
      id: 1,
      imgSrc: defaultImage,
      createBy: 'Panda1',
      date: '2018-07-07 16:11:00',
      likeCount: 21,
      commentCount: 10
    },
    {
      id: 2,
      imgSrc: defaultImage,
      createBy: 'Panda2',
      date: '2018-07-01 06:11:00',
      likeCount: 211,
      commentCount: 39
    },
    {
      id: 3,
      imgSrc: defaultImage,
      createBy: 'Panda3',
      date: '2018-06-07 10:11:00',
      likeCount: 11,
      commentCount: 9
    },
    {
      id: 4,
      imgSrc: defaultImage,
      createBy: 'Panda4',
      date: '2018-07-01 01:21:00',
      likeCount: 1112,
      commentCount: 401
    },
    {
      id: 5,
      imgSrc: defaultImage,
      createBy: 'Panda5',
      date: '2018-07-07 16:11:00',
      likeCount: 432,
      commentCount: 120
    }]

    const allPictureCard = picturecard.map(dataCard =>
      <Picturecard id={dataCard.id}
        imgSrc={dataCard.imgSrc}
        createBy={dataCard.createBy}
        date={dataCard.date}
        likeCount={dataCard.likeCount}
        commentCount={dataCard.commentCount} />
    )

    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className='d-flex justify-content-center'>
          <RandomBox colorBox={color[randomColorBox()]} fontSize={randomFontSize()} />
        </div>

        <article className='container'>
          <div className='row pt-4'>
            {allPictureCard}
          </div>
        </article>

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

export default App
