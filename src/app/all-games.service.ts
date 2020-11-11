import { HttpClient, HttpParams } from '@angular/common/http';
import { SERVER_API_URL } from './app.constants';
import { Injectable } from '@angular/core';
import { CustomRange } from './shared/custom-range.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './all-games/game.model';

@Injectable({
  providedIn: 'root'
})
export class AllGamesService {

  public resourceUrl = SERVER_API_URL + 'api/v1/games';
  private gameDetail$: BehaviorSubject<Game> = new BehaviorSubject(null);
  private playerDetail$: BehaviorSubject<Game> = new BehaviorSubject(null);
  private hightlightedGames$: BehaviorSubject<Map<number, Game>> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
   // this.m.set(1, new GameStats(....)) // adds to map
   // this.m.set(2, new GameStats(....)) // adds to map
   // this.m.delete(2); //removes from map
  //  this.m.get(1); // get value in this case game stats
  }

  getGameDetails(): Observable<Game> {
      return this.gameDetail$.asObservable();
  }

  setGameDetails(game: Game) {
      this.gameDetail$.next(game);
  }

  getHighlightedGames(): Observable<Map<number, Game>> {
    return this.hightlightedGames$.asObservable();
  }

  toggleHighlightedGames(game: Game) {
    let newGameMap = new Map<number, Game>();
    const sub = this.getHighlightedGames().subscribe((hightlightedGames) => {
      newGameMap = hightlightedGames !== null ? hightlightedGames : new Map<number, Game>();
      if (!newGameMap.get(game.id)  || newGameMap.size === 0) {
        newGameMap.set(game.id, game);
      } else {
        newGameMap.delete(game.id);
      }
    });
    sub.unsubscribe();
    this.hightlightedGames$.next(newGameMap);
  }
  removeHighlightedGame(game: Game) {
    let removeGameMap = new Map<number, Game>();
    const sub = this.getHighlightedGames().subscribe((hightlightedGames) => {
      removeGameMap = hightlightedGames;
      removeGameMap.delete(game.id);
    });
    sub.unsubscribe();
    this.hightlightedGames$.next(removeGameMap);
  }


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
  find(gameId: number) {
    const url = 'https://www.balldontlie.io/api/v1/games/' + gameId;
    return this.http.get(url);
  }
}
