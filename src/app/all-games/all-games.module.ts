import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { GameFilterPipe } from '../games-filter.pipe';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AllGamesComponent],

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
  ]
})
export class AllGamesModule { }
