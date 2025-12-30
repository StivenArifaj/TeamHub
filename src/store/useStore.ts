import { create } from 'zustand';

export type TaskStatus = 'Todo' | 'In Progress' | 'Review' | 'Done';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assignee?: User;
  priority: 'Low' | 'Medium' | 'High';
  dueDate?: string;
}

export interface Column {
  id: TaskStatus;
  title: string;
  color: string; // Tailwind class, e.g., 'bg-blue-100' or hex if using style
}

export interface Project {
  id: string;
  name: string;
  description: string;
  active: boolean;
  tasks: Task[];
}

export interface Activity {
  id: string;
  type: 'task_move' | 'comment' | 'create' | 'join';
  text: string;
  timestamp: string;
  user: User;
}

interface AppState {
  currentUser: User | null;
  projects: Project[];
  activeProjectId: string | null;
  activities: Activity[];

  // Actions
  login: (user: User) => void;
  logout: () => void;
  setActiveProject: (id: string) => void;
  moveTask: (projectId: string, taskId: string, newStatus: TaskStatus) => void;
  addTask: (projectId: string, task: Task) => void;
}

// MOCK DATA
const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Johnson',
  email: 'alex@teamhub.com',
  avatar: 'https://i.pravatar.cc/150?u=alex',
};

const MOCK_TEAM: User[] = [
  { id: 'u2', name: 'Sarah Miller', email: 'sarah@teamhub.com', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 'u3', name: 'Mike Chen', email: 'mike@teamhub.com', avatar: 'https://i.pravatar.cc/150?u=mike' },
];

const INITIAL_PROJECTS: Project[] = [
  {
    id: 'p1',
    name: 'Website Redesign',
    description: 'Overhaul of the main corporate website with new branding.',
    active: true,
    tasks: [
      { id: 't1', title: 'Design System Review', status: 'In Progress', priority: 'High', assignee: MOCK_TEAM[0], dueDate: '2024-02-15' },
      { id: 't2', title: 'Implement Hero Animation', status: 'Todo', priority: 'Medium', assignee: MOCK_USER, dueDate: '2024-02-20' },
      { id: 't3', title: 'Footer Links Update', status: 'Done', priority: 'Low', assignee: MOCK_TEAM[1] },
    ],
  },
  {
    id: 'p2',
    name: 'Mobile App Launch',
    description: 'Q1 Launch for the iOS and Android applications.',
    active: false,
    tasks: [
      { id: 't4', title: 'App Store Screenshots', status: 'Review', priority: 'High', assignee: MOCK_USER },
      { id: 't5', title: 'Beta Testing Group', status: 'Done', priority: 'High', assignee: MOCK_TEAM[0] },
    ],
  },
];

const INITIAL_ACTIVITY: Activity[] = [
  { id: 'a1', type: 'task_move', text: "moved 'Footer Links Update' to Done", timestamp: '10 min ago', user: MOCK_TEAM[1] },
  { id: 'a2', type: 'comment', text: "commented on 'Hero Animation'", timestamp: '1 hour ago', user: MOCK_USER },
  { id: 'a3', type: 'create', text: "created project 'Website Redesign'", timestamp: '2 days ago', user: MOCK_TEAM[0] },
];

export const useStore = create<AppState>((set) => ({
  currentUser: MOCK_USER, // Auto-logged in for demo purposes
  projects: INITIAL_PROJECTS,
  activeProjectId: 'p1',
  activities: INITIAL_ACTIVITY,

  login: (user) => set({ currentUser: user }),
  logout: () => set({ currentUser: null }),
  setActiveProject: (id) => set({ activeProjectId: id }),
  
  moveTask: (projectId, taskId, newStatus) =>
    set((state) => {
      const projects = state.projects.map((p) => {
        if (p.id !== projectId) return p;
        return {
          ...p,
          tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t)),
        };
      });
      return { projects };
    }),

  addTask: (projectId, task) =>
    set((state) => {
      const projects = state.projects.map((p) => {
        if (p.id !== projectId) return p;
        return { ...p, tasks: [...p.tasks, task] };
      });
      return { projects };
    }),
}));
