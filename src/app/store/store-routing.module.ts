import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../_guards/auth.guard';
import {StoreComponent} from './store/store.component';
import {ItemsComponent} from './items/items.component';
import {CreateComponent} from './create/create.component';
import {ManageComponent} from './manage/manage.component';
import {SmTitleService} from '../sm-title.service';
import {SupervisorGuard} from '../_guards/supervisor.guard';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ItemsComponent
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [SupervisorGuard]
      },
      {
        path: 'add',
        component: CreateComponent,
        canActivate: [SupervisorGuard]
      },
      {
        path: 'manage',
        component: ManageComponent,
        canActivate: [SupervisorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [SmTitleService],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}

