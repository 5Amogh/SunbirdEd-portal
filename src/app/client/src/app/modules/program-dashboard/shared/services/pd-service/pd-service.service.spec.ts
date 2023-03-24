import { TestBed } from '@angular/core/testing';

import { PdServiceService } from './pd-service.service';

describe('PdServiceService', () => {
  let service: PdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
