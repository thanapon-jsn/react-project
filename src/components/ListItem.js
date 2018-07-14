import React from 'react'
import Item from './Item'

const ListItem = props => {
  return (
    <div className='card' style={{width: '50%'}} >
      <div className='card-body'>
        <h5 className='card-title'>TODO</h5>
        {props.todoList === undefined || props.todoList.length === 0
          ? 'No TODO List' : props.todoList.map(todo => (
            <Item
              key={todo.id}
              message={todo.message} />
          ))
        }
      </div>
    </div>
  )
}

export default ListItem
