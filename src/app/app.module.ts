import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlayersModule } from './all-players/all-players.module';
import { AllTeamsModule } from './all-teams/all-teams.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllPlayersModule,
    AllTeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
