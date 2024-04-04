import { TestBed } from '@angular/core/testing';

import { ComponentserviceService } from './componentservice.service';

describe('ComponentserviceService', () => {
  let service: ComponentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
