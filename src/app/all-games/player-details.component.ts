import { AllStatsService } from './../all-stats.service';
import { CustomRange } from './../shared/custom-range.model';
import { AllGamesService } from './../all-games.service';
import { IGame, Game } from './game.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from '../app.constants';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit, OnDestroy {

  games = new Map<number, Game>();
  highlightedGames = new Map<number, Game>();
  unsubscribe$: Subject<boolean> = new Subject();
  keysOfGames: any;

  constructor(private allStatsService: AllStatsService,
              private router: Router,
              public route: ActivatedRoute,
              private activatedRoute: ActivatedRoute,
              private allGamesService: AllGamesService) {
                this.getKeys();
  }

  ngOnInit(): void {
    this.allGamesService.getHighlightedGames().subscribe((highlightedGames) => {
      this.highlightedGames = highlightedGames;
      this.getKeys();
    });
  }

getKeys() {
  this.keysOfGames = this.highlightedGames?.keys();
}

showPlayersFromGame() {

}

ngOnDestroy() {
  this.unsubscribe$.next(true);
  this.unsubscribe$.complete();
}

}
