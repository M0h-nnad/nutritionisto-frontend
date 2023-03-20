import { TestBed } from '@angular/core/testing';

import { DietPlanRequestsService } from './diet-plan-requests.service';

describe('DietPlanRequestsService', () => {
  let service: DietPlanRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietPlanRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
