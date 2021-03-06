import {Injectable} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'success', text: message});
    this.simpleSnack(message);
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({type: 'error', text: message});
    this.simpleSnack(message);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  openSnack(snackMessage: SnackMessage) {
    this.snackBar.open(snackMessage.message, snackMessage.action);
  }

  simpleSnack(snackMessage: string) {
    this.snackBar.open(snackMessage);
  }
}

export interface SnackMessage {
  message: string;
  action?: string;
  align?: string;
  duration?: number;
  multiline?: boolean;
  dismissOnAction?: boolean;
  focusAction?: boolean;
  actionOnBottom?: boolean;
}
