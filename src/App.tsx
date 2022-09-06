import "./App.css";
import Todos from "./components/Todos";

function App() {
  const items = ["Aprender React", "Aprender Typescript"];

  return (
    <div>
      <Todos items={items} />
    </div>
  );
}

export default App;
