import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Task } from '../Tasks';
 
@Injectable({
  providedIn: 'root'
})
export class AddTasksService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

 /* editTask(id: number): any {
    const apiUrlurl = 'http://localhost:5000/tasks'
    this.apiUrl.put((task : Task)=>{
      return task. id! == id
    });
    
  }*/

  editTask(task: Task): Observable<Task> {
    const url = `http://localhost:5000/tasks${task.id}`;
    return this.http.put<Task>(url, task).pipe(
      tap((updatedTask) => {
        console.log(`Task with ID ${updatedTask.id} updated successfully.`);
      }),
      catchError((error) => {
        console.error('Error updating task:', error);
        throw error;
      })
    );
  }

  deleteTask(id: number): Observable<void> {
    const url = `http://localhost:5000/tasks/${id}`;
    return this.http.delete<void>(url).pipe(
      tap(() => {
        console.log(`Task with ID ${id} deleted successfully.`);
      }),
      catchError((error) => {
        console.error('Error deleting task:', error);
        throw error;
      })
    );
  }
  
}



