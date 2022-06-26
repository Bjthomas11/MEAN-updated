import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class PostsInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.showLoader();
    return next
      .handle(req)
      .pipe(finalize(() => this.loaderService.hideLoader()));
  }
}
