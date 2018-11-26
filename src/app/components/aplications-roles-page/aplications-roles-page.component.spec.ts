import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationsRolesPageComponent } from './aplications-roles-page.component';

describe('AplicationsRolesPageComponent', () => {
  let component: AplicationsRolesPageComponent;
  let fixture: ComponentFixture<AplicationsRolesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationsRolesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationsRolesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
