import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    EmployeeListComponent,
    UserProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("548358084376-ovr7k7lq8dra033o26nfrgn3fdfd4stq.apps.googleusercontent.com")
        }
      ]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
