import { Component, OnInit } from '@angular/core';
import { AllPlayersService } from '../all-players.service';
import { IPlayer } from './player.model';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
  players: IPlayer[] = [];
  search: string;
  maxSearchString = 40;
  minSearchString = 2;
  constructor(private allPlayersService: AllPlayersService) {
    this.getAllPlayers();
  }

  ngOnInit(): void {
  }


  getAllPlayers() {
    // tslint:disable-next-line: typedef-whitespace
    this.allPlayersService.query().subscribe((res: any) => {
      this.players = res.data;
    });
  }

  searchPlayers() {
    if (this.search?.length >= this.minSearchString && this.search?.length < this.maxSearchString) {
      this.allPlayersService.query(this.search).subscribe((res: any) => {
        this.players = res.data;
      });
    }
  }
}
