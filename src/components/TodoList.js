import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  return (<>
      {todos.map((todo) => {
        return <Todo  key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
      })}
    </>
  )
}

export default TodoList