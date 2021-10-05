import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  @Input() usersList: User[];

  @Output() scrolled = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void { }

  onScroll() {
    this.scrolled.emit();
  }
}