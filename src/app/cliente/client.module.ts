import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EstatisticasComponent } from './estatisticas.component';
import { HomeComponent } from './home.component';
import { ManualComponent } from './manual.component';
import { SicsComponent } from './sics.component';
import { InfoComponent } from './info.component';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './partials/footer/footer.component';
import { HeaderComponent } from './partials/header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ComponetsModule } from '../components/componets.module';
import { ShareService } from '../services/share.service';
import { CpfCnpjDirective } from '../components/directive/cpf-cnpj.directive';
import { MaskDirective } from '../components/directive/mask.directive';
import { AuthService } from './login/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClientRoutingModule,
    ComponetsModule
  ],
  declarations: [
    EstatisticasComponent,
     HomeComponent,
      ManualComponent, 
      SicsComponent, 
      InfoComponent, 
      ClientComponent, 
      FooterComponent, 
      HeaderComponent, 
      CadastroComponent, 
      LoginComponent, CpfCnpjDirective, MaskDirective
    ],
    exports:[
      ClientComponent
    ],
    providers:[
      ShareService,
      AuthService
    ]
})
export class ClientModule { }
