import { useStore } from "@/store/useStore";
import { User, Kanban, MessageSquare, Check, Plus, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ActivityFeed = () => {
  const { activities } = useStore();

  const getIcon = (type: string) => {
    switch (type) {
      case 'task_move': return <ArrowRight className="text-blue-500" size={14} />;
      case 'comment': return <MessageSquare className="text-amber-500" size={14} />;
      case 'create': return <Plus className="text-green-500" size={14} />;
      default: return <Kanban size={14} />;
    }
  };

  return (
    <ul className="divide-y px-6">
      {activities.map(event => (
        <li key={event.id} className="flex items-start gap-4 py-4 animate-fade-in">
          <Avatar className="h-8 w-8 mt-1">
            <AvatarImage src={event.user.avatar} />
            <AvatarFallback>{event.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="text-foreground">{event.user.name}</span>{" "}
              <span className="text-muted-foreground font-normal">{event.text}</span>
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {getIcon(event.type)}
              <span>{event.timestamp}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivityFeed;
