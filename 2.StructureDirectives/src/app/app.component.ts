import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ifElse: string = 'Different ways to do If-else in Angular';
  title: string = '2. Structure Directives';
  isLoggedIn: boolean = true;
  userName: string = 'Angular';

  forLoop: string = 'For Loop';
  names: string[] = ['Angular', 'React', 'Vue'];

  switchCase: string = 'Switch Case';
  grade: string = 'A';
}
