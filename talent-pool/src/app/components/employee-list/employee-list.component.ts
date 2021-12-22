import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from 'src/app/data/mock-data';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = EMPLOYEES;
  constructor() { }

  ngOnInit(): void {
    console.log(this.employees)
  }

}
