import React from 'react'

const Form = ({ todoInput, setTodoInput, todos, setTodos }) => {

  const todoInputHandler = (e) => {
    setTodoInput(e.target.value)
  }  

  const submitHandler = (e) => {
    e.preventDefault() 
    setTodos([
        ...todos, { text: todoInput, completeted: false, id: Math.random() * 1000 }
    ])
    setTodoInput('')
  }

  return (
    <form className='form'>
        <input className='input' value={todoInput} onChange={(e) => todoInputHandler(e)}/>
        <button className='btn' onClick={(e) => submitHandler(e)}>+</button>
    </form>
  )
}

export default Form