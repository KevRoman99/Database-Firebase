import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAplicationsRolesComponent } from './register-aplications-roles.component';

describe('RegisterAplicationsRolesComponent', () => {
  let component: RegisterAplicationsRolesComponent;
  let fixture: ComponentFixture<RegisterAplicationsRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAplicationsRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAplicationsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
