import { TestBed, inject } from '@angular/core/testing';

import { OutsidersService } from './outsiders.service';

describe('OutsidersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OutsidersService]
    });
  });

  it('should ...', inject([OutsidersService], (service: OutsidersService) => {
    expect(service).toBeTruthy();
  }));
});
