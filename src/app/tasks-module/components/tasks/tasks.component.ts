import { Component, OnInit } from '@angular/core';
import { AddTasksService } from '../../services/add-tasks.service';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-tasks',
  //standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit{
 
  

editTask(_t5: Task) {
throw new Error('Method not implemented.');
}
  tasks: Task[] = [];
  openTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private addTasksService: AddTasksService) { };

  ngOnInit() {
    this.getTasks();
  };

  getTasks() {
    this.addTasksService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.sortTasksByStatus();
    });
  }

  updateTask(task: Task) {
    this.addTasksService.editTask(task).subscribe(
      (updatedTask) => {
        // Update the task arrays in the component
        this.tasks = this.tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.openTasks = this.openTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.inProgressTasks = this.inProgressTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
        this.completedTasks = this.completedTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      },
      (error) => {
        console.error('Error updating task:', error);
      }
    );
  }

  deleteTask(task: Task) {
    this.addTasksService.deleteTask(task.id).subscribe(
      () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
        this.openTasks = this.openTasks.filter((t) => t.id !== task.id);
        this.inProgressTasks = this.inProgressTasks.filter((t) => t.id !== task.id);
        this.completedTasks = this.completedTasks.filter((t) => t.id !== task.id);
      },
      (error) => {
        console.error('Error deleting task:', error);
      }
    );
  }
    
  sortTasksByStatus() {
    this.openTasks = this.tasks.filter(task => task.status === "to-do");
    this.inProgressTasks = this.tasks.filter(task => task.status === 'in-progress');
    this.completedTasks = this.tasks.filter(task => task.status === 'done');
  }

}
