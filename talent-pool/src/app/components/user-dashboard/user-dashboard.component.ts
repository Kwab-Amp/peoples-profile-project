import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  turntabl_user: SocialUser = new SocialUser;
  constructor(private router: Router,
    public authService: SocialAuthService) {
      console.log(authService)
}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.turntabl_user = user;
    });
    console.log(this.turntabl_user);
  }

  logout(): void {
    this.authService.signOut().then(() => this.router.navigate(['login']));
    }
    

}
