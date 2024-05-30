export interface Task {
    id: number;
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    status: 'to-do' | 'in-progress' | 'done';
    dueDate: string;
  }