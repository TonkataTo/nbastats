import { ITeam } from './all-teams/team.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teamFilterPipe' })
export class FilterPipe implements PipeTransform {
  transform(items: ITeam[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(t =>
      t.full_name.toLocaleLowerCase().includes(searchText)
      || t.abbreviation.toLocaleLowerCase().includes(searchText)
      || t.city.toLocaleLowerCase().includes(searchText)
      || t.conference.toLocaleLowerCase().includes(searchText)
      || t.division.toLocaleLowerCase().includes(searchText)
      || t.name.toLocaleLowerCase().includes(searchText));
  }
}
