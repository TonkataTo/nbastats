

export interface ITeam {
    id?: string;
    abbreviation?: string;
    city?: string;
    conference?: string;
    division?: string;
    full_name?: string;
    name?: string;
  }

export class Team implements ITeam {
  constructor(
    public id?: string,
    public abbreviation?: string,
    public city?: string,
    public conference?: string,
    public division?: string,
    // tslint:disable-next-line: variable-name
    public full_name?: string,
    public name?: string
  ) {}
}
