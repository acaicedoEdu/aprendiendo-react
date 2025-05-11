import { useEffect, useRef, useState } from "react";
import { TodoId, type Todo as TodoType } from "../types.d.tsx";
import autoAnimate from "@formkit/auto-animate";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onHandleToggle: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  handleEditTodo: ({ id, title }: Pick<TodoType, "id" | "title">) => void;
  isEditing: boolean;
  handleStartEdit: ({ id }: TodoId) => void;
  handleStopEdit: () => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onHandleToggle,
  handleEditTodo,
  isEditing,
  handleStartEdit,
  handleStopEdit,
}) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleKeyDown = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editedTitle.trim() === "") return;
    handleEditTodo({
      id,
      title: editedTitle,
    });
    handleStopEdit();
  };

  const handleStart = () => {
    handleStartEdit({ id });
    setEditedTitle(title);
  };

  const handleStop = () => {
    setEditedTitle(title);
    handleStopEdit();
  };

  const parentRefLi = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentRefLi.current) return;
    autoAnimate(parentRefLi.current)
  }, [parentRefLi])

  return (
    <div ref={parentRefLi}>
      {(!isEditing && (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={(event) => {
              onHandleToggle({ id, completed: event.target.checked });
            }}
          />
          <label onDoubleClick={handleStart}>{title}</label>
          <button
            className="destroy"
            onClick={() => {
              onRemoveTodo({ id });
            }}
          ></button>
        </div>
      )) || (
        <form onSubmit={handleKeyDown}>
          <input
            ref={inputRef}
            type="text"
            className="edit"
            value={editedTitle}
            onChange={(e) => {
              setEditedTitle(e.target.value);
            }}
            onBlur={handleStop}
          />
        </form>
      )}
    </div>
  );
};
