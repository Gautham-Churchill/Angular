import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '11. Components Communication';

  tasks: string[] = ['Task 1', 'Task 2', 'Task 3'];

  names: string[] = ['Angular', 'React', 'Vue'];

  deleteTask(task: string) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
