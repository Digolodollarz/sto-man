import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AlertService} from '../_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  returnUrl: string;
  error: any = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this.authService.login(this.user, this.pass, this.returnUrl)
      .subscribe(
        data => {
          if (this.returnUrl) {
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.alertService.error(error.error || error.message);
          this.error = error.error || error.message;
          console.log(error);
        });
  }
}
