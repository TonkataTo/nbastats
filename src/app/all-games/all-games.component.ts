// import { FilterPipe } from './../filter.pipe';
import { AllGamesService } from './../all-games.service';
import { IGame } from './game.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from '../app.constants';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  games: IGame [] = [];
  search: string;
  minSearchString = MIN_SEARCH_STRING;
  maxSearchString = MAX_SEARCH_STRING;

  constructor(private allGamesService: AllGamesService) {
    this.getAllGames();
  }

  ngOnInit(): void {
  }

  getAllGames(){
    this.allGamesService.query().subscribe((res: any) => {
      this.games = res.data;
    });
  }
}
