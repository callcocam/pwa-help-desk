import { HttpInterceptorProvider } from './providers/http-interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRountingModule } from './app-rounting.module';
import { ClientModule } from './cliente/client.module';
import { LocalStorageService } from './services/local-storage.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
    AdminModule,
    ClientModule
  ],
  providers: [LocalStorageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorProvider,
        multi: true
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
