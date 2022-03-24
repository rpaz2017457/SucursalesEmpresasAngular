import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
=======
import { HeaderComponent } from './components/header/header.component';
>>>>>>> 7551a548a5fe39ef216f7a413ba8cb22e6c93127

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    RegistroComponent
=======
    HeaderComponent
>>>>>>> 7551a548a5fe39ef216f7a413ba8cb22e6c93127
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
