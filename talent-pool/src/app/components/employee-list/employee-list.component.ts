import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from 'src/app/data/mock-data';
import { Employee } from "src/app/data/Employee";
import { TalentApiService } from 'src/services/talent-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  profiles: Employee[] = [];
  currentPage: number = 1;

  constructor(private api: TalentApiService) { }

  ngOnInit(): void {
    this.getAllProfiles()
  }

  getAllProfiles() {
    this.api.getAllProfiles().subscribe((response: any)=> {
      this.profiles = response;
      if (Object.keys(response).length != 0) {
        console.log(this.profiles[0].profilePicture)
      } else {
        alert('No Employees Created')
      }
    })
  }

}
