import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardUserRoutingModule } from './/standard-user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StandardUserComponent } from './standard-user/standard-user.component';

@NgModule({
  imports: [
    CommonModule,
    StandardUserRoutingModule
  ],
  declarations: [DashboardComponent, StandardUserComponent],
  exports: [StandardUserRoutingModule]
})
export class StandardUserModule { }
