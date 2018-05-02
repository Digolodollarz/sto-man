import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {StandardUserComponent} from './standard-user/standard-user.component';
import {AuthGuard} from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: StandardUserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
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
export class StandardUserRoutingModule {
}
