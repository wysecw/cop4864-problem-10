import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn() {
    return true;
  }

  getUser() {
    return new User("efridge", "displayName");
  }
}
