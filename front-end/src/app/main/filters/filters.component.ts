import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})

export class FiltersComponent implements OnInit {

  @Output() filterinTheStaffChecked = new EventEmitter<boolean>();
  @Output() filterNameInput = new EventEmitter<string>();
  @Output() filterIncomeHasChanged = new EventEmitter<number>();

  @ViewChild('inTheStaff') inTheStaffCheckBox: MatCheckbox;

  filterName = new FormControl('');
  filterInTheStaff = new FormControl(true);

  value = 2000;

  constructor() {}

  ngOnInit(): void {
    this.listenToFilters();
  }

  listenToFilters() {
    this.filterInTheStaff.valueChanges.subscribe((value: boolean)=> {
      this.filterinTheStaffChecked.emit(value);
    });
    this.filterName.valueChanges.subscribe((value: string) => {
      this.filterNameInput.emit(value);
    })
  }

  incomeHasChanged($event) {
    this.filterIncomeHasChanged.emit($event.value);
  }
}
