import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickedGamesRoutingModule } from './picked-games-routing.module';



@NgModule({
  declarations: [],
  imports: [
    PickedGamesRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PickedGamesModule { }
