import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, AlignLeft, Paperclip, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Task } from "@/store/useStore";

export default function TaskDialog({
  task,
  open,
  onOpenChange,
}: {
  task: Task;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!task) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={task.priority === 'High' ? 'destructive' : 'outline'}>
              {task.priority || 'Normal'}
            </Badge>
            <span className="text-sm text-muted-foreground">{task.id}</span>
          </div>
          <DialogTitle className="text-2xl">{task.title}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 items-start gap-4">
            <div className="text-sm font-medium text-muted-foreground mt-1">Status</div>
            <div className="col-span-3">
              <Badge variant="secondary">{task.status}</Badge>
            </div>
          </div>

          <div className="grid grid-cols-4 items-start gap-4">
            <div className="text-sm font-medium text-muted-foreground mt-1">Assignee</div>
            <div className="col-span-3 flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={task.assignee?.avatar} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="text-sm">{task.assignee?.name || 'Unassigned'}</span>
            </div>
          </div>

          <div className="grid grid-cols-4 items-start gap-4">
            <div className="text-sm font-medium text-muted-foreground mt-1">Due Date</div>
            <div className="col-span-3 flex items-center gap-2 text-sm">
              <Calendar size={16} />
              {task.dueDate || 'No due date'}
            </div>
          </div>

          <div className="grid grid-cols-4 items-start gap-4">
            <div className="text-sm font-medium text-muted-foreground mt-1">Description</div>
            <div className="col-span-3 text-sm leading-relaxed">
              {task.description || "No description provided."}
            </div>
          </div>

          {/* Attachments & Comments Placeholders */}
          <div className="border-t pt-4 mt-2">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="gap-2">
                <Paperclip size={14} /> Attachments
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <MessageSquare size={14} /> Comments
              </Button>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
