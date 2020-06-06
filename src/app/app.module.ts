import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ApplicationComponent } from './components/application/application.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing 
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
