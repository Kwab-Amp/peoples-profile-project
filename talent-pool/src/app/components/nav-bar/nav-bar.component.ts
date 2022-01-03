import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialUser, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
