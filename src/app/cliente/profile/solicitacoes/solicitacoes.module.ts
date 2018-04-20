import { ComponentsModule } from './../../../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list.component';
import { DadosComponent } from './components/dados.component';
import { UploadFileService, FormUploadComponent } from './../../../components/form-upload/index';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SolicitacoesRoutingModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    DadosComponent,
    FormUploadComponent
  ],
  exports: [
    DadosComponent
  ],
  providers: [
    UploadFileService
  ]
})
export class SolicitacoesModule { }
