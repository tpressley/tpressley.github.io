import { TestBed } from '@angular/core/testing';

import { MerchItemService } from './merch-item.service';

describe('MerchItemService', () => {
  let service: MerchItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
