import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CustomRange } from './shared/custom-range.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './all-games/game.model';

@Injectable({
  providedIn: 'root'
})
export class AllStatsService {

  public resourceUrl = SERVER_API_URL + 'api/v1/stats';
  private playerDetail$: BehaviorSubject<Game> = new BehaviorSubject(null);
  private hightlightedGames$: BehaviorSubject<Map<number, Game>> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  query(gameIds: Map<number, Game>) {
    let params = new HttpParams();
    gameIds.forEach(value => {
        params = params.append('game_ids[]', value.id);
      });
    return this.http.get(this.resourceUrl, {params});
  }


  // getPlayerDetails(): Observable<Game> {
  //   return this.playerDetail$.asObservable();
  // }

  // setPlayerDetails(games: Game) {
  //     this.playerDetail$.next(games);
  // }

  getHighlightedGames(): Observable<Map<number, Game>> {
    return this.hightlightedGames$.asObservable();
  }

  // find(gameId: number) {
  //   const url = 'https://www.balldontlie.io/api/v1/stats?game_ids[]' + gameId;
  //   return this.http.get(url);
  // }
}
