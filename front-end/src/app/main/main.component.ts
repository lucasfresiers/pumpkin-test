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
      this.filtersComponent.resetAllFilters();
    });
  }

  onScroll() {
    this.getUsers();
  }

  filterinTheStaffChecked(value) {
    if (value) {
      this.usersListFiltered = this.filterService.filterByIncomeAndByActive(this.usersList, this.filtersComponent.value);
    } else {
      this.usersListFiltered = this.filterService.filterByIncome(this.usersList, this.filtersComponent.value);
    }
  }

  filterName(name) {
    this.usersListFiltered = this.filterService.filterByName(this.usersList, name);
  }

  filterIncome(income) {
    if (this.filtersComponent.filterInTheStaff.value) {
      this.usersListFiltered = this.filterService.filterByIncomeAndByActive(this.usersList, income);
    } else {
      this.usersListFiltered = this.filterService.filterByIncome(this.usersList, income);
    }
  }
}
