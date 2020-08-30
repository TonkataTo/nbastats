import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { CustomRange } from './shared/custom-range.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllGamesService {

  public resourceUrl = SERVER_API_URL + 'api/v1/games';
  constructor(private http: HttpClient) { }

  query(range: CustomRange, teamIds: string[]) {
    let params = new HttpParams();
    if (range) {
      params = params.append('start_date', range.start);
      params = params.append('end_date', range.end);
    }
    if (teamIds && teamIds.length > 0) {
      teamIds.forEach(value => {
        params = params.append('team_ids[]', value);
      });
    }
    return this.http.get(this.resourceUrl, {params});
  }
}

// export class ToDoService {
//   // tslint:disable-next-line: variable-name
//   private _todos = new BehaviorSubject<ToDo[]>([]);
//   private baseUrl = 'https://www.balldontlie.io/api/v1/stats';
//   private dataStore: { todos: ToDo[] } = { todos: [] }; // store our data in memory
//   readonly todos = this._todos.asObservable();

//   constructor(private http: HttpClient) {} // using Angular Dependency Injection

//   get todos() {
//     return this._todos.asObservable();
//   }
//   loadAll() {
//     this.http.get(`${this.baseUrl}/todos`).subscribe(
//       data => {
//         this.dataStore.todos = data;
//         this._todos.next(Object.assign({}, this.dataStore).todos);
//       },
//       error => console.log('Could not load todos.')
//     );
//   }
// }
// // Push a new copy of our todo list to all Subscribers.
// this._todos.next(Object.assign({}, this.dataStore).todos);
