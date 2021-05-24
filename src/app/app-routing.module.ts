import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddAnimalsComponent } from './add-animals/add-animals.component';
import { ViewAnimalsComponent } from './view-animals/view-animals.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { DisplayMessageComponent } from './display-message/display-message.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminHomeComponent, children: [
      { path: 'admin-profile', component: AdminProfileComponent},
      { path: 'add-animals', component: AddAnimalsComponent },
      { path: 'view-animals', component: ViewAnimalsComponent },
      { path: 'view-messages', component: DisplayMessageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  AdminHomeComponent,
  AddAnimalsComponent,
  ViewAnimalsComponent
]
