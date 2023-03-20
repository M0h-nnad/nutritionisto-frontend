import {
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpEvent,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(private cookieService: CookieService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		const authToken = this.cookieService.get('token');
		const authRequest = req.clone({
			headers: req.headers.set('authorization', 'Bearer ' + authToken),
		});
		return next.handle(authRequest);
	}
}
