import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTeamsRoutingModule } from './all-teams-routing.module';
import { AllTeamsComponent } from './all-teams.component';

@NgModule({
  declarations: [AllTeamsComponent],
  imports: [
    CommonModule,
    AllTeamsRoutingModule
  ]
})
export class AllTeamsModule { }
