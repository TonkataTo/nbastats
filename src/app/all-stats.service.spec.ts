import { TestBed } from '@angular/core/testing';

import { AllStatsService } from './all-stats.service';

describe('AllStatsService', () => {
  let service: AllStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
