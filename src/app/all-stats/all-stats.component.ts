import { AllStatsService } from './../all-stats.service';
import { Component, OnInit } from '@angular/core';
import { MAX_SEARCH_STRING, MIN_SEARCH_STRING } from '../app.constants';
import { IGameStats, IPlayerStats, ITeamStats } from './stats.model';
import { CustomRange } from '../shared/custom-range.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.css']
})
export class AllStatsComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  searchText: string;
  rangeFilter: CustomRange;
  search: string;
  // tslint:disable-next-line: variable-name
  games: IGameStats [] = [];
  // tslint:disable-next-line: variable-name
  playerStats: IPlayerStats [] = [];
  teamIds: string[] = [];
  teamStats: ITeamStats [] = [];
  maxSearchString = MAX_SEARCH_STRING;
  minSearchString = MIN_SEARCH_STRING;
  selectedGames: any [] = [];
  selectedCount = 0;
  gameIds: string [] = [];
  selectedItems: string [];


  constructor(private allStatsService: AllStatsService) {
    // this.getAllPlayersInfo();
  }

  ngOnInit(): void {
    // this.selectedItems = new Array<string>();
  }

  // getAllPlayersInfo(){
  //   this.allStatsService.query().subscribe((res: any) => {
  //     // eslint-disable-next-line @typescript-eslint/camelcase
  //     this.playerStats = res.data.map(stat => stat.player);
  //     // this.teams = res.data;
  //   });
  // }

  // getGamesIds(e:any,id:string) {

  // }

  // filterGames() {
  //   this.rangeFilter = null;
  //   const startFormValue = this.range.get('start').value;
  //   const endFormValue  = this.range.get('end').value;
  //   if (startFormValue && endFormValue) {
  //     this.rangeFilter = new CustomRange( JSON.stringify(startFormValue).substring(1, 11),
  //     JSON.stringify(endFormValue).substring(1, 11));
  //   }
  //   this.getAllGames();
  // }

    // getSelected() {
  //   this.selectedGames = this.games.filter(s => {
  //     return s.selected;
  //   });
  //   this.selectedCount = this.selectedGames.length;
  // }

  // Clearing All Selections

  // clearSelection() {
  //   this.searchText = '';
  //   this.games = this.games.filter(g => {
  //     g.selected = false;
  //     return true;
  //   });
  //   this.getSelected();
  // }

  // Delete Single Listed Game Tag

  // deleteGame(id: number) {
  //   this.searchText = '';
  //   this.games = this.games.filter(g => {
  //     if (g.id === id) {
  //       g.selected = false;
  //     }
  //     return true;
  //   });
  //   this.getSelected();
  // }

  // Clear term types by user

  // clearFilter() {
  //   this.searchText = '';
  // }
}
