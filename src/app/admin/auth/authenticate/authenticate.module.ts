import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../../../components/components.module';
import { AuthenticateGuardService } from './../services/authenticate-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate.component';
import { AuthenticateGuestService } from '../services/authenticate-guest.service';
import { AuthenticateService } from '../services/authenticate.service';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [AuthenticateComponent],
  providers:[
    AuthenticateGuardService,
    AuthenticateGuestService,
    AuthenticateService
  ]
})
export class AuthenticateModule { }
