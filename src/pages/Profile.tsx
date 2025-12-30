
import Navbar from "@/components/Navbar";
import SidebarWorkspaces from "@/components/SidebarWorkspaces";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-1 w-full">
        <SidebarWorkspaces />
        <main className="flex-1 flex flex-col p-8 max-w-full animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-primary" size={28} />
            <h1 className="text-2xl font-bold">Profile & Settings</h1>
          </div>
          <form className="bg-white rounded-lg shadow border p-6 max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
              <Input id="name" name="name" type="text" value="Demo User" readOnly />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
              <Input id="email" name="email" type="email" value="user@demo.com" readOnly />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1" htmlFor="password">New Password</label>
              <Input id="password" name="password" type="password" placeholder="**********" />
            </div>
            <Button className="w-full" type="submit">Save Settings</Button>
          </form>
        </main>
      </div>
    </div>
  );
}
