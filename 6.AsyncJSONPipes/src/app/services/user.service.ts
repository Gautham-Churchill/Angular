import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() : Observable<User> {
    return of({ id: 1, name: 'John Doe', email: '5r3Yi@example.com' });
  }
}
