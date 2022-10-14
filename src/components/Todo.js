import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
  const todoDelete = () => {
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id))
  }
  return (
    <div className='todoContainer'>  
      <ul className='todolist'>
        <li className='todoText'>{todo.text}</li>
      </ul>
      <div className="btnGroup">
        <button className="todoCheck">check</button>
        <button className="todoDelete" onClick={() => todoDelete(todos.id)}>delete</button>
      </div>
    </div>
  )
}

export default Todo