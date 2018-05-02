import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from './store/store.component';
import {StoreRoutingModule} from './store-routing.module';
import {ItemsComponent} from './items/items.component';
import {ManageComponent} from './manage/manage.component';
import {CreateComponent} from './create/create.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, NgModel} from '@angular/forms';
import { StoreService } from './store.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule,
    MatToolbarModule, MatCardModule, MatButtonModule,
    MatInputModule, MatCheckboxModule, MatSelectModule,
    MatDialogModule
  ],
  declarations: [StoreComponent, ItemsComponent, ManageComponent, CreateComponent, ItemDetailComponent],
  providers: [StoreService],
  entryComponents: [ItemDetailComponent]
})
export class StoreModule {
}
