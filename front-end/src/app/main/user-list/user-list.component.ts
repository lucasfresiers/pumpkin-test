import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  usersList: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.usersList = users;
    });
  }

  getOnlyUsersActive(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.usersList = users.filter(user => user.isActive);
    });
  }

}