import {Component, OnInit} from '@angular/core';
import {User} from '../../_models/user';
import {Roles} from '../../_models/roles';
import {UserService} from '../../_services/user.service';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User = new User();
  authorities = [
    {value: {id: Roles.ROLE_USER}, name: 'User'},
    {value: {id: Roles.ROLE_SUPERVISOR}, name: 'Supervisor'},
    {value: {id: Roles.ROLE_ADMIN}, name: 'Admin'},
  ];

  constructor(private userService: UserService,
              private alertService: AlertService) {
  }

  ngOnInit() {
  }

  createUser() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(_user => {
      this.alertService.simpleSnack('User Created');
    }, error1 => {
      this.alertService.simpleSnack('Error creating that user');
    });
  }

}
