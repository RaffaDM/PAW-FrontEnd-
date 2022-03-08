import { TestBed } from '@angular/core/testing';

import { AdminRestServiceService } from './admin-rest-service.service';

describe('AdminRestServiceService', () => {
  let service: AdminRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
