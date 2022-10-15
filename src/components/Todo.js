import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'

const Todo = ({ todo, todos, setTodos }) => {

  const todoDelete = () => {
    setTodos(todos.filter((todoItem) => todoItem.id !== todo.id))
  }

  const todoComplete = ({id}) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }

  return (
    <div className='todoContainer'>  
      <ul className='todolist'>
        <li className={`todoText ${todo.completed ? 'todoComplete' : ''}`}>{todo.text}</li>
      </ul>
      <div className="btnGroup">
        <button className="todoCheck" onClick={() => todoComplete(todo)}><BsCheckLg /></button>
        <button className='todoEdit'><AiFillEdit /></button>
        <button className="todoDelete" onClick={() => todoDelete(todos.id)}><BsTrash /></button>
      </div>
    </div>
  )
}

export default Todo