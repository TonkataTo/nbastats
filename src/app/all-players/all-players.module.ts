import { AllPlayersRoutingModule } from './all-players-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPlayersComponent} from './all-players.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllPlayersComponent],
  imports: [
    CommonModule,
    AllPlayersRoutingModule,
    FormsModule
  ]
})
export class AllPlayersModule { }
