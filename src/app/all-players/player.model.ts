import { ITeam } from '../all-teams/team.model';

export interface IPlayer {
    id?: string;
    first_name?: string;
    last_name?: string;
    position?: string;
    height_feet?: number;
    height_inches?: number;
    weight_pounds?: number;
    team?: ITeam;
}

export class Player implements IPlayer {
  constructor(
    public id?: string,
    // tslint:disable-next-line: variable-name
    public first_name?: string,
    // tslint:disable-next-line: variable-name
    public last_name?: string,
    public position?: string,
    // tslint:disable-next-line: variable-name
    public height_feet?: number,
    // eslint-disable-next-line @typescript-eslint/tslint/config
    // tslint:disable-next-line: variable-name
    public height_inches?: number,
    // eslint-disable-next-line @typescript-eslint/tslint/config
    // tslint:disable-next-line: variable-name
    public weight_pounds?: number,
    public team?: ITeam
  ) {}
}
