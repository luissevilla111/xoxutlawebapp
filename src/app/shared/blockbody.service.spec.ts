import { TestBed } from '@angular/core/testing';

import { BlockbodyService } from './blockbody.service';

describe('BlockbodyService', () => {
  let service: BlockbodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockbodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
