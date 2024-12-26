import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3.ControlFlow';

  ifElse: string = "If-else in Angular 17 and later"; 
  a: number = 10;
  b: number = 20; 

  forLoop: string = "For Loop in Angular 17 and later";
  items = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Vue' },
    { id: 3, name: 'React' },
  ]

  switchCase: string = "Switch Case in Angular 17 and later";
  grade: string = 'E';
}
