import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {User} from '../_models/user';
import {GlobalVariables} from '../globals';

@Injectable()
export class UserService {
  private apiUrl = GlobalVariables.BASE_API_URL;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      tap(users => console.log('users found', users))
    );
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user/${username}`).pipe(
      tap(user => console.log('user found', user))
    );
  }


  createUser(user): Observable<User> {
    const url = `${this.apiUrl}/user`;
    return this.http.post<User>(url, user).pipe(
      tap(man => console.log(`created user`, man))
    );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed:`, error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
