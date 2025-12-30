import { Link, useLocation } from "react-router-dom";
import { Kanban, Folder, Plus, Settings, Users } from "lucide-react";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SidebarWorkspaces() {
  const location = useLocation();
  const { projects } = useStore();

  return (
    <aside className="w-64 bg-card border-r flex flex-col h-[calc(100vh-4rem)] sticky top-16 animate-fade-in shrink-0">
      <div className="p-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <Plus size={16} /> New Project
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2 px-3 space-y-6">
        {/* Projects Section */}
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Your Projects
          </h3>
          <div className="space-y-1">
            {projects.map((proj) => {
              const isActive = location.pathname === `/project/${proj.id}`;
              return (
                <Link
                  key={proj.id}
                  to={`/project/${proj.id}`}
                  className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                >
                  <Kanban size={16} className={isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"} />
                  {proj.name}
                </Link>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Team Section */}
        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Team Views
          </h3>
          <div className="space-y-1">
            <Link
              to="/dashboard"
              className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${location.pathname === "/dashboard"
                  ? "bg-muted text-foreground font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
            >
              <Users size={16} />
              Activity Feed
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4 border-t mt-auto">
        <Link to="/profile">
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
            <Settings size={16} /> Settings
          </Button>
        </Link>
      </div>
    </aside>
  );
}
