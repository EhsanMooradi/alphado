import {bootstrapApplication} from '@angular/platform-browser';
import {RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules} from '@angular/router';
import {IonicRouteStrategy, provideIonicAngular} from '@ionic/angular/standalone';

import {routes} from './app/app.routes';
import {AppComponent} from './app/app.component';
import {OAuthService, provideOAuthClient} from "angular-oauth2-oidc";
import {provideHttpClient} from "@angular/common/http";
import {iosTransitionAnimation} from '@ionic/angular';

bootstrapApplication(AppComponent, {
    providers: [
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        provideOAuthClient(),
        provideHttpClient(),
        provideIonicAngular({
            animated: true,
            navAnimation: iosTransitionAnimation,
        }),
        provideRouter(routes),

    ],

});

