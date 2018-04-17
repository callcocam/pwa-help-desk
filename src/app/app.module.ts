import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRountingModule } from './app-rounting.module';
import { ClientModule } from './cliente/client.module';
import { ComponetsModule } from './components/componets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
    AdminModule,
    ClientModule,
    ComponetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
