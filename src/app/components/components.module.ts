import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputComponent],
  exports:[
    InputComponent
  ]
})
export class ComponentsModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [
        
      ]

    };
  } }
