import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "../styles/NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value; //null will be stored if value doesn't exist
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label className={classes.label}>Tareas pendientes</label>
      <input className={classes.input} type="text" id="text" ref={todoInputRef} />
      <button className={classes.button}>Añadir tarea</button>
    </form>
  );
};

export default NewTodo;
