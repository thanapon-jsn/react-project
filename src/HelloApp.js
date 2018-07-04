import React from 'react'

class HelloApp extends React.Component {
  render () {
    return (
      <div>
        <h1 className='App-title'>MyReact Simple</h1>
        <p className='App-intro'>{this.props.message}</p>
      </div>
    )
  }
}

export default HelloApp
