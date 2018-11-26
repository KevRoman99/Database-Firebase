import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClientsComponent } from './register-clients.component';

describe('RegisterClientsComponent', () => {
  let component: RegisterClientsComponent;
  let fixture: ComponentFixture<RegisterClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
