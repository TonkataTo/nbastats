import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllStatsService {

  public resourceUrl = SERVER_API_URL + 'api/v1/stats';
  constructor(private http: HttpClient) { }

  query() {
    return this.http.get(this.resourceUrl);
  }
}
