import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeLandingPageComponent } from './acme-landing-page.component';

describe('AcmeLandingPageComponent', () => {
  let component: AcmeLandingPageComponent;
  let fixture: ComponentFixture<AcmeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmeLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
