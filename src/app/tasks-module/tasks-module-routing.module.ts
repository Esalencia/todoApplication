import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

const routes: Routes = [
  {path: 'tasks', component: TasksComponent},
  {path: 'add-tasks', component: AddTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksModuleRoutingModule { }
