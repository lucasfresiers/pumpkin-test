import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  displayDetails: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  goToDetails() {
    this.displayDetails = !this.displayDetails;
  }
}
