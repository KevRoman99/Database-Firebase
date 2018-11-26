import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEmployeesComponent } from './register-employees.component';

describe('RegisterEmployeesComponent', () => {
  let component: RegisterEmployeesComponent;
  let fixture: ComponentFixture<RegisterEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
