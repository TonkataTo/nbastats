import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPlayersRoutingModule } from './all-players-routing.module';
import { AllPlayersComponent} from './all-players.component';

@NgModule({
  declarations: [AllPlayersComponent],
  imports: [
    CommonModule,
    AllPlayersRoutingModule
  ]
})
export class AllPlayersModule { }
