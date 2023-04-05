import { TestBed } from '@angular/core/testing';
import { mockBigData } from '../../../pipes/bigData/big-dat.pipe.spec.data';

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

  it('should call getFilteredData', () => {
    const appliedFilters =  {
      district_externalId:'2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03',
      organisation_id:'0126796199493140480'
    };
    jest.spyOn(service,'getFilteredData');
    service.getFilteredData(mockBigData, appliedFilters);
    expect(service.getFilteredData).toBeCalledWith(mockBigData,appliedFilters);
  })
});
