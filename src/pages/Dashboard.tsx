import Navbar from "@/components/Navbar";
import SidebarWorkspaces from "@/components/SidebarWorkspaces";
import ActivityFeed from "@/components/ActivityFeed";
import { useStore } from "@/store/useStore";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { projects, currentUser } = useStore();

  // Derive "Assigned to Me" tasks
  const myTasks = projects.flatMap(p =>
    p.tasks
      .filter(t => t.assignee?.id === currentUser?.id && t.status !== 'Done')
      .map(t => ({ ...t, projectName: p.name, projectId: p.id }))
  );

  const stats = [
    { label: "Active Projects", value: projects.filter(p => p.active).length, icon: <Clock className="text-blue-500" /> },
    { label: "Pending Tasks", value: myTasks.length, icon: <AlertCircle className="text-amber-500" /> },
    { label: "Completed Tasks", value: 12, icon: <CheckCircle2 className="text-green-500" /> }, // Mocked historical data
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-row flex-1 w-full overflow-hidden">
        <SidebarWorkspaces />
        <main className="flex-1 flex flex-col p-8 space-y-8 max-w-7xl mx-auto w-full overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {currentUser?.name?.split(' ')[0]}. Here's what's happening today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.label}
                  </CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
            {/* Activity Feed */}
            <section className="md:col-span-4 space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Recent Activity</h2>
              <Card className="h-[400px]">
                <ScrollArea className="h-full">
                  <ActivityFeed />
                </ScrollArea>
              </Card>
            </section>

            {/* Assigned to Me */}
            <aside className="md:col-span-3 space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Assigned to You</h2>
              <Card className="h-[400px]">
                <ScrollArea className="h-full p-4">
                  {myTasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground space-y-2 mt-12">
                      <CheckCircle2 size={32} />
                      <p>All caught up! No pending tasks.</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {myTasks.map(task => (
                        <Link
                          to={`/project/${task.projectId}`}
                          key={task.id}
                          className="block p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-medium text-sm line-clamp-1">{task.title}</h4>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase font-bold tracking-wider ${task.priority === 'High' ? 'bg-red-100 text-red-700' :
                                task.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                                  'bg-blue-100 text-blue-700'
                              }`}>
                              {task.priority}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{task.projectName}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock size={12} className="mr-1" /> Due {task.dueDate || 'No date'}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </Card>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
