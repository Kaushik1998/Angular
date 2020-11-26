import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExperimentComponent } from './component-experiment.component';

describe('ComponentExperimentComponent', () => {
  let component: ComponentExperimentComponent;
  let fixture: ComponentFixture<ComponentExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
