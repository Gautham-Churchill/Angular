import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '10. ReactiveForm';

  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required]
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required, Validators.pattern(/^\d{10}$/)])
      ])
    });
  }

  get phoneNumbers(): FormArray {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.formBuilder.control('', [Validators.required, Validators.pattern(/^\d{10}$/)]));
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.removeAt(index);
  }

  submitForm() {
    if(this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
