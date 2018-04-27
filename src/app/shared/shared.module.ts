import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnexoCreateComponent } from './../admin/solicitacoes/anexos/anexo-create/anexo-create.component';
import { LocalStorageService } from './../services/local-storage.service';
import { AuthService } from './../cliente/login/services/auth.service';

import { ResourcesService } from './../services/resources.service';
import { ShareService } from './../services/share.service';
import { SummernoteModule } from './../components/editor/summernote/summernote.module';
import { FormUploadComponent } from './../components/form-upload/form-upload.component';
import { UploadFileService } from './../components/form-upload/upload-file.service';
import { MaskDirective } from './../components/directive/mask.directive';
import { CpfCnpjDirective } from './../components/directive/cpf-cnpj.directive';
import { ComponentsModule } from './../components/components.module';
import { JwtAdminTokenService } from './../admin/auth/services/jwt-admin-token.service';
import { NotificationService } from './../components/snackbar/notification.service';
import { sanitizeHtmlPipe } from './../pipes/sanitize-html.pipe';
import { InputComponent } from '../components/input/input.component';
import { SummernoteComponent } from './../components/editor/summernote/summernote.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SummernoteModule,
    ComponentsModule
  ],
  declarations: [
    sanitizeHtmlPipe,
    CpfCnpjDirective,
    FormUploadComponent,
    MaskDirective,
    InputComponent,
    SummernoteComponent,
    AnexoCreateComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    sanitizeHtmlPipe,
    CpfCnpjDirective,
    MaskDirective,
    InputComponent,
    FormUploadComponent,
    SummernoteComponent,
    AnexoCreateComponent
  ],
  providers: [
    NotificationService,
    JwtAdminTokenService,
    UploadFileService,   
    ShareService,
    ResourcesService,
    LocalStorageService
  ]
})
export class SharedModule {
}
