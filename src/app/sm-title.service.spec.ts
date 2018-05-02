import { TestBed, inject } from '@angular/core/testing';

import { SmTitleService } from './sm-title.service';

describe('SmTitleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmTitleService]
    });
  });

  it('should be created', inject([SmTitleService], (service: SmTitleService) => {
    expect(service).toBeTruthy();
  }));
});
