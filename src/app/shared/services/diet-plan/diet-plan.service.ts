import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DietPlanService {
  constructor(private http: HttpClient) {}

  createDietPlan(data: any) {
    return this.http
      .post(
        `${environment.mainUrl}${environment.dietPlan}${environment.createDietPlan}`,
        data
      )
      .pipe(
        first(),
        catchError((e) => throwError(() => e))
      );
  }
}
