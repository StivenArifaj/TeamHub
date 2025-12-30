import { useState } from "react";
import TaskDialog from "./TaskModal";
import { Task } from "@/store/useStore";
import { Calendar, Paperclip, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function KanbanCard({
  task,
  columnId,
  onDragStart,
  onDragEnd,
}: {
  task: Task;
  columnId: string;
  onDragStart: (task: Task, fromCol: string) => void;
  onDragEnd: () => void;
}) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div
        draggable
        className="group relative bg-card text-card-foreground rounded-lg border shadow-sm p-3 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-primary/50 transition-all active:scale-95 animate-scale-in"
        onDragStart={() => onDragStart(task, columnId)}
        onDragEnd={onDragEnd}
        onClick={() => setShowDialog(true)}
      >
        {/* Priority Label */}
        <div className="flex justify-between items-start mb-2">
          <Badge variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0 h-5">
            {task.priority}
          </Badge>
        </div>

        <h4 className="font-medium text-sm mb-3 leading-snug">{task.title}</h4>

        {/* Footer info */}
        <div className="flex items-center justify-between text-muted-foreground">
          <div className="flex items-center gap-2 text-xs">
            {task.dueDate && (
              <div className="flex items-center hover:text-foreground">
                <Calendar size={12} className="mr-1" />
                {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </div>
            )}
          </div>

          <Avatar className="h-6 w-6 border-2 border-background">
            <AvatarImage src={task.assignee?.avatar} />
            <AvatarFallback className="text-[10px]">{task.assignee?.name?.[0]}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <TaskDialog
        task={task}
        open={showDialog}
        onOpenChange={setShowDialog}
      />
    </>
  );
}
