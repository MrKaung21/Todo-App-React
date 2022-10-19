import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos,editTodo, setEditTodo }) => {
  return (<>
      {todos.map((todo) => {
        return <Todo  key={todo.id} todos={todos} setTodos={setTodos} todo={todo} setEditTodo={setEditTodo}/>
      })}
    </>
  )
}

export default TodoList