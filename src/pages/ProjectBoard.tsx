
import Navbar from "@/components/Navbar";
import SidebarWorkspaces from "@/components/SidebarWorkspaces";
import KanbanBoard from "@/components/KanbanBoard";
import { useParams } from "react-router-dom";

export default function ProjectBoard() {
  const { projectId } = useParams();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 w-full">
        <SidebarWorkspaces />
        <main className="flex-1 flex flex-col p-8 max-w-full animate-fade-in">
          <KanbanBoard projectId={projectId as string} />
        </main>
      </div>
    </div>
  );
}
