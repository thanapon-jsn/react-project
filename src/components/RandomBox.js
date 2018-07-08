import React from 'react'

class RandomBox extends React.Component {
  render () {
    const bgColor = this.props.colorBox
    const fontSize = this.props.fontSize

    return (
      <div style={{
        backgroundColor: bgColor,
        color: 'black',
        width: 250,
        height: 250,
        margin: 15}}>

        <div style={{
          textAlign: 'center',
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: fontSize
        }} >
        Random Box
        </div>

      </div>
    )
  }
}

export default RandomBox
