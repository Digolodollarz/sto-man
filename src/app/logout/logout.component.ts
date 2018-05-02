import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.authService.logout();
      window.location.reload();
    } else {
      this.router.navigate(['login']);
    }
  }

}
