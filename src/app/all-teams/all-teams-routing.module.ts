import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTeamsComponent } from './all-teams.component';

const routes: Routes = [
  {
    path: 'all-teams',
    component: AllTeamsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTeamsRoutingModule { }
