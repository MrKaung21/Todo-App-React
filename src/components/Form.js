import React, { useEffect} from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { BsCheckLg } from 'react-icons/bs'

const Form = ({ todoInput, setTodoInput, todos, setTodos, editTodo, setEditTodo }) => {

  const updateTodo = (text, completed, id) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {...todo, text, completed} : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  } 

  useEffect(() => {
    if(editTodo) {
      setTodoInput(editTodo.text)
    } else {
      setTodoInput("")
    }
  }, [setTodoInput, editTodo])

  const todoInputHandler = (e) => {
    setTodoInput(e.target.value)
  }  

  const submitHandler = (e) => {
    e.preventDefault() 
    if(!editTodo) {
      setTodos([
        ...todos, { text: todoInput, completed: false, id: Math.random() * 1000 }
      ])
      setTodoInput('')
    } else {
      updateTodo(todoInput, editTodo.completed, editTodo.id)
    }
  }

  return (
    <form className='form'>
        <input placeholder='Enter a todo...' required className='input' value={todoInput} onChange={(e) => todoInputHandler(e)}/>
        <button className='btn' onClick={(e) => submitHandler(e)}>{editTodo ? <BsCheckLg /> : <BiAddToQueue />}</button>
    </form>
  )
}

export default Form