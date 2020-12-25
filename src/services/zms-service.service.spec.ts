import { TestBed } from '@angular/core/testing';

import { ZmsServiceService } from './zms-service.service';

describe('ZmsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZmsServiceService = TestBed.get(ZmsServiceService);
    expect(service).toBeTruthy();
  });
});
