import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DietPlanService } from 'src/app/shared/services/diet-plan/diet-plan.service';
import { DietPlan } from 'src/app/shared/types';

@Component({
  selector: 'app-submit-diet-plan',
  templateUrl: './submit-diet-plan.component.html',
  styleUrls: ['./submit-diet-plan.component.scss'],
})
export class SubmitDietPlanComponent implements OnInit {
  dietPlanForm!: FormGroup;
  dietPlanRequestId!: number | null | string;
  userId!: number | null | string;
  constructor(
    private fb: FormBuilder,
    private readonly dietPlanService: DietPlanService,
    private readonly toastrService: ToastrService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dietPlanRequestId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    if (this.dietPlanRequestId === null || this.userId === null) return;
    this.dietPlanRequestId = +this.dietPlanRequestId;
    this.userId = +this.userId;
    this.createDietPlanForm();
  }

  createDietPlanForm(): void {
    this.dietPlanForm = this.fb.group({
      dietPlanRequestId: [this.dietPlanRequestId],
      userId: [this.userId],
      name: ['', Validators.required],
      description: [''],
      calories: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const dietPlan: DietPlan = this.dietPlanForm.value;
    this.dietPlanService.createDietPlan(dietPlan).subscribe({
      next: (res) => {
        console.warn(res);
      },
      error: (error) => {
        this.toastrService.error(error.error.message);
      },
    });
  }
}
