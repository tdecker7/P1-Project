import { TestBed, inject } from '@angular/core/testing';

import { ArrayFillService } from './array-fill.service';

describe('ArrayFillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayFillService]
    });
  });

  it('should be created', inject([ArrayFillService], (service: ArrayFillService) => {
    expect(service).toBeTruthy();
  }));
});
