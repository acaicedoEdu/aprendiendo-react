import autoAnimate from "@formkit/auto-animate";
import { CircleCheck, RefreshCcw } from "lucide-react";
import { useEffect, useRef } from "react";

interface Props {
  isSaving: boolean;
}

export const SaveIndicator: React.FC<Props> = ({ isSaving }) => {
  const parentDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parentDiv.current) return;

    autoAnimate(parentDiv.current);
  }, [parentDiv]);
  return (
    <div
      ref={parentDiv}
      className="fixed top-4 right-4 flex items-center gap-2 px-3 py-2 bg-[#b83f45] dark:bg-gray-800/90 rounded-full"
    >
      {!isSaving ? (
        <RefreshCcw className="w-6 h-6 text-white" />
      ) : (
        <CircleCheck className="w-6 h-6 text-white" />
      )}
    </div>
  );
};
