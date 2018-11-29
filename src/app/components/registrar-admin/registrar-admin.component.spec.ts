import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdminComponent } from './registrar-admin.component';

describe('RegistrarAdminComponent', () => {
  let component: RegistrarAdminComponent;
  let fixture: ComponentFixture<RegistrarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
