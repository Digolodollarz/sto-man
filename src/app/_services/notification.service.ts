import {Injectable} from '@angular/core';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {GlobalVariables} from '../globals';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../_models/notification';

@Injectable()
export class NotificationService {
  private apiUrl = GlobalVariables.BASE_API_URL;

  constructor(private http: HttpClient) {
  }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/api/notifications`).pipe(
      tap(users => console.log('Notifications', users))
    );
  }
}
