import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

const Form = ({ todoInput, setTodoInput, todos, setTodos }) => {

  const todoInputHandler = (e) => {
    setTodoInput(e.target.value)
  }  

  const submitHandler = (e) => {
    e.preventDefault() 
    setTodos([
        ...todos, { text: todoInput, completed: false, id: Math.random() * 1000 }
    ])
    setTodoInput('')
  }

  return (
    <form className='form'>
        <input placeholder='Enter a todo...' required className='input' value={todoInput} onChange={(e) => todoInputHandler(e)}/>
        <button className='btn' onClick={(e) => submitHandler(e)}><BiAddToQueue /></button>
    </form>
  )
}

export default Form