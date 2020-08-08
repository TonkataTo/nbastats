import { TestBed } from '@angular/core/testing';

import { AllTeamsService } from './all-teams.service';

describe('AllTeamsService', () => {
  let service: AllTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
