import { PickedGamesModule } from './picked-games/picked-games.module';

import { AllGamesModule } from './all-games/all-games.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlayersModule } from './all-players/all-players.module';
import { AllTeamsModule } from './all-teams/all-teams.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllStatsModule } from './all-stats/all-stats.module';
import { PickedGamesComponent } from './picked-games/picked-games.component';

@NgModule({
  declarations: [
    AppComponent,
    PickedGamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AllPlayersModule,
    AllTeamsModule,
    AllGamesModule,
    AllStatsModule,
    PickedGamesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
