import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../_guards/auth.guard';
import {UsersComponent} from './users.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {AdminGuard} from '../_guards/admin.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AdminGuard]
    // , children: [
    //   {
    //     path: 'create',
    //     component: CreateUserComponent
    //   }
    // ]
  }
  , {
    path: 'users/create',
    component: CreateUserComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UsersRoutingModule {
}
