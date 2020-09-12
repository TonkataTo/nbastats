import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { AllGamesService } from '../all-games.service';
import { Game, IGame } from '../all-games/game.model';
import { CustomRange } from '../shared/custom-range.model';

@Component({
  selector: 'app-picked-games',
  templateUrl: './picked-games.component.html',
  styleUrls: ['./picked-games.component.css']
})
export class PickedGamesComponent implements OnInit {

  form: FormGroup;
  pickedGames: Game;
  rangeFilter: CustomRange;
  teamIds: string[] = [];
  games: IGame [] = [];

  get ordersFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder,
              private allGamesService: AllGamesService,
              private router: Router) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.getAllGames();

    // this.addCheckboxes();
  }

  ngOnInit(): void {
  }

  // private addCheckboxes() {
  //   this.pickedGames.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  // }

  submit() {
    const pickedGamesIds = this.form.value.orders
      .map((checked, i) => checked ? this.pickedGames[i].id : null)
      .filter(v => v !== null);
    // eslint-disable-next-line no-console
    console.log(pickedGamesIds);
  }

  getAllGames(){
    this.allGamesService.query(this.rangeFilter, this.teamIds).subscribe((res: any) => {
      this.games = res.data;
    });
  }

}
