import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSpaLandingPageComponent } from './student-spa-landing-page.component';

describe('StudentSpaLandingPageComponent', () => {
  let component: StudentSpaLandingPageComponent;
  let fixture: ComponentFixture<StudentSpaLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSpaLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSpaLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
