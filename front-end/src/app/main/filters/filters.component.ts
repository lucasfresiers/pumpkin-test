import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})

export class FiltersComponent implements OnInit {

  filters: FormGroup;

  constructor(fb: FormBuilder) { 
    this.filters = fb.group({
      inTheStaff: false
    });
  }
  

  ngOnInit(): void {
  }

}
