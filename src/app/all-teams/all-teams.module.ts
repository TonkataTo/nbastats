import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTeamsRoutingModule } from './all-teams-routing.module';
import { AllTeamsComponent } from './all-teams.component';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [AllTeamsComponent, FilterPipe],
  imports: [
    CommonModule,
    AllTeamsRoutingModule,
    FormsModule
  ]
})
export class AllTeamsModule { }
