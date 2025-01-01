import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = '9. TemplateDrivenForm';

  user: User = {
    name: '',
    email: '',
  };

  submitForm(form: NgForm) {
    if(form.valid) {
      console.log(form.value, this.user);
    }
  }

  validateEmail() : boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(this.user.email);
  }
}
