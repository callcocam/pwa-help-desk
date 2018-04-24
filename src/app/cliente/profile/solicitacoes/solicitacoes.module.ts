import { Ng2Summernote } from './../../../components/ng2-summernote';
import { SummernoteModule } from './../../../components/editor/summernote/summernote.module';
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
import { TinymceModule } from '../../../components/editor/tinymce';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    SolicitacoesRoutingModule,
    SummernoteModule,
    TinymceModule
  ],
  declarations: [
    CreateComponent,
    EditComponent,
    ViewComponent,
    ListComponent,
    DadosComponent,
    FormUploadComponent,
    Ng2Summernote
  ],
  exports: [
    DadosComponent,
    Ng2Summernote
  ],
  providers: [
    UploadFileService
  ]
})
export class SolicitacoesModule { }
