export interface ITeam {
    id?: any;
    full_name?: string;
  }
  
  export class Team implements ITeam {
    constructor(
      public id?: any,
      public full_name?: string
    ) {}
  }
  