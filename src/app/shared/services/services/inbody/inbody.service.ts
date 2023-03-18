import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inbody } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class InbodyService {
  constructor(private readonly http: HttpClient) {}

  createInbody(data: Inbody) {
    return this.http
      .post(`${environment.mainUrl}${environment.inbody}${environment.createInbody}`, data)
      .pipe(
        first(),
        catchError((e) => throwError(() => e))
      );
  }
}
