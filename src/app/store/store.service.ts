import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {GlobalVariables} from '../globals';
import {Storage} from '../_models/storage';
import {Item} from '../_models/item';
import {UserService} from '../_services/user.service';
import {AuthService} from '../auth.service';
import {ItemRequest} from '../_models/item-request';

@Injectable()
export class StoreService {
  private apiUrl = `${GlobalVariables.BASE_API_URL}/api`;

  constructor(private http: HttpClient,
              private userService: AuthService) {
  }


  getItems(offset?: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/item`)
      .pipe(
        tap(items => console.log('Items Fetched', items))
      );
  }


  getFilteredItems(queryText: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/item`, {params: {queryText: queryText}})
      .pipe(
        tap(items => console.log('Items Fetched', items))
      );
  }

  getItem(id: number): Observable<Item> {
    const url = `${this.apiUrl}/item/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`fetched item id=${id}`))
    );
  }

  addItem(item): Observable<Item> {
    const url = `${this.apiUrl}/item`;
    return this.http.post<Item>(url, item).pipe(
      tap(c => console.log(`added item ${c}`))
    );
  }

  createComponent(item): Observable<Item> {
    const url = `${this.apiUrl}/item`;
    return this.http.post<Item>(url, item).pipe(
      tap(c => console.log(`added component ${c}`))
    );
  }


  requestItem(request): Observable<Item> {
    const url = `${this.apiUrl}/request`;
    return this.http.post<Item>(url, request).pipe(
      tap(c => console.log(`Request added ${c.name}`))
    );
  }

  updateComponent(component): Observable<Item> {
    const url = `${this.apiUrl}/component/${component.id}`;
    return this.http.post<Item>(url, component).pipe(
      tap(c => console.log(`Updated component ${c.name}`))
    );
  }

  getComponents(): Observable<Item[]> {
    const url = `${this.apiUrl}/component`;
    return this.http.get<Item[]>(url).pipe(
      tap(compos => console.log(`fetched components`, compos))
    );
  }


  getStorageSpaces(): Observable<Storage[]> {
    const url = `${this.apiUrl}/storage`;
    return this.http.get<Storage[]>(url).pipe(
      // tap(compos => console.log(`fetched components`, compos))
    );
  }

  addStorageSpace(storage: Storage): Observable<Storage> {
    const url = `${this.apiUrl}/storage`;
    return this.http.post<Storage>(url, storage).pipe(
      tap(c => console.log(`Storage added ${c.title}`))
    );
  }

  storeComponent(component: Item): Observable<Item> {
    const url = `${this.apiUrl}/component-storage/store`;
    return this.http.post<Item>(url, component).pipe(
      tap(c => console.log(`Component stored ${c.name}`))
    );
  }

  getComponent(id: number): Observable<Item> {
    const url = `${this.apiUrl}/component/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => console.log(`fetched component id=${id}`))
    );
  }

  // getPendingRequests(offset?: number): Observable<ComponentRequest[]> {
  //   return this.http.get<ComponentRequest[]>(`${this.apiUrl}/request/pending`);
  // }
  //
  deny(request: ItemRequest, reason: string): Observable<ItemRequest> {
    let params = new HttpParams();
    params = params.set('approve', 'false');
    params = params.append('reason', reason);
    return this.http.post<ItemRequest>(`${this.apiUrl}/request/${request.id}`, request, {params: params});
  }

  approve(request: ItemRequest): Observable<ItemRequest> {
    return this.http.post<ItemRequest>(`${this.apiUrl}/request/${request.id}`, request, {params: {approve: 'true'}});
  }
  //
  // requestItem(request: ComponentRequest): Observable<ComponentRequest> {
  //   const url = `${this.apiUrl}/request`;
  //   return this.http.post<ComponentRequest>(url, request);
  // }
  //
  // getUserRequestsByComponentId(userId: number, componentId: number): Observable<ComponentRequest[]> {
  //   const url = `${this.apiUrl}/request/mine/${userId}/${componentId}`;
  //   return this.http.get<ComponentRequest[]>(url);
  // }

  getAllRequests(): Observable<any[]> {
    const url = `${this.apiUrl}/request/all`;
    return this.http.get<any[]>(url);
  }

  getAllUserRequests(): Observable<any[]> {
    const url = `${this.apiUrl}/request/mine`;
    return this.http.get<any[]>(url);
  }

  getStudentComponents(): Observable<any[]> {
    const url = `${this.apiUrl}/student/components`;
    return this.http.get<any[]>(url);
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
      console.error(`${operation} failed: ${error}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

