import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game, IGame } from '../all-games/game.model';

@Component({
  selector: 'app-selected-games',
  templateUrl: './selected-games.component.html',
  styleUrls: ['./selected-games.component.css']
})
export class SelectedGamesComponent {
  @Input() game: IGame[];
  @Output() gameClicked: EventEmitter<object> =
              new EventEmitter<object>();
  onClick(): void {
    this.gameClicked.emit(this.game);
  }
}
