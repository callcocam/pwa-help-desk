
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../../components/components.module';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ReactiveFormsModule,
     ComponentsModule
  ],
  declarations: [
    CadastroComponent
  ]
})
export class CadastroModule { }
