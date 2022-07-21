import { TestBed } from '@angular/core/testing';

import { WebclientService } from './webclient.service';

describe('WebclientService', () => {
  let service: WebclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
