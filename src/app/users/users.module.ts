import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersRoutingModule} from './users-routing.module';
import {CreateUserComponent} from './create-user/create-user.component';
import {UsersComponent} from './users.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule, MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSelectModule,
    MatExpansionModule, MatIconModule,
    UsersRoutingModule
  ],
  declarations: [CreateUserComponent, UsersComponent]
})
export class UsersModule {
}
