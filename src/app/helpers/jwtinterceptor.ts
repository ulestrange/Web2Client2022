


import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { from, mergeMap, Observable ,lastValueFrom} from 'rxjs';

import { environment } from '../../environments/environment';
import { CognitoService } from '../cognito.service';


@Injectable()


export class JwtInterceptor implements HttpInterceptor {
    constructor(private cognitoService: CognitoService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url

        //     this.auth.session().subscribe( 
        //         result => {
        //             this.sessionToken = result.idToken.jwtToken;
        //             request = request.clone({
        //                 withCredentials : false,
        //                 setHeaders: {
        //                     Authorization: `Bearer ${this.sessionToken}`
        //                 }            
        //             });    
        //             return next.handle(request);
        //         });
        //     return next.handle(request);
        // }


    //     this.cognitoService.getJWTToken().
    //         then(jwt => {
    //             console.log(`Bearer ${jwt}`);

    //             const isApiUrl = request.url.startsWith(environment.apiUri);
    //             console.log('api ' + isApiUrl)

    //             if (jwt && isApiUrl) {
    //                 console.log('setting headers')
    //                 request = request.clone({
    //                     withCredentials: false,
    //                     setHeaders: { Authorization: `Bearer ${jwt}` }
    //                 });
    //             }
    //             console.log('success')
    //             return next.handle(request);

    //         })

    //         console.log(' will send too soon');

    //         return next.handle(request)

    // }         
return from(this.handle(request ,next))

    }

    async handle(request: HttpRequest<any>, next: HttpHandler) {
        // if your getAuthToken() function declared as "async getAuthToken() {}"
        const jwt = await this.cognitoService.getJWTToken();

        console.log(`Bearer Una ${jwt}`);

    
        request = request.clone({
            withCredentials: false,
             setHeaders: { Authorization: `Bearer ${jwt}` }
        })
    
        return await lastValueFrom(next.handle(request));
      }
}