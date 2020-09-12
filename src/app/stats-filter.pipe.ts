import { IGameStats, IPlayerStats } from './all-stats/stats.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statsFilterPipe' })
export class StatsFilterPipe implements PipeTransform {
  transform(items: IPlayerStats [], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(t =>
      // s.game.date.toLocaleLowerCase().includes(searchText)
      // // || s.team.toLocaleLowerCase().includes(searchText)
      // // || s.game.home_team_score.toLocaleLowerCase().includes(searchText)
      // // || s.game.season.toLocaleLowerCase().includes(searchText)
      // // || s.game.visitor_team_id.toLocaleLowerCase().includes(searchText)
      // // || s.game.visitor_team_score.toLocaleLowerCase().includes(searchText)
      t.first_name.toLocaleLowerCase().includes(searchText)
      // || t.postseason.toLocaleLowerCase().includes(searchText)
      || t.last_name.toLocaleLowerCase().includes(searchText)
      || t.position.toLocaleLowerCase().includes(searchText)
      || t.team_id.toLocaleLowerCase().includes(searchText)
      || t.id.toLocaleLowerCase().includes(searchText));
      // || s.team.abbreviation.toLocaleLowerCase().includes(searchText)
      // || s.team.city.toLocaleLowerCase().includes(searchText)
      // || s.team.conference.toLocaleLowerCase().includes(searchText)
      // || s.team.division.toLocaleLowerCase().includes(searchText)
      // || s.team.full_name.toLocaleLowerCase().includes(searchText)
      // || s.team.name.toLocaleLowerCase().includes(searchText));
      // t.date.includes(searchText)
      // || t.home_team_score.includes(searchText)
      // || t.visitor_team_score.includes(searchText)
      // || t.season.includes(searchText));
      // || t.postseason.toLocaleLowerCase().includes(searchText)
      // || t.home_team_id.toLocaleLowerCase().includes(searchText)
      // || t.visitor_team_id.toLocaleLowerCase().includes(searchText));
  }
}
