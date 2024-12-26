import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'learning-angular';
  button: string = 'My Button';
  counter: number = 0;

  // attr binding
  isDisabled: boolean = true;
  angularLogo: string = 'angular.svg';

  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = 'font-size: 50px; color: red;';
  
  //class binding
  redText: boolean = true;

  inputText: string = '';

  incrementCounter(): void {
    this.counter++;
  }

  //ngclass binding
  message: string = 'This is a dangerous message';
  classes: string = 'danger text-size';

  //ngstyle binding
  selectedColor: string = 'yellow';
}
