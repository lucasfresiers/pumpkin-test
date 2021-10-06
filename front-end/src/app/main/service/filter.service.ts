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

  filterByIncome(users: User[], income: number) {
    return users.filter(user => user.income > income);
  }

  filterByName(users: User[], name: string) {
    return users.filter(user => user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

  filterDefault(users: User[]) {
    return users.filter(() => true);
  }
}
