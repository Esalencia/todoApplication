import { Component} from '@angular/core';
import { Task } from '../../Tasks';
import { AddTasksService } from '../../services/add-tasks.service';

@Component({
  selector: 'app-add-tasks',
  //standalone: true,
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent {
 
  newTask: Task = {id: 0, name: '', description: '', priority:'low', status:'to-do', dueDate: '' };
 
  

  constructor(private tasksService: AddTasksService){};



  addTask() {
    this.tasksService.addTask(this.newTask).subscribe(
      (task) => {
        console.log('Task added:', task);
        this.newTask = { id: 0, name: '', description: '', priority:'low', status:'to-do', dueDate: '' };
      },
      (error:any) => {
        console.error('Error adding task:', error);
      }
    );
    
  }

}
