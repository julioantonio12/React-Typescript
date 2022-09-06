import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);


  const newTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((previousValues) => {
      return previousValues.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={newTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
