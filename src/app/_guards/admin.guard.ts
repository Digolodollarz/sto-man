import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return so check admin rights

      let user: any = localStorage.getItem('userDetail');
      if (user != null) {
        user = JSON.parse(user);
        if (user.authorities.some(a => a.authority === 'ROLE_ADMIN')) {
          return true;
        }
        // not an admin saka deny access
        this.router.navigate(['/access-denied'], {queryParams: {url: state.url}});
        return false;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
