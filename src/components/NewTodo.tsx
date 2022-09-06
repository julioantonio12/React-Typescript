import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoInputRef.current!.value; //null will be stored if value doesn't exist
    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Todo text</label>
      <input type="text" id="text" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
