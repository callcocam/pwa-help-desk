import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarLeftComponent } from './partials/sidebar-left/sidebar-left.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AdminRountingModule } from './admin-rounting.module';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRountingModule
  ],
  declarations: [
    AdminComponent,
    SidebarLeftComponent,
    HeaderComponent,
    FooterComponent,
    DashBoardComponent,
    NotFoundComponent
  ],
  exports:[
    AdminComponent,NotFoundComponent
  ]
})
export class AdminModule { }
