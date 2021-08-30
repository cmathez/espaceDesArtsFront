import { TestBed } from '@angular/core/testing';

import { EspaceExpositionService } from './espace-exposition.service';

describe('EspaceExpositionService', () => {
  let service: EspaceExpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspaceExpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
