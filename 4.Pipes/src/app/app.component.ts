import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppendPipe } from './pipes/append.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AppendPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '4. Pipes';
  today: number = Date.now();

  datePipe: string = 'DatePipe';
  currencyPipe: string = 'CurrencyPipe';
  amount: number = 999.99;

  customPipe: string =  'CustomPipe';
  name: string = 'Angular';
}
