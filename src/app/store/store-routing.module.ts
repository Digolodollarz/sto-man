import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../_guards/auth.guard';
import {StoreComponent} from './store/store.component';
import {ItemsComponent} from './items/items.component';
import {CreateComponent} from './create/create.component';
import {ManageComponent} from './manage/manage.component';
import {SmTitleService} from '../sm-title.service';
import {SupervisorGuard} from '../_guards/supervisor.guard';
import {RequestsComponent} from './requests/requests.component';

const routes: Routes = [
    // {
    //   path: 'store',
    //   component: StoreComponent,
    //   canActivate: [AuthGuard]
    // },
    {
      path: 'store',
      component: ItemsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'store/create',
      component: CreateComponent,
      canActivate: [SupervisorGuard]
    },
    {
      path: 'store/add',
      component: CreateComponent,
      canActivate: [SupervisorGuard]
    },
    {
      path: 'store/manage',
      component: ManageComponent,
      canActivate: [SupervisorGuard]
    },
    {
      path: 'store/requests',
      component: RequestsComponent,
      canActivate: [SupervisorGuard]
    }
  ]
;

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [SmTitleService],
  exports: [RouterModule]
})
export class StoreRoutingModule {
}

