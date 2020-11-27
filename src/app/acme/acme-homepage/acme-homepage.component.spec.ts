import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeHomepageComponent } from './acme-homepage.component';

describe('AcmeHomepageComponent', () => {
  let component: AcmeHomepageComponent;
  let fixture: ComponentFixture<AcmeHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmeHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
