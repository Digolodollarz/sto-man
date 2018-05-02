import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {User} from '../_models/user';
import {SmTitleService} from '../sm-title.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private titleService: SmTitleService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Manage users');
    this.userService.getUsers().subscribe(_users => {
      this.users = _users;
      console.log(this.users);
    });
  }

  updateUser(user: User) {
    console.log(user);
  }

}
