export interface IGame {
  id?: number;
  date?: string;
  home_team_score?: number;
  visitor_team_score?: number;
  season?: number;
  period?: number;
  status?: string;
  time?: string;
  postseason?: boolean;
  home_team?: string;
  visitors_team?: string;
}

export class Game implements IGame{
  constructor(
    public id?: number,
    public date?: string,
    // tslint:disable-next-line: variable-name
    public home_team_score?: number,
    // tslint:disable-next-line: variable-name
    public visitor_team_score?: number,
    public season?: number,
    public period?: number,
    public status?: string,
    public time?: string,
    public postseason?: boolean,
    // tslint:disable-next-line: variable-name
    public home_team?: string,
    // tslint:disable-next-line: variable-name
    public visitors_team?: string,
  ) {}
}
