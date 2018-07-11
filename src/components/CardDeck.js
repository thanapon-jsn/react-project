import React from 'react'

class CardDeck extends React.Component {
  render () {
    const color = this.props.cardColor

    return (
      <div style={{
        backgroundColor: color,
        color: 'black',
        width: 200,
        height: 230}} key={this.props.cid} />
    )
  }
}

export default CardDeck
