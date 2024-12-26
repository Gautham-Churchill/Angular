import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { Data } from './interfaces/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '5. DIServices';

  data: string[] = [];
  posts: Data[] = [];

  constructor(private dataService: DataService) {
    this.data = dataService.getData();
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe({
      next: (response: Data[]) => {
        this.posts = response
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
