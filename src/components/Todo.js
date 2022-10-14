import React from 'react'

const Todo = ({ todos, setTodos }) => {
  const todoDelete = (id) => {
    setTodos([...todos, todos.filter((todo) => todo.id != id)])
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className='todoContainer' key={todo.id}>  
            <ul className='todolist'>
              <li className='todoText'>{todo.text}</li>
            </ul>
            <div className="btnGroup">
              <button className="todoCheck">check</button>
              <button className="todoDelete" onClick={(id) => todoDelete(id)}>delete</button>
            </div>
          </div>
        )
      })}
    </>   
  )
}

export default Todo