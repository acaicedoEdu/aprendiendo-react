import { type TodoTitle } from "../types.d";
import { CreateTodo } from "./CreateTodo";
import { IsConnectEmail } from "./IsConnectEmail";

interface Props {
  onAddTodo: ({title}: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>Tareas</h1>
      <CreateTodo saveTodo={onAddTodo} />
      <IsConnectEmail />
    </header>
  );
};
