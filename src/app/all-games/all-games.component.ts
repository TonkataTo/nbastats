import { CustomRange } from './../shared/custom-range.model';
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
  rangeFilter: CustomRange;
  teamIds: string[] = [];
  games: IGame [] = [];
  search: string;
  minSearchString = MIN_SEARCH_STRING;
  maxSearchString = MAX_SEARCH_STRING;

  constructor(private allGamesService: AllGamesService) {
    this.getAllGames();
  }

  ngOnInit(): void {
      // this.todos = this.todoService.todos; // subscribe to entire collection

      // // subscribe to only one todo
      // this.singleTodo$ = this.todoService.todos.pipe(
      //   map(todos => todos.find(item => item.id === '1'))
      // );

      // this.todoService.loadAll();    // load all todos
      // this.todoService.load('1');    // load only todo with id of '1'
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
}
