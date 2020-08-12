import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllGamesService {

  public resourceUrl = SERVER_API_URL + 'api/v1/games';
  constructor(private http: HttpClient) { }

  query() {
    return this.http.get(this.resourceUrl);
  }
}
