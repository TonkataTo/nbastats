import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './all-games/game.model';

@Pipe({ name: 'gameFilterPipe' })
export class GameFilterPipe implements PipeTransform {
  transform(items: Game[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(t =>
      t.home_team.full_name.toLocaleLowerCase().includes(searchText)
      || t.visitor_team.full_name.toLocaleLowerCase().includes(searchText));
  }
}
