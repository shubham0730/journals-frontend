import { TestBed } from '@angular/core/testing';

import { ManuscriptDetailsService } from './manuscript-details.service';

describe('ManuscriptDetailsService', () => {
  let service: ManuscriptDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManuscriptDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
