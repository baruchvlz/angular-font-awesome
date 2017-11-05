import { TestBed, inject } from '@angular/core/testing';

import { AngularFontAwesomeService } from './angular-font-awesome.service';

describe('AngularFontAwesomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFontAwesomeService]
    });
  });

  it('should create service', inject([AngularFontAwesomeService], (service: AngularFontAwesomeService) => {
    expect(service).toBeTruthy();
  }));
});
