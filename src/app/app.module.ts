import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAnimalsComponent } from './add-animals/add-animals.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HomeComponent,
    AdminHomeComponent,
    AddAnimalsComponent,
    ViewAnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
