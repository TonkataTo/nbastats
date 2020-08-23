import { AllStatsService } from './../all-stats.service';
import { Component, OnInit } from '@angular/core';
import { MAX_SEARCH_STRING, MIN_SEARCH_STRING } from '../app.constants';
import { IGameStats, IPlayerStats, ITeamStats } from './stats.model';

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.css']
})
export class AllStatsComponent implements OnInit {

  searchText: string;
  search: string;
  // tslint:disable-next-line: variable-name
  game_ids: string [] = [];
  // tslint:disable-next-line: variable-name
  player_ids: string [] = [];
  teamIds: string[] = [];
  games: IGameStats [] = [];
  players: IPlayerStats [] = [];
  teams: ITeamStats [] = [];
  maxSearchString = MAX_SEARCH_STRING;
  minSearchString = MIN_SEARCH_STRING;
  selectedGames: any [] = [];
  selectedCount = 0;

  constructor(private allStatsService: AllStatsService) { }

  ngOnInit(): void {
  }

  getSelected() {
    this.selectedGames = this.games.filter(s => {
      return s.selected;
    });
    this.selectedCount = this.selectedGames.length;
  }
  // Clearing All Selections
  clearSelection() {
    this.searchText = '';
    this.games = this.games.filter(g => {
      g.selected = false;
      return true;
    });
    this.getSelected();
  }

  // Delete Single Listed Game Tag
  deleteGame(id: number) {
    this.searchText = '';
    this.games = this.games.filter(g => {
      if (g.id === id) {
        g.selected = false;
      }
      return true;
    });
    this.getSelected();
  }

  // Clear term types by user
  clearFilter() {
    this.searchText = '';
  }
}
