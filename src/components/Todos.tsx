import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "../styles/Todos.module.css";
import TodoItem from "./TodoItem";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          item={item}
          onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
