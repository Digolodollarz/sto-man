import {Component, OnInit} from '@angular/core';
import {User} from './_models/user';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: User;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
