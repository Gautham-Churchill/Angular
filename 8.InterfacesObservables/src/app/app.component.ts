import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessagesService } from './services/messages.service';
import { Post } from './interfaces/post';
import { Language, Student, OrderBook, LatestPrices } from './interfaces/data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [MessagesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '8. InterfacesObservables';
  posts: Post[] = [];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.getPosts().subscribe({
      next: (responses: Post[]) => {
        this.posts = responses;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.messagesService.getLanguages().subscribe( {
      next: (response: Language[]) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.messagesService.getStudent().subscribe({
      next: (response: Student) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.messagesService.getOrders().subscribe({
      next: (response: OrderBook) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.messagesService.getLatestPrices().subscribe({
      next: (response: LatestPrices) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
