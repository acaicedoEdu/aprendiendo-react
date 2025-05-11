import { useEffect, useState } from "react";
import { Todos } from "./components/Todos";
import {
  type TodoTitle,
  type FilterValue,
  type TodoId,
  type Todo as TodoType,
  type ListTodos,
} from "./types.d.tsx";
import { Footer } from "./components/Footer.tsx";
import { TODO_FILTERS } from "./consts.tsx";
import { Header } from "./components/Header.tsx";
import { getTareas, putTareas } from "./api/tareasData.ts";
import { SaveIndicator } from "./components/SaveIndicator.tsx";

const App = () => {
  const [todos, setTodos] = useState<ListTodos>([]);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );
  const [isSaveTodo, setIsSaveTodo] = useState(false);

  useEffect(() => {
    const cachedTodos = localStorage.getItem("todos");
    if (cachedTodos) {
      const cachedTodosConv: ListTodos = JSON.parse(cachedTodos);
      if (cachedTodosConv.length > 0) {
        setTodos(cachedTodosConv);
        return;
      }
    }

    const fetchGetTareas = async () => {
      try {
        const mockTodos = await getTareas();
        setTodos(mockTodos);
      } catch (error) {
        console.log(error);
        return;
      }
    };
    fetchGetTareas();
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const syncTimer = setTimeout(() => {
      const cachedTodos = localStorage.getItem("todos");
      if (cachedTodos) {
        const cachedTodosConv: ListTodos = JSON.parse(cachedTodos);
        if (cachedTodosConv.length > 0) {
          fetchPutTareas(cachedTodosConv);
        } else {
          fetchPutTareas(todos);
        }
      }
    }, 500);

    return () => clearTimeout(syncTimer);
  }, [todos]);

  const fetchPutTareas = async (cachedTodos: ListTodos) => {
    setIsSaveTodo(false);
    try {
      await putTareas(cachedTodos);
      setIsSaveTodo(true);
    } catch (error) {
      console.log(error);
      setIsSaveTodo(true);
    }
  };

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggle = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.PENDING) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleRemoveCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleEditTodo = ({
    id,
    title,
  }: Pick<TodoType, "id" | "title">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  
  const completedCount = todos.length - activeCount;

  return (
    <div className="todoapp">
      <SaveIndicator isSaving={isSaveTodo} />
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onHandleToggle={handleToggle}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
        handleEditTodo={handleEditTodo}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={handleRemoveCompleted}
      />
      
    </div>
  );
};

export default App;
