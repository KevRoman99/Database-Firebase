import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryPageComponent } from './registry-page.component';

describe('RegistryPageComponent', () => {
  let component: RegistryPageComponent;
  let fixture: ComponentFixture<RegistryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
