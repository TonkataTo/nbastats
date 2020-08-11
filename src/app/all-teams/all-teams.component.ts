import { MIN_SEARCH_STRING, MAX_SEARCH_STRING } from './../app.constants';
import { Component, OnInit } from '@angular/core';
import { ITeam } from './team.model';
import { AllTeamsService } from '../all-teams.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {
  teams: ITeam[] = [];
  search: string;
  minSearchString = MIN_SEARCH_STRING;
  maxSearchString = MAX_SEARCH_STRING;
  constructor(private allTeamsService: AllTeamsService) {
    this.getAllTeams();
  }

  ngOnInit(): void {
  }

  getAllTeams() {
    // tslint:disable-next-line: typedef-whitespace
    this.allTeamsService.query().subscribe((res: any) => {
      this.teams = res.data;
    });
  }
  // searchTeams(){
  //   if (this.search?.length >= this.minSearchString && this.search?.length < this.maxSearchString) {
  //     this.allTeamsService.query(this.search).subscribe((res: any) => {
  //       this.teams = res.data;
  //     });
  //   }
  // }

}
