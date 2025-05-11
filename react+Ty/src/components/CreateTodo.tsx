import { useState } from "react";
import { type TodoTitle } from "../types.d";

interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveTodo({
      title: inputValue,
    });
    setInputValue("");
  };
  return (
    <form onSubmit={handleKeyDown}> 
      <input
        className="new-todo"
        value={inputValue}
        placeholder="¿Qué quieres hacer?"
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
};
