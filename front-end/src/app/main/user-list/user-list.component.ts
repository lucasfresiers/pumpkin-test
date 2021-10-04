import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  usersList: User[] = [];
  
  pageCount = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.getUsers();
  }

  getOnlyUsersActive(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.usersList = users.filter(user => user.isActive);
    });
  }

  getUsers() {
    this.userService.getUsersByLazyLoading(this.pageCount.toString()).subscribe(users => {
      this.userService.attachPictureToUser(users);
      this.usersList = this.usersList.concat(users);
      this.pageCount++;
    });
  }

  onScroll() {
    this.getUsers();
  }
}