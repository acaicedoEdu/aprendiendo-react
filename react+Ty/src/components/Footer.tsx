import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";

interface Props {
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
}) => {
  const parentRefFooter = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!parentRefFooter.current) return;
    autoAnimate(parentRefFooter.current)
  }, [parentRefFooter])

  return (
    <footer className="footer" ref={parentRefFooter}>
      <span className="todo-count">
        <strong>{activeCount} </strong>
        tareas pendientes
      </span>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar completados
        </button>
      )}
    </footer>
  );
};
