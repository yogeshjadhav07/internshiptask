import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissingComponent } from './missing/missing.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingComponent,
    Q3Component,
    Q4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
