import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DietPlanRequestsService } from 'src/app/shared/services/diet-plan-requests/diet-plan-requests.service';
import { DietPlanRequest } from 'src/app/shared/types';
@Component({
  selector: 'app-diet-requests',
  templateUrl: './diet-requests.component.html',
  styleUrls: ['./diet-requests.component.scss'],
})
export class DietRequestsComponent implements OnInit {
  dietPlanRequests!: DietPlanRequest[];

  constructor(
    private readonly dietPlanRequestService: DietPlanRequestsService,
    private readonly toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.dietPlanRequestService.getDietPlanRequests().subscribe(
      (res: any) => {
        this.dietPlanRequests = res;
      },
      (error: any) => {
        this.toastrService.error(error.error.message);
      }
    );
  }

}
