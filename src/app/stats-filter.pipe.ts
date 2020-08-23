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
    return items.filter(s =>
      s.game.date.toLocaleLowerCase().includes(searchText)
      || s.game.home_team_id.toLocaleLowerCase().includes(searchText)
      || s.game.home_team_score.toLocaleLowerCase().includes(searchText)
      || s.game.season.toLocaleLowerCase().includes(searchText)
      || s.game.visitor_team_id.toLocaleLowerCase().includes(searchText)
      || s.game.visitor_team_score.toLocaleLowerCase().includes(searchText)
      || s.player.first_name.toLocaleLowerCase().includes(searchText)
      // || t.postseason.toLocaleLowerCase().includes(searchText)
      || s.player.last_name.toLocaleLowerCase().includes(searchText)
      || s.player.position.toLocaleLowerCase().includes(searchText)
      || s.player.team_id.toLocaleLowerCase().includes(searchText)
      || s.team.abbreviation.toLocaleLowerCase().includes(searchText)
      || s.team.city.toLocaleLowerCase().includes(searchText)
      || s.team.conference.toLocaleLowerCase().includes(searchText)
      || s.team.division.toLocaleLowerCase().includes(searchText)
      || s.team.full_name.toLocaleLowerCase().includes(searchText)
      || s.team.name.toLocaleLowerCase().includes(searchText));
  }
}
