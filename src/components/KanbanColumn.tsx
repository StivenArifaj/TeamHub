
import KanbanCard from "./KanbanCard";

export default function KanbanColumn({
  id,
  title,
  color,
  tasks,
  onDragStart,
  onDrop,
  onDragEnd,
  isDraggedOver,
}: {
  id: string;
  title: string;
  color: string;
  tasks: any[];
  onDragStart: (task: any, fromCol: string) => void;
  onDrop: (toCol: string) => void;
  onDragEnd: () => void;
  isDraggedOver?: boolean;
}) {
  return (
    <div
      className={`w-80 min-w-[20rem] bg-white rounded-lg shadow flex flex-col border ${isDraggedOver ? "ring-2 ring-primary/30 scale-105 transition" : ""}`}
      onDragOver={e => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
      onDrop={() => onDrop(id)}
    >
      <div className={`px-4 py-2 border-b font-bold mb-1 flex items-center gap-2 ${color}`}>
        {title}
        <span className="ml-auto text-xs text-muted-foreground">{tasks.length}</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[100px]">
        {tasks.map(task => (
          <KanbanCard
            key={task.id}
            task={task}
            columnId={id}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          />
        ))}
      </div>
      <button className="text-xs text-primary px-3 pb-3 hover:underline flex items-center">
        + Add card
      </button>
    </div>
  );
}
