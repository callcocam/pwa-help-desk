import { JwtTokenService } from './services/jwt-token.service';
import { AuthGuestService } from './services/auth-guest.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers:[
    AuthService,
    AuthGuardService,
    AuthGuestService,
    JwtTokenService
  ]
})
export class LoginModule { }
