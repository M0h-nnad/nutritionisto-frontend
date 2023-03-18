import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitInbodyComponent } from './submit-inbody.component';

describe('SubmitInbodyComponent', () => {
  let component: SubmitInbodyComponent;
  let fixture: ComponentFixture<SubmitInbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitInbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitInbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
