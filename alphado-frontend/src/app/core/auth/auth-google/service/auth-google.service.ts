import {inject, Injectable, signal} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {IdentityClaims} from "../models/identity-claims";
import {routes} from "../../../../app.routes";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGoogleService {
    private authConfig: AuthConfig = {
        issuer: 'https://accounts.google.com',
        strictDiscoveryDocumentValidation: false,
        clientId: '1017891631444-dqo4akde2gh09u4m26fr66abuhom8uej.apps.googleusercontent.com',
        redirectUri: window.location.origin + '/home',  // ganz wichtig!
        scope: 'openid profile email',
        showDebugInformation: true,
    }

    constructor(private oauthService: OAuthService, private router: Router) {
        this.configure();
    }

    configure() {
        this.oauthService.configure(this.authConfig);
        this.oauthService.loadDiscoveryDocument().then(() => {
            this.oauthService.tryLoginImplicitFlow().then(() => {
                if (this.oauthService.hasValidAccessToken()) {
                    this.router.navigate(['/home'])
                }
            })
        })
    }


    userInfo(): IdentityClaims {
        return this.oauthService.getIdentityClaims() as IdentityClaims;
    }

    isLoggedIn() {
        return this.oauthService.hasValidAccessToken();
    }

    logout() {
        this.oauthService.logOut();
        this.router.navigate(['/login']);
    }

    login() {
        this.oauthService.initLoginFlow()
    }


}
