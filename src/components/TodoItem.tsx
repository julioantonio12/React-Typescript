import Todo from "../models/todo";
import classes from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onDeleteTodo: () => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={props.onDeleteTodo}
    >
      {props.item.text}
    </li>
  );
};

export default TodoItem;
