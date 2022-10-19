import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos" )) || []
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  })

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} todoInput={todoInput} setTodoInput={setTodoInput} editTodo={editTodo} setEditTodo={setEditTodo} />
      <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;
