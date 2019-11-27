import { TestBed } from '@angular/core/testing';

import { CarparkingService } from './carparking.service';

describe('CarparkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarparkingService = TestBed.get(CarparkingService);
    expect(service).toBeTruthy();
  });
});
