export interface ITeam {
    id?: any;
    abbreviation?: string;
    full_name?: string;
  }

export class Team implements ITeam {
  constructor(
    public id?: any,
    public abbreviation?: string,
    // tslint:disable-next-line: variable-name
    public full_name?: string
  ) {}
}
