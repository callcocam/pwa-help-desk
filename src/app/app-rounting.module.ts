import { AuthGuardService } from './cliente/login/services/auth-guard.service';
import { StartComponent } from './cliente/start/start.component';
import { AuthGuestService } from './cliente/login/services/auth-guest.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './cliente/client.component';
import { HomeComponent } from './cliente/home.component';
import { InfoComponent } from './cliente/info.component';
import { SicsComponent } from './cliente/sics.component';
import { ManualComponent } from './cliente/manual.component';
import { EstatisticasComponent } from './cliente/estatisticas.component';
import { LoginComponent } from './cliente/login/login.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { ProfileComponent, } from './cliente/profile/profile.component';

import { ListComponent, ViewComponent, CreateComponent, EditComponent } from './cliente/profile/solicitacoes/index'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ClientComponent,
        children: [
          {
            path: '',
            redirectTo: 'inicio',
            pathMatch: 'full'
          },
          {
            path: 'inicio',
            component: HomeComponent,
            data: { breadcrumb: 'Inicio' },
            
          },
          {
            path: 'bem-vindo',
            component: StartComponent,
            data: { breadcrumb: 'DashBoard'}
          },
          {
            path: 'login',
            component: LoginComponent,
            data: { breadcrumb: 'Iniciar Sessão' },
            canActivate: [AuthGuestService]
          },
          {
            path: 'cadastrar-se',
            component: CadastroComponent,
            data: { breadcrumb: 'Criar Conta' },
            canActivate: [AuthGuestService]
          },
          {
            path: 'profile',
            component: ProfileComponent,
            data: { breadcrumb: 'Minha Conta' },
            canActivate: [AuthGuardService],
            children:[
              {
                path: 'list/:id',
                component: ListComponent,
                canActivate: [AuthGuardService],
                data: { breadcrumb: 'List'}
              },
               {
                path: 'view/:id',
                component: ViewComponent,
                canActivate: [AuthGuardService],
                data: { breadcrumb: 'List'}
              },
              {
                path: 'create',
                component: CreateComponent,
                canActivate: [AuthGuardService],
                data: { breadcrumb: 'List'}
              },
              {
                path: 'edit/:id',
                component: EditComponent,
                canActivate: [AuthGuardService],
                data: { breadcrumb: 'Edit'}
              }
            ]
          },
          {
            path: 'lei-informaco-mundo',
            component: SicsComponent,
            data: { breadcrumb: 'Informações' }
          },
          {
            path: 'informacao-mundo',
            component: InfoComponent,
            data: { breadcrumb: 'Informações' }
          },
          {
            path: 'manual',
            component: ManualComponent,
            data: { breadcrumb: 'Manual' }
          },
          {
            path: 'estatisticas',
            component: EstatisticasComponent,
            data: { breadcrumb: 'Estatisticas' }
          }

        ],
        // canActivate: [AuthGuardRouterService],
        data: { breadcrumb: 'Admin' }
      }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRountingModule { }
