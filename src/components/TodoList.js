import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <div>
        <ul>
            <Todo />
        </ul>
    </div>
  )
}

export default TodoList