import { StatsFilterPipe } from './../stats-filter.pipe';
import { AllStatsRoutingModule } from './all-stats-routing.module';
import { AllStatsComponent } from './all-stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AllTeamsRoutingModule } from '../all-teams/all-teams-routing.module';



@NgModule({
  declarations: [AllStatsComponent, StatsFilterPipe],
  imports: [
    CommonModule,
    AllStatsRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AllTeamsRoutingModule
  ]
})
export class AllStatsModule { }
