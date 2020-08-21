import { IStats } from './all-stats/stats.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statsFilterPipe' })
export class StatsFilterPipe implements PipeTransform {
  transform(items: IStats [], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(t =>
      t.game.date.toLocaleLowerCase().includes(searchText)
      || t.game.home_team_id.toLocaleLowerCase().includes(searchText)
      || t.game.home_team_score.toLocaleLowerCase().includes(searchText)
      || t.game.season.toLocaleLowerCase().includes(searchText)
      || t.game.visitor_team_id.toLocaleLowerCase().includes(searchText)
      || t.game.visitor_team_score.toLocaleLowerCase().includes(searchText)
      || t.player.first_name.toLocaleLowerCase().includes(searchText)
      // || t.postseason.toLocaleLowerCase().includes(searchText)
      || t.player.last_name.toLocaleLowerCase().includes(searchText)
      || t.player.position.toLocaleLowerCase().includes(searchText)
      || t.player.team_id.toLocaleLowerCase().includes(searchText)
      || t.team.abbreviation.toLocaleLowerCase().includes(searchText)
      || t.team.city.toLocaleLowerCase().includes(searchText)
      || t.team.conference.toLocaleLowerCase().includes(searchText)
      || t.team.division.toLocaleLowerCase().includes(searchText)
      || t.team.full_name.toLocaleLowerCase().includes(searchText)
      || t.team.name.toLocaleLowerCase().includes(searchText));
  }
}
