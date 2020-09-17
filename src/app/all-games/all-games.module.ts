import { GameFilterPipe } from './../games-filter.pipe';
import { GameCardComponent } from './game-card.component';
import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GameDetailsComponent } from './game-details.component';

@NgModule({
  declarations: [AllGamesComponent, GameDetailsComponent, GameCardComponent, GameFilterPipe],

  bootstrap: [AllGamesComponent],
  imports: [
    CommonModule,
    AllGamesRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [GameCardComponent]
})
export class AllGamesModule { }
