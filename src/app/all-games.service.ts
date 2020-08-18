import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { CustomRange } from './shared/custom-range.model';

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
