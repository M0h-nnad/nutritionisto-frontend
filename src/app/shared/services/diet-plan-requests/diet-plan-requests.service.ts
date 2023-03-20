import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DietPlanRequestsService {
  constructor(private httpClient: HttpClient) {}

  getDietPlanRequests() {
    return this.httpClient
      .get(
        `${environment.mainUrl}${environment.dietPlanRequest}${environment.getDietPlanRequest}`
      )
      .pipe(
        first(),
        catchError((e) => throwError(() => e))
      );
  }
}
