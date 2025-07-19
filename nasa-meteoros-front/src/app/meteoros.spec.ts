import { TestBed } from '@angular/core/testing';

import { Meteoros } from './meteoros';

describe('Meteoros', () => {
  let service: Meteoros;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Meteoros);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
