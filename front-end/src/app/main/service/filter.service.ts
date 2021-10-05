import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterByActive(users: User[], isActive: boolean): User[] {
    return users.filter(user => user.isActive == isActive);
  }

  filterDefault(users: User[]) {
    return users.filter(() => true);
  }
}
