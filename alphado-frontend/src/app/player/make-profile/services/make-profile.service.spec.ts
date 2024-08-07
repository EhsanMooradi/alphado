import { TestBed } from '@angular/core/testing';

import { MakeProfileService } from './make-profile.service';

describe('MakeProfileService', () => {
  let service: MakeProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
