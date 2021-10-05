import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})

export class FiltersComponent implements OnInit {

  @Output() filterChecked = new EventEmitter<FormGroup>();
  @Output() filterSwitched = new EventEmitter<boolean>();

  @ViewChild('inTheStaff') inTheStaffCheckBox: MatCheckbox;
  @ViewChild('inTheMoney') inTheMoneyCheckBox: MatCheckbox;

  filters: FormGroup;
  filtersStatus: boolean = false;

  constructor(fb: FormBuilder) { 
    this.filters = fb.group({
      inTheStaff: new FormControl({value: false, disabled: true}),
      inTheMoney: new FormControl({value: false, disabled: true})
    });
  }

  ngOnInit(): void {
    this.listenToFilters();
  }

  listenToFilters() {
    this.filters.valueChanges.subscribe((formGroup: FormGroup) => {
      this.filterChecked.emit(formGroup);
    });
  }

  switchFilters() {
    this.filtersStatus = !this.filtersStatus;
    this.inTheStaffCheckBox.disabled = !this.inTheStaffCheckBox.disabled;
    this.inTheMoneyCheckBox.disabled = !this.inTheMoneyCheckBox.disabled;
    this.filterSwitched.emit(this.filtersStatus);
  }
}
