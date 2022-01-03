import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/data/Employee';
import { TalentApiService } from 'src/services/talent-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile: Employee | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: TalentApiService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getProfileDetails();
  }

  getProfileDetails(): void {
    const email = String(this.activatedRoute.snapshot.paramMap.get('email'));
    console.log('Got this email: ' + email);
    this.api.getOneProfile(email).subscribe((response: any) => {
      console.log(response)
      this.profile = response;
    })
  }

  goBack(): void {
    this.location.back()
  }

  updateProfile(): void {}

  addTechStack(): void {}

}
