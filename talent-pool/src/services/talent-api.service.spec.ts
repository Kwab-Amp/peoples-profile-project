import { TestBed } from '@angular/core/testing';

import { TalentApiService } from './talent-api.service';

describe('TalentApiService', () => {
  let service: TalentApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
