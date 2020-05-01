import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  exports: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ]
})
export class CoreModule { }
