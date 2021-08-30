import { TestBed } from '@angular/core/testing';

import { ReservationEspaceService } from './reservation-espace.service';

describe('ReservationEspaceService', () => {
  let service: ReservationEspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationEspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
