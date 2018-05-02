import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GlobalVariables} from './globals';
import {Router} from '@angular/router';
import {User} from './_models/user';

@Injectable()
export class AuthService {

  // private headers = new HttpHeaders({'Content-Type': 'application/json'});

  private apiUrl = GlobalVariables.BASE_API_URL;
  private baseUrl = GlobalVariables.BASE_API_URL;

  user: User = null;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string, returnUrl?: string) {
    return this.http.post<any>(`${this.baseUrl}/auth`, {username: username, password: password})
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes for some reason
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.setUser(returnUrl);
        }
        return user;
      });
  }

  setUser(returnUrl?: string) {
    this.http.get<User>(`${this.apiUrl}/user`)
      .subscribe(user => {
        console.log('user fetched', user);

        localStorage.setItem('userDetail', JSON.stringify(user));
        if (!returnUrl || returnUrl === '/') {
          if (user.authorities.some(a => a.authority === 'ROLE_ADMIN')) {
            console.log('You\'re a damn admin.');
            this.router.navigate(['/admin']);
          } else if (user.authorities.some(a => a.authority === 'ROLE_STOREMAN')) {
            console.log('You\'re a damn storeman.');
            this.router.navigate(['/storeman']);
          } else if (user.authorities.some(a => a.authority === 'ROLE_STUDENT')) {
            console.log('You\'re a mere student.');
            this.router.navigate(['/student']);
          } else if (user.authorities.some(a => a.authority === 'ROLE_LECTURER')) {
            console.log('You\'re a freaking lecturer.');
            this.router.navigate(['/lecturer']);
          } else {
            console.error('What the hell are you?', user);
          }
        }
      });
  }

  getUser() {
    const user: any = localStorage.getItem('userDetail');
    if (user != null) {
      this.user = JSON.parse(user);
      return this.user;
    } else {
      this.logout();
      this.router.navigate(['/login']);
    }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userDetail');
  }
}
