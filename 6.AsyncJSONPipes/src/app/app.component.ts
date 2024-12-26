import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { access } from 'fs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = '6. Async & JSON Pipes';
  user: Observable<User>;

  constructor(private userService: UserService) {
    this.user = this.userService.getUsers();
  }

  userData = {
    id: 1,
    name: 'John Doe',
    email: '5r3Yi@example.com',
    roles: ['Admin', 'User'],
    status: {
      active: true,
      lastLogin: new Date(2024, 12, 25),
    }
  };
}
