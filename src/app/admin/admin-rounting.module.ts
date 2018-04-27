import { ReplyComponent } from './solicitacoes/reply/reply.component';
import { AuthGuardService } from './../cliente/login/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found.component';
import { AuthenticateGuestService } from './auth/services/authenticate-guest.service';
import { ListComponent } from './solicitacoes/list/list.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { AuthenticateComponent } from './auth/authenticate/authenticate.component';
import { AuthenticateGuardService } from './auth/services/authenticate-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashBoardComponent,
            data: { breadcrumb: 'DashBoard'}
          },
          {
            path: 'clientes',
            component: ListClientsComponent,
            data: { breadcrumb: 'DashBoard'}
          },
          {
            path: 'solicitacoes',
            component: ListComponent,
            data: { breadcrumb: 'DashBoard'}
          },{
            path: 'solicitacoes/:id',
            component: ReplyComponent,
            data: { breadcrumb: 'Responder'},           
          }
          
        ],
        canActivate: [AuthenticateGuardService],
        data: { breadcrumb: 'Admin'}
      },
      {
        path: 'admin/auth',
        component: AuthenticateComponent,
        canActivate: [AuthenticateGuestService]
      },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRountingModule { }
