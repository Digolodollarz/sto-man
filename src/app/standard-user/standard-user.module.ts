import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StandardUserRoutingModule} from './/standard-user-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StandardUserComponent} from './standard-user/standard-user.component';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    StandardUserRoutingModule,
    MatCardModule, MatButtonModule, MatIconModule
  ],
  declarations: [DashboardComponent, StandardUserComponent],
  exports: [StandardUserRoutingModule]
})
export class StandardUserModule {
}
