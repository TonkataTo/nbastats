import { AllStatsRoutingModule } from './all-stats-routing.module';
import { AllStatsComponent } from './all-stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AllStatsComponent],
  imports: [
    CommonModule,
    AllStatsRoutingModule,
    FormsModule
  ]
})
export class AllStatsModule { }
