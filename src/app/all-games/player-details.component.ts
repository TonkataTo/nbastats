import { PlayerDetails } from './player-details.model';
import { AllStatsService } from './../all-stats.service';
import { AllGamesService } from './../all-games.service';
import { Game } from './game.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selectedGameKey: Game;
  players: PlayerDetails;

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

showPlayersFromGame(selectedGameKey: Game) {
  this.allStatsService.getPlayersNames(selectedGameKey);
}

ngOnDestroy() {
  this.unsubscribe$.next(true);
  this.unsubscribe$.complete();
}

}
