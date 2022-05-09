import { TestBed } from '@angular/core/testing';

import { PrdouctService } from './prdouct.service';

describe('PrdouctService', () => {
  let service: PrdouctService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdouctService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
