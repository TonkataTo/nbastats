import { GameDetailsComponent } from './game-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllGamesComponent } from './all-games.component';

const routes: Routes = [
  {
    path: 'all-games',
    component: AllGamesComponent
  },
  {
    path: 'game-details/:id',
    component: GameDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllGamesRoutingModule { }
