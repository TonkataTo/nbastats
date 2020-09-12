import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PickedGamesComponent } from './picked-games.component';

const routes: Routes = [
  {
    path: 'picked-games',
    component: PickedGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PickedGamesRoutingModule { }
