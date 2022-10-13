import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} todoInput={todoInput} setTodoInput={setTodoInput} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
