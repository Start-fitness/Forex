import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MainLayoutRoutes} from './main-layout.routing';
import {HomeComponent} from '../../pages/home/home.component';
import {AuthComponent} from '../../pages/auth/auth.component';
import {RegisterComponent} from '../../pages/register/register.component';



@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MainLayoutRoutes),
    ReactiveFormsModule
  ]
})
export class MainLayoutModule { }
