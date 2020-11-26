import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSpaComponent } from './student-spa.component';

describe('StudentSpaComponent', () => {
  let component: StudentSpaComponent;
  let fixture: ComponentFixture<StudentSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
