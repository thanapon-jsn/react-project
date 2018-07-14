import React from 'react'

const Item = props => {
  return (
    <div className='card' style={{width: '18rem'}} key={props.id} >
      <div className='card-body'>
        <p className='card-text'>{props.message}</p>
      </div>
    </div>
  )
}

export default Item
