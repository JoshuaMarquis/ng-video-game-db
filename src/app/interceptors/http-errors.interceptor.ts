import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowEror, throwError } from "rxjs";
import {catchError} from 'rxjs/operators';

@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor{
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.handleError)
            //catchError((err) => {
                //console.log(err);
                //return observableThrowEror(err);
            //})
        );
    }
    handleError(error:any){
        console.log(error);
        //return throwError(error.message);
        return throwError(() => new Error(error));
    }

}