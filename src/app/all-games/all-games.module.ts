import { AllGamesRoutingModule } from './all-games-routing.module';
import { AllGamesComponent } from './all-games.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AllGamesComponent],
  imports: [
    CommonModule,
    AllGamesRoutingModule,
    FormsModule
  ]
})
export class AllGamesModule { }
