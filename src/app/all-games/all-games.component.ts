import { CustomRange } from './../shared/custom-range.model';
import { AllGamesService } from './../all-games.service';
import { IGame, Game } from './game.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from '../app.constants';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

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


  constructor(private allGamesService: AllGamesService,
              private router: Router) {
    this.getAllGames();
  }

  onGameClicked(game: IGame): void {
    this.selectedGames = game;
  }

  ngOnInit(): void {
    this.allGamesService.getHighlightedGames().subscribe((data) => {
      this.highlightedGames = data;
    });
  }

  onSelect(game: IGame): void {
    this.selectedGame = game;
  }

  getAllGames(){
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

  toggleGame(game: Game) {
    this.allGamesService.toggleHighlightedGames(game);
  }
  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

}
