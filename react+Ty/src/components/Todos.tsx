import { type TodoId, type ListTodos, FilterValue } from "../types.d.tsx";
import { Todo } from "./Todo.tsx";
import { type Todo as TodoType } from "../types.d.tsx";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Filters } from "./Filters.tsx";

interface Props {
  todos: ListTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onHandleToggle: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  handleEditTodo: ({ id, title }: Pick<TodoType, "id" | "title">) => void;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onHandleToggle,
  handleEditTodo,
  filterSelected,
  handleFilterChange,
}) => {
  const [editing, setEditing] = useState("");

  const handleStartEdit = ({ id }: TodoId): void => {
    setEditing(id);
  };

  const handleStopEdit = (): void => {
    setEditing("");
  };

  const parentUl = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!parentUl.current) return;
    autoAnimate(parentUl.current);
  }, [parentUl]);

  return (
    <section>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      <ul className="todo-list" ref={parentUl}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${todo.completed ? "completed" : ""} ${
              editing === todo.id ? "editing" : ""
            } hover:bg-slate-50`}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onRemoveTodo={onRemoveTodo}
              onHandleToggle={onHandleToggle}
              isEditing={editing === todo.id}
              handleEditTodo={handleEditTodo}
              handleStartEdit={handleStartEdit}
              handleStopEdit={handleStopEdit}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
