import { TestBed } from '@angular/core/testing';

import { AllPlayersService } from './all-players.service';

describe('AllPlayersService', () => {
  let service: AllPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
