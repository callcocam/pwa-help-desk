import { ProfileComponent } from './../profile.component';
import { CreateComponent } from './create/create.component';
import { AuthGuardService } from './../../login/services/auth-guard.service';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        
      
    ])
  ],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
