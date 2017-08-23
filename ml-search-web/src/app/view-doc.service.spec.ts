import { TestBed, inject } from '@angular/core/testing';

import { ViewDocService } from './view-doc.service';

describe('ViewDocService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewDocService]
    });
  });

  it('should be created', inject([ViewDocService], (service: ViewDocService) => {
    expect(service).toBeTruthy();
  }));
});
