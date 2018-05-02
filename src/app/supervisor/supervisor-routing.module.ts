import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SupervisorComponent} from './supervisor/supervisor.component';
import {SupervisorGuard} from '../_guards/supervisor.guard';

const routes: Routes = [
  {
    path: 'supervisor',
    component: SupervisorComponent,
    canActivate: [SupervisorGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SupervisorRoutingModule {
}
