
import { Kanban, Check } from "lucide-react";

const assignedTasks = [
  { id: "t1", title: "Finalize home page UI", status: "In Progress", project: "Website Redesign" },
  { id: "t2", title: "Write release notes draft", status: "Todo", project: "Campaign Launch" },
  { id: "t3", title: "Review wireframes", status: "Done", project: "Mobile App UI" },
];

const statusColor = {
  "Todo": "bg-blue-100 text-blue-600",
  "In Progress": "bg-amber-100 text-amber-600",
  "Done": "bg-green-100 text-green-600",
};

const AssignedToMe = () => (
  <div className="rounded-lg border bg-white p-5 shadow-sm">
    <h2 className="text-lg font-bold flex items-center mb-4"><Kanban size={18} className="mr-2" /> My Tasks</h2>
    <ul className="space-y-2">
      {assignedTasks.map(t => (
        <li key={t.id} className="flex items-center justify-between py-2 px-3 rounded hover:bg-muted/80 transition">
          <div>
            <div className="font-medium">{t.title}</div>
            <div className="text-xs text-muted-foreground">{t.project}</div>
          </div>
          <div className={`ml-3 text-xs font-medium px-3 py-1 rounded ${statusColor[t.status as keyof typeof statusColor] || "bg-gray-200"}`}>
            {t.status}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default AssignedToMe;
