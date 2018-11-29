import { TestBed } from '@angular/core/testing';

import { AppsRolesService } from './apps-roles.service';

describe('AppsRolesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppsRolesService = TestBed.get(AppsRolesService);
    expect(service).toBeTruthy();
  });
});
