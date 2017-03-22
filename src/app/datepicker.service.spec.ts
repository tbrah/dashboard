import { TestBed, inject } from '@angular/core/testing';

import { DatepickerService } from './datepicker.service';

describe('DatepickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatepickerService]
    });
  });

  it('should ...', inject([DatepickerService], (service: DatepickerService) => {
    expect(service).toBeTruthy();
  }));
});
