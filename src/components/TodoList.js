import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  return (
      <Todo todos={todos} setTodos={setTodos} />
  )
}

export default TodoList