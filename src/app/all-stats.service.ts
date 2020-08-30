import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomRange } from './shared/custom-range.model';

@Injectable({
  providedIn: 'root'
})
export class AllStatsService {

  public resourceUrl = SERVER_API_URL + 'api/v1/stats';
  constructor(private http: HttpClient) { }


  query() {
    // if (search){
    //   return this.http.get<any[]>(this.resourceUrl + '?game_ids[]=' + search);
    // } else {
    //   return this.http.get<any[]>(this.resourceUrl);
    // }
    return this.http.get<any[]>(this.resourceUrl);
  }

  // query(gameIds: string[]) {
  //   let params = new HttpParams();
  //   if (range) {
  //     params = params.append('start_date', range.start);
  //     params = params.append('end_date', range.end);
  //   }
  //   if (gameIds && gameIds.length > 0) {
  //     gameIds.forEach(value => {
  //       params = params.append ('game_ids[]=', value);
  //     });
  //   }
  //   return this.http.get(this.resourceUrl);
  // }
}
