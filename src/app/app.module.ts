import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AdminModule} from './admin/admin.module';
import {SupervisorModule} from './supervisor/supervisor.module';
import {StandardUserModule} from './standard-user/standard-user.module';
import {AdminGuard} from './_guards/admin.guard';
import {SupervisorGuard} from './_guards/supervisor.guard';
import {AuthGuard} from './_guards/auth.guard';
import {AuthService} from './auth.service';
import {LoginComponent} from './login/login.component';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from './store/store.module';
import {UsersModule} from './users/users.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {FormsModule} from '@angular/forms';
import {AlertService} from './_services/alert.service';
import {NotificationService} from './_services/notification.service';
import {UploadService} from './_services/upload.service';
import {UserService} from './_services/user.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessDeniedComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule, MatSidenavModule, MatMenuModule,
    MatIconModule, MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule,
    AppRoutingModule,
    AdminModule,
    SupervisorModule,
    StandardUserModule,
    StoreModule,
    UsersModule
  ],
  providers: [
    AuthGuard, AdminGuard, SupervisorGuard,
    AuthService, AlertService, NotificationService, UploadService, UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
