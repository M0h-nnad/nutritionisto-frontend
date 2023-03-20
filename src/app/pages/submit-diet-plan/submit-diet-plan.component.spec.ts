import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitDietPlanComponent } from './submit-diet-plan.component';

describe('SubmitDietPlanComponent', () => {
  let component: SubmitDietPlanComponent;
  let fixture: ComponentFixture<SubmitDietPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitDietPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitDietPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
