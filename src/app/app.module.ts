import { AllGamesModule } from './all-games/all-games.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPlayersModule } from './all-players/all-players.module';
import { AllTeamsModule } from './all-teams/all-teams.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AllPlayersModule,
    AllTeamsModule,
    AllGamesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
