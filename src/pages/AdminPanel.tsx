
import Navbar from "@/components/Navbar";
import SidebarWorkspaces from "@/components/SidebarWorkspaces";
import { User, Plus, Trash2 } from "lucide-react";

const members = [
  { id: "u1", name: "Sarah", email: "sarah@demo.com", role: "Admin" },
  { id: "u2", name: "Chris", email: "chris@demo.com", role: "Member" },
  { id: "u3", name: "Alex", email: "alex@demo.com", role: "Member" },
];

export default function AdminPanel() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 w-full">
        <SidebarWorkspaces />
        <main className="flex-1 flex flex-col p-8 max-w-full animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <User className="mr-2 text-primary" /> Workspace Members
            </h1>
            <button className="flex items-center px-3 py-2 bg-primary text-white rounded hover:bg-primary/90 gap-2 text-sm">
              <Plus size={16}/> Add member
            </button>
          </div>
          <table className="w-full bg-white rounded shadow border">
            <thead>
              <tr className="bg-muted text-left">
                <th className="p-3 text-xs font-bold uppercase">Name</th>
                <th className="p-3 text-xs font-bold uppercase">Email</th>
                <th className="p-3 text-xs font-bold uppercase">Role</th>
                <th className="p-3 text-xs font-bold uppercase"></th>
              </tr>
            </thead>
            <tbody>
              {members.map(m => (
                <tr key={m.id} className="border-b last:border-b-0 hover:bg-muted/60 transition">
                  <td className="p-3">{m.name}</td>
                  <td className="p-3">{m.email}</td>
                  <td className="p-3">{m.role}</td>
                  <td className="p-3 text-right">
                    <button className="text-xs text-red-500 hover:underline flex items-center gap-1">
                      <Trash2 size={14}/>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
