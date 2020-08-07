import { Component, OnInit } from '@angular/core';
import { AllPlayersService } from '../all-players.service'
import { IPlayer } from './player.model';
@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrls: ['./all-players.component.css']
})
export class AllPlayersComponent implements OnInit {
  players: IPlayer[] = [];
  constructor(private allPlayersService: AllPlayersService) { 
    this.getAllPlayers();
  }

  ngOnInit(): void {
  }

  getAllPlayers(){
    this.allPlayersService.query().subscribe((res:any) => {
      this.players = res.data;
    });
  }
}
