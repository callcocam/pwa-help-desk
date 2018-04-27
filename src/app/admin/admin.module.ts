import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplyComponent } from './solicitacoes/reply/reply.component';
import { ListClientsComponent } from './clients/list-clients/list-clients.component';
import { SummernoteModule } from './../components/editor/summernote/summernote.module';
import { AuthenticateModule } from './auth/authenticate/authenticate.module';
import { AdminComponent } from './admin.component';
import { SidebarLeftComponent } from './partials/sidebar-left/sidebar-left.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminRountingModule } from './admin-rounting.module';
import { NotFoundComponent } from './not-found.component';
import { ListComponent } from './solicitacoes/list/list.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRountingModule,
    SummernoteModule,
    AuthenticateModule,
    SharedModule
  ],
  declarations: [
    AdminComponent,
    SidebarLeftComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    NotFoundComponent,
    ListComponent,
    ListClientsComponent,
    ReplyComponent
  ],
  exports:[
    AdminComponent,
    NotFoundComponent
  ],
  providers:[
    
  ]
})
export class AdminModule { }
