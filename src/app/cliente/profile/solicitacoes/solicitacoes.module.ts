import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list.component';
import { DadosComponent } from './components/dados.component';
import { AnexoListComponent } from './../anexos/anexo-list/anexo-list.component';
import { SharedModule } from './../../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SolicitacoesRoutingModule
  ],
  declarations: [
    CreateComponent,
    ViewComponent,
    ListComponent,
    DadosComponent,
    AnexoListComponent
  ],
  exports: [
    DadosComponent
  ],
  providers: [
    
  ]
})
export class SolicitacoesModule { }
