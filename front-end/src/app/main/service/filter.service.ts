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

  filterByIncome(users: User[], greaterThan: boolean) {
    if (greaterThan) {
      return users.filter(user => user.income > 2000);
    } else {
      return users.filter(user => user.income < 2000);
    }
  }

  filterDefault(users: User[]) {
    return users.filter(() => true);
  }
}
