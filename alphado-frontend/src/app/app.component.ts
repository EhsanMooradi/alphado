import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
        RouterOutlet,
    ],
})
export class AppComponent {
    constructor() {
    }
}
