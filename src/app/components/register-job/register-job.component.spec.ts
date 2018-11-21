import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJobComponent } from './register-job.component';

describe('RegisterJobComponent', () => {
  let component: RegisterJobComponent;
  let fixture: ComponentFixture<RegisterJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
