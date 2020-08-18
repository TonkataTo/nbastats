import { Pipe, PipeTransform } from '@angular/core';
import { IGame } from './all-games/game.model';

@Pipe({ name: 'gameFilterPipe' })
export class GameFilterPipe implements PipeTransform {
  transform(items: IGame[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(t =>
      t.date.toLocaleLowerCase().includes(searchText)
      || t.home_team_score.toLocaleLowerCase().includes(searchText)
      || t.visitor_team_score.toLocaleLowerCase().includes(searchText)
      || t.season.toLocaleLowerCase().includes(searchText)
      || t.period.toLocaleLowerCase().includes(searchText)
      || t.status.toLocaleLowerCase().includes(searchText)
      || t.time.toLocaleLowerCase().includes(searchText)
      // || t.postseason.toLocaleLowerCase().includes(searchText)
      || t.home_team.full_name.toLocaleLowerCase().includes(searchText)
      || t.visitor_team.full_name.toLocaleLowerCase().includes(searchText));
  }
}
