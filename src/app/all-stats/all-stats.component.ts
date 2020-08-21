import { AllStatsService } from './../all-stats.service';
import { Component, OnInit } from '@angular/core';
import { IGame } from '../all-games/game.model';
import { MAX_SEARCH_STRING, MIN_SEARCH_STRING } from '../app.constants';

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.css']
})
export class AllStatsComponent implements OnInit {

  search: string;
  // tslint:disable-next-line: variable-name
  game_ids: string [] = [];
  // tslint:disable-next-line: variable-name
  player_ids: string [] = [];
  teamIds: string[] = [];
  games: IGame [] = [];
  maxSearchString = MAX_SEARCH_STRING;
  minSearchString = MIN_SEARCH_STRING;

  constructor(private allStatsService: AllStatsService) { }

  ngOnInit(): void {
  }
}
