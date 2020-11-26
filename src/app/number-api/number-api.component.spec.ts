import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberApiComponent } from './number-api.component';

describe('NumberApiComponent', () => {
  let component: NumberApiComponent;
  let fixture: ComponentFixture<NumberApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
