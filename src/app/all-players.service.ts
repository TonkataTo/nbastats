import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app/app.constants';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllPlayersService {

  public resourceUrl = SERVER_API_URL + 'api/v1/players';
  constructor(private http: HttpClient) { }
  
  query() {
    return this.http.get<any[]>(this.resourceUrl);
  }
}
