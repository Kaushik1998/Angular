import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSpaStudentsComponent } from './student-spa-students.component';

describe('StudentSpaStudentsComponent', () => {
  let component: StudentSpaStudentsComponent;
  let fixture: ComponentFixture<StudentSpaStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSpaStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSpaStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
