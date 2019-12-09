import { TestBed } from '@angular/core/testing';

import { BackenService } from './backen.service';

describe('BackenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackenService = TestBed.get(BackenService);
    expect(service).toBeTruthy();
  });
});
