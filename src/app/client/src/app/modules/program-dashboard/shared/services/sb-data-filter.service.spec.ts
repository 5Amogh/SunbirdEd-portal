import { TestBed } from '@angular/core/testing';

import { SbDataFilterService } from './sb-data-filter.service';

describe('SbDataFilterService', () => {
  let service: SbDataFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbDataFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
