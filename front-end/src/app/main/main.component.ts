import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { User } from './models/user';
import { FilterService } from './service/filter.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  
  pageCount = 1;

  usersList: User[] = [];
  usersListFiltered: User[] = [];

  @ViewChild('filtersComponent') filtersComponent: FiltersComponent;

  constructor(
    private userService: UserService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersByLazyLoading(this.pageCount.toString()).subscribe(users => {
      this.userService.attachPictureToUser(users);
      this.usersList = this.usersList.concat(users);
      this.usersListFiltered = this.usersList;
      this.pageCount++;
      if (this.filtersComponent.filtersStatus) {
        this.applyFilters(this.filtersComponent.filters.value);
      }
    });
  }

  onScroll() {
    this.getUsers();
  }

  // déclenché lors du click sur une checkBox
  applyFilters(filters) {
    let res = [];
    res = this.filterService.filterByActive(this.usersList, filters.inTheStaff);
    res = res.concat(this.filterService.filterByIncome(this.usersList, filters.inTheMoney));
    this.usersListFiltered = res;
  }

  // déclenché lors du click sur le bouton
  filterSwitched($event) {
    if (!$event) {
      this.usersListFiltered = this.filterService.filterDefault(this.usersList);
    } else {
      this.applyFilters(this.filtersComponent.filters.value)
    }
  }

  filterName(name) {
    this.usersListFiltered = this.filterService.filterByName(this.usersList, name);
  }
}
