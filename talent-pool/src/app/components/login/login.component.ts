import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private authService: SocialAuthService) { 
    // this.createLoginForm()
  }

  ngOnInit(): void {
    // this.authService.authState.subscribe(user => {
    //   this.user = user;
    //   console.log(user);
    // });
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
        .then(() => this.router.navigate(['user-dashboard']));
  }

}
