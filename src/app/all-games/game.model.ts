export interface IGame {
  id?: any;
  date?: string;
  home_team_score?: any;
  visitor_team_score?: any;
  season?: any;
  period?: any;
  status?: string;
  time?: string;
  postseason?: boolean;
  home_team?: string;
  visitor_team?: string;
}

export class Game implements IGame{
  constructor(
    public id?: any,
    public date?: string,
    // tslint:disable-next-line: variable-name
    public home_team_score?: any,
    // tslint:disable-next-line: variable-name
    public visitor_team_score?: any,
    public season?: any,
    public period?: any,
    public status?: string,
    public time?: string,
    public postseason?: boolean,
    // tslint:disable-next-line: variable-name
    public home_team?: string,
    // tslint:disable-next-line: variable-name
    public visitor_team?: string,
  ) {}
}
