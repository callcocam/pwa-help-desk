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

@NgModule({imports: [
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
          data: { breadcrumb: 'Inicio'},
          children:[
           { path:'login', component:LoginComponent},
           { path:'cadastrar-se', component:CadastroComponent}
          ]
        },
        {
          path: 'lei-informaco-mundo',
          component: SicsComponent,
          data: { breadcrumb: 'Informações'}
        },
        {
          path: 'informacao-mundo',
          component: InfoComponent,
          data: { breadcrumb: 'Informações'}
        },
        {
          path: 'manual',
          component: ManualComponent,
          data: { breadcrumb: 'Manual'}
        },
        {
          path: 'estatisticas',
          component: EstatisticasComponent,
          data: { breadcrumb: 'Estatisticas'}
        }
        
      ],
     // canActivate: [AuthGuardRouterService],
      data: { breadcrumb: 'Admin'}
    }
  ])
],
declarations: [],
exports: [ RouterModule]
})
export class AppRountingModule { }
