import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnalyticsModule } from './analytics/analytics.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    SharedModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
