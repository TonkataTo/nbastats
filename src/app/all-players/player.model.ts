import { ITeam } from '../all-teams/team.model';

export interface IPlayer {
    id?: any;
    first_name?: string;
    team?: ITeam;
  }
  
  export class Player implements IPlayer {
    constructor(
      public id?: any,
      public first_name?: string,
      public team?: ITeam
    ) {}
  }
  