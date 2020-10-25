import { AllTeamsService } from './../all-teams.service';
import { ITeam } from './../all-teams/team.model';
import { CustomRange } from './../shared/custom-range.model';
import { AllGamesService } from './../all-games.service';
import { IGame, Game } from './game.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from '../app.constants';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AllStatsService } from '../all-stats.service';
@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit, OnDestroy {
  // onNotify(message: string): void(){}
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  rangeFilter: CustomRange;
  teamIds: string[] = [];
  games: IGame [] = [];
  search: string;
  minSearchString = MIN_SEARCH_STRING;
  maxSearchString = MAX_SEARCH_STRING;
  selectedGames: IGame;
  selectedGame: IGame;
  unsubscribe$: Subject<boolean> = new Subject();
  highlightedGames = new Map<number, Game>();
  myControl = new FormControl();
  options: ITeam[] = [];
  filteredOptions: Observable<ITeam[]>;
  keysOfGames: any;


  constructor(private allGamesService: AllGamesService,
              private router: Router,
              private allTeamsService: AllTeamsService,
              private allStatsService: AllStatsService) {
    this.getAllGames();
    allTeamsService.query().subscribe((res: any) => {
      this.options = res.data;
    });
  }

  onGameClicked(game: IGame): void {
    this.selectedGames = game;
  }

  ngOnInit(): void {
    this.allGamesService.getHighlightedGames().subscribe((data) => {
      this.highlightedGames = data;
    });
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.full_name),
      map(name => name ? this._filter(name) : this.options.slice())
    );
  }

  onSelect(game: IGame): void {
    this.selectedGame = game;
  }

  getAllGames(){
    this.teamIds = [];
    if (this.myControl.value && this.myControl.value instanceof Object) {
      this.teamIds = [this.myControl.value.id];
    }
    this.allGamesService.query(this.rangeFilter, this.teamIds).subscribe((res: any) => {
      this.games = res.data;
    });
  }

  filterGames() {
    this.rangeFilter = null;
    const startFormValue = this.range.get('start').value;
    const endFormValue  = this.range.get('end').value;
    if (startFormValue && endFormValue) {
      this.rangeFilter = new CustomRange( JSON.stringify(startFormValue).substring(1, 11),
      JSON.stringify(endFormValue).substring(1, 11));
    }
    // Set teamIds must be set in separate function
    this.getAllGames();
  }
  goToGamePage(game: Game) {
    this.allGamesService.setGameDetails(game);
    this.router.navigate(['/game-details', game.id]);
  }

  goToPlayersStatsPage(highlightedGames: Game) {
    this.allGamesService.getHighlightedGames();
    this.router.navigate(['/player-details', highlightedGames]);
  }

  toggleGame(game: Game) {
    this.allGamesService.toggleHighlightedGames(game);
  }
  removeGame(game: Game) {
    this.allGamesService.removeHighlightedGame(game);
  }
  displayFn(user: ITeam): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): ITeam[] {
    const searchText = name.toLocaleLowerCase();
    return this.options.filter(t =>
      t.full_name.toLocaleLowerCase().includes(searchText)
      || t.abbreviation.toLocaleLowerCase().includes(searchText)
      || t.city.toLocaleLowerCase().includes(searchText)
      || t.conference.toLocaleLowerCase().includes(searchText)
      || t.division.toLocaleLowerCase().includes(searchText)
      || t.name.toLocaleLowerCase().includes(searchText));
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  getKeys() {
    this.keysOfGames = this.highlightedGames?.keys();
  }

}
