import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionsPageComponent } from './job-positions-page.component';

describe('JobPositionsPageComponent', () => {
  let component: JobPositionsPageComponent;
  let fixture: ComponentFixture<JobPositionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPositionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
