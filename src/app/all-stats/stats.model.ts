import { ITeam } from '../all-teams/team.model';


export interface IStats {
  id?: number;
  ast?: number;
  blk?: number;
  dreb?: number;
  fg3_pct?: number;
  fg3a?: number;
  fg3m?: number;
  fg_pct?: number;
  fga?: number;
  fgm?: number;
  ft_pct?: number;
  fta?: number;
  ftm?: number;
  game?: IGameStats;
  min?: string;
  oreb?: number;
  pf?: number;
  player?: IPlayerStats;
  pts?: number;
  reb?: number;
  stl?: number;
  team?: ITeamStats;
  turnover?: number;

}

export class Stats implements IStats {
  // tslint:disable-next-line: no-misused-new
  constructor(
    public id?: number,
    public ast?: number,
    public blk?: number,
    public dreb?: number,
    // tslint:disable-next-line: variable-name
    public fg3_pct?: number,
    public fg3a?: number,
    public fg3m?: number,
    // tslint:disable-next-line: variable-name
    public fg_pct?: number,
    public fga?: number,
    public fgm?: number,
    // tslint:disable-next-line: variable-name
    public ft_pct?: number,
    public fta?: number,
    public ftm?: number,
    public game?: IGameStats,
    public min?: string,
    public oreb?: number,
    public pf?: number,
    public player?: IPlayerStats,
    public pts?: number,
    public reb?: number,
    public stl?: number,
    public team?: ITeamStats,
    public turnover?: number
  ) {}
}

export interface IGameStats {
  id?: number;
  date?: any;
  home_team_id?: ITeamStats;
  home_team_score?: string;
  season?: string [];
  visitor_team_id?: ITeamStats;
  visitor_team_score?: string;
  selected?: boolean;
}

export class GameStats implements IGameStats {
  constructor(
    public id?: number,
    public date?: any,
    // tslint:disable-next-line: variable-name
    public home_team_id?: ITeamStats,
    // tslint:disable-next-line: variable-name
    public home_team_score?: string,
    public season?: string [],
    // eslint-disable-next-line @typescript-eslint/tslint/config
    // tslint:disable-next-line: variable-name
    public visitor_team_id?: ITeamStats,
    // tslint:disable-next-line: variable-name
    public visitor_team_score?: string,
    public selected?: boolean
  ) {}
}

export interface IPlayerStats {
  id?: any;
  first_name?: string;
  last_name?: string;
  position?: string;
  team_id?: any;
}

export class PlayerStats implements IPlayerStats {
  constructor(
    public id?: any,
    // tslint:disable-next-line: variable-name
    public first_name?: string,
    // tslint:disable-next-line: variable-name
    public last_name?: string,
    public position?: string,
    // tslint:disable-next-line: variable-name
    public team_id?: any
  ) {}
}

export interface ITeamStats {
  id?: number;
  abbreviation?: string;
  city?: string;
  conference?: string;
  division?: string;
  full_name?: string;
  name?: string;
}

export class TeamStats implements ITeamStats {
  constructor(
    public id?: number,
    public abbreviation?: string,
    public city?: string,
    public conference?: string,
    public division?: string,
    // tslint:disable-next-line: variable-name
    public full_name?: string,
    public name?: string
  ) {}
}
