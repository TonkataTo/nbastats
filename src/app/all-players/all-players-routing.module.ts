import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPlayersComponent } from './all-players.component';

const routes: Routes = [
  {
    path: 'all-players',
    component: AllPlayersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPlayersRoutingModule { }
