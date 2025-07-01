import {inject, Injectable, signal} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {IdentityClaims} from "../models/identity-claims";

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
        responseType: 'code',
        showDebugInformation: true,
        sessionChecksEnabled: false,
    }

    constructor(private oauthService: OAuthService) {
        this.configure();
    }

    configure() {
        this.oauthService.configure(this.authConfig);
        this.oauthService.setStorage(sessionStorage);
        this.oauthService.setupAutomaticSilentRefresh();
    }


    userInfo(): IdentityClaims {
        return this.oauthService.getIdentityClaims() as IdentityClaims;
    }

    isLoggedIn() {
        return this.oauthService.hasValidAccessToken();
    }

    logout() {
        this.oauthService.logOut();
    }

    login() {
        this.oauthService.initLoginFlow(); // ← Login redirect starten
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then()

    }


}
