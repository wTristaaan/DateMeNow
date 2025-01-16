import { TestBed } from '@angular/core/testing';

import { ComponentStatusService } from './component-status.service';

describe('ComponentStatusService', () => {
  let service: ComponentStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
