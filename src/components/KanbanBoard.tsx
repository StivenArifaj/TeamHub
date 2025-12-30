import KanbanColumn from "./KanbanColumn";
import { useState, useMemo } from "react";
import { useStore, TaskStatus, Task } from "@/store/useStore";
import { useParams } from "react-router-dom";

const COLUMNS: { id: TaskStatus; title: string; color: string }[] = [
  { id: "Todo", title: "Todo", color: "border-blue-500 bg-blue-50/50" },
  { id: "In Progress", title: "In Progress", color: "border-amber-500 bg-amber-50/50" },
  { id: "Review", title: "Review", color: "border-purple-500 bg-purple-50/50" },
  { id: "Done", title: "Done", color: "border-green-500 bg-green-50/50" },
];

export default function KanbanBoard({ projectId }: { projectId: string }) {
  const { projects, moveTask } = useStore();

  const project = projects.find(p => p.id === projectId);
  const tasks = project?.tasks || [];

  const [dragged, setDragged] = useState<{ task: Task; fromCol: string } | null>(null);

  const columns = useMemo(() => {
    return COLUMNS.map(col => ({
      ...col,
      tasks: tasks.filter(t => t.status === col.id)
    }));
  }, [tasks]);

  const handleDragStart = (task: Task, fromCol: string) => {
    setDragged({ task, fromCol });
  };

  const handleDrop = (toCol: string) => {
    if (!dragged) return;
    if (dragged.fromCol === toCol) return;

    // Update Global State
    moveTask(projectId, dragged.task.id, toCol as TaskStatus);

    setDragged(null);
  };

  const handleDragEnd = () => setDragged(null);

  if (!project) return <div className="p-8">Project not found</div>;

  return (
    <div className="w-full flex flex-col h-full animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 h-full min-h-[60vh]">
        {columns.map(col => (
          <KanbanColumn
            key={col.id}
            id={col.id}
            title={col.title}
            color={col.color}
            tasks={col.tasks}
            onDragStart={handleDragStart}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            isDraggedOver={dragged && dragged.fromCol !== col.id}
          />
        ))}
      </div>
    </div>
  );
}
