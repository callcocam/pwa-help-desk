import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from './../shared/shared.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { SolicitacoesModule } from './profile/solicitacoes/solicitacoes.module';
import { LoginModule } from './login/login.module';

import { StartComponent } from './start/start.component';
import { ProfileComponent } from './profile/profile.component';
import { EstatisticasComponent } from './estatisticas.component';
import { HomeComponent } from './home.component';
import { ManualComponent } from './manual.component';
import { InfoComponent } from './info.component';
import { SicsComponent } from './sics.component';
import { ClientComponent } from './client.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';

import { ResourcesService } from './../services/resources.service';
import { JwtTokenService } from './login/services/jwt-token.service';
import { AuthGuardService } from './login/services/auth-guard.service';
import { ShareService } from '../services/share.service';
import { AuthService } from './login/services/auth.service';
import { AuthGuestService } from './login/services/auth-guest.service';

import { CpfCnpjDirective } from '../components/directive/cpf-cnpj.directive';
import { MaskDirective } from '../components/directive/mask.directive';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    SolicitacoesModule,
    CadastroModule,
    LoginModule
     
  ],
  declarations: [
    EstatisticasComponent,
     HomeComponent,
      ManualComponent, 
      SicsComponent,
      InfoComponent,
      ClientComponent, 
      ProfileComponent,
      FooterComponent, 
      HeaderComponent,
      StartComponent
    ],
    exports:[
    ],
    providers:[
     
    ]
})
export class ClientModule { }
