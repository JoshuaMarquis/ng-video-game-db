import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': '4d9f946226msh9cf5cd19e215017p1a88a4jsn10b849948c62'
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
                
            }
        });
        return next.handle(req);
    }
}