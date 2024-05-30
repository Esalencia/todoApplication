import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksModuleRoutingModule } from './tasks-module-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,  } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule({
  declarations: [AddTasksComponent, TasksComponent],
  imports: [
    CommonModule,
    TasksModuleRoutingModule,
    FormsModule,
    NzCardModule,
    HttpClientModule
  ],
  
})
export class TasksModuleModule { }
