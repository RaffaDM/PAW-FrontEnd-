import { TestBed } from '@angular/core/testing';

import { PromoterRestServiceService } from './promoter-rest-service.service';

describe('PromoterRestServiceService', () => {
  let service: PromoterRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoterRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
