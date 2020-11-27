import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmeHomeComponent } from './acme-root.component';

describe('AcmeHomeComponent', () => {
  let component: AcmeHomeComponent;
  let fixture: ComponentFixture<AcmeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
