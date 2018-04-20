
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { StartComponent } from './start/start.component';
import { AuthGuardService } from './login/services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuestService } from './login/services/auth-guest.service';

@NgModule({
  imports: [
    RouterModule.forChild([
     
     
      
    ])
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
