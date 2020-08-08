import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllPlayersService {

  public resourceUrl = SERVER_API_URL + 'api/v1/players';
  constructor(private http: HttpClient) { }

  query(search?: string) {
    if (search){
      return this.http.get<any[]>(this.resourceUrl + '?search=' + search);
    } else {
      return this.http.get<any[]>(this.resourceUrl);
    }
  }
}
