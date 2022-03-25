import { TestBed } from '@angular/core/testing';

import { NavbarControlService } from './navbar-control.service';

describe('NavbarControlService', () => {
  let service: NavbarControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
