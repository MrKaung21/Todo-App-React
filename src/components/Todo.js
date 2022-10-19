import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'

const Todo = ({ todo, todos, setTodos, setEditTodo }) => {

  const todoDelete = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.id !== id))
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

  const todoEdit = (id) => {
    const todoFind = todos.find((todo) => todo.id === id)
    setEditTodo(todoFind)
  }

  return (
    <div className='todoContainer'>  
      <ul className='todolist'>
        <li className={`todoText ${todo.completed ? 'todoComplete' : ''}`}>{todo.text}</li>
      </ul>
      <div className="btnGroup">
        <button className="todoCheck" onClick={() => todoComplete(todo)}><BsCheckLg /></button>
        <button className='todoEdit' onClick={() => todoEdit(todo.id)}><AiFillEdit /></button>
        <button className="todoDelete" onClick={() => todoDelete(todo.id)}><BsTrash /></button>
      </div>
    </div>
  )
}

export default Todo