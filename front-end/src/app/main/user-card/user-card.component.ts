import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  getRandomHead(): string {
    let r = Math.floor(Math.random() * 6) + 1;
    return "../../../assets/heads/head_" + r + ".png"
  }

}
