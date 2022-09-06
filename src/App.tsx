import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const items = ["Aprender React", "Aprender Typescript"];
  const todos = [
    new Todo("Aprender React"),
    new Todo("Aprender Typescript"),

  ];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
