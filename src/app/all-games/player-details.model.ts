
export interface IPlayerDetails {
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
  min?: any;
  oreb?: number;
  pf?: number;
  pts?: number;
  reb?: number;
  stl?: number;
  team?: string;
  turnover?: number;
}

export class PlayerDetails implements IPlayerDetails{
  constructor(
    public id?: number,
    public ast?: number,
    public blk?: number,
    // tslint:disable-next-line: variable-name
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
    public min?: any,
    public oreb?: number,
    public pf?: number,
    public pts?: number,
    public reb?: number,
    public stl?: number,
    public team?: string,
    public turnover?: number
  ) {}
}
