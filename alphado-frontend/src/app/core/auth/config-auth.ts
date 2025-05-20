import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    strictDiscoveryDocumentValidation: false,
    clientId: '1017891631444-dqo4akde2gh09u4m26fr66abuhom8uej.apps.googleusercontent.com',
    redirectUri: window.location.origin + '/home',
    scope: 'openid profile email',
}
