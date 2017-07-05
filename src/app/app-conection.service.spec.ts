import { TestBed, inject } from '@angular/core/testing';

import { AppConectionService } from './app-conection.service';

describe('AppConectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppConectionService]
    });
  });

  it('should be created', inject([AppConectionService], (service: AppConectionService) => {
    expect(service).toBeTruthy();
  }));
});
