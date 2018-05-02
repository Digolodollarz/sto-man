import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupervisorRoutingModule} from './/supervisor-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SupervisorComponent} from './supervisor/supervisor.component';

@NgModule({
  imports: [
    CommonModule,
    SupervisorRoutingModule
  ],
  declarations: [DashboardComponent, SupervisorComponent],
  exports: [SupervisorRoutingModule]
})
export class SupervisorModule {
}
