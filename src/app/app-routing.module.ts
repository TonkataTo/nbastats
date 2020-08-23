import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: '/filterGames', pathMatch: 'full' },
  // { path: 'savedGames', component: ShowGamesNewRouteComponent },
  // { path: 'filterGames', component: FilterNSelectGamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
