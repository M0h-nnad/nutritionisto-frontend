import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietRequestsComponent } from './diet-requests.component';

describe('DietRequestsComponent', () => {
  let component: DietRequestsComponent;
  let fixture: ComponentFixture<DietRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
