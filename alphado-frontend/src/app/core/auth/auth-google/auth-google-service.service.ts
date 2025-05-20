import {inject, Injectable, signal} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../config-auth";

@Injectable({
    providedIn: 'root'
})
export class AuthGoogleServiceService {
    constructor(private oauthService: OAuthService) {
        this.configure();
    }

    async configure() {
        this.oauthService.configure(authConfig);
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();

    }

    get userInfo() {
        return this.oauthService.getIdentityClaims();
    }

    get isLoggedIn() {
        return this.oauthService.hasValidAccessToken();
    }

    logout() {
        this.oauthService.logOut();
    }

    login() {
        this.oauthService.initImplicitFlow();

    }
}
