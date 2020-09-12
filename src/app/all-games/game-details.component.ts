import { CustomRange } from './../shared/custom-range.model';
import { AllGamesService } from './../all-games.service';
import { IGame, Game } from './game.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from '../app.constants';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit, OnDestroy {

  game: Game;
  unsubscribe$: Subject<boolean> = new Subject();
  private paramSubcription: any;
  gameId;
  constructor(private allGamesService: AllGamesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.allGamesService.getGameDetails().subscribe((storedGame) => {
      if (storedGame) {
        this.game = storedGame;
      } else{
        this.paramSubcription = this.activatedRoute.params.subscribe(params => {
           // tslint:disable-next-line: no-string-literal
           this.gameId = params['id'];
           this.allGamesService.find(this.gameId).subscribe((apiGame: Game) => {
             this.game = apiGame;
           });
        });
      }
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    if (this.paramSubcription) {
      this.paramSubcription.unsubscribe();
    }
  }

}
