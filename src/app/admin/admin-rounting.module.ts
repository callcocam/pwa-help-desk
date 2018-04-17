import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found.component';

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
          }
          
        ],
       // canActivate: [AuthGuardRouterService],
        data: { breadcrumb: 'Admin'}
      },
      // {
      //   path: 'admin/auth',
      //   loadChildren: "./auth/auth.module#AuthModule",
      //   canActivate: [AuthQuestRouterService]
      // },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRountingModule { }
