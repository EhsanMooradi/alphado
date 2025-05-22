import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {TabbarComponent} from "./core/tabar/tabbar.component";
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
        RouterOutlet,
        TabbarComponent,
        IonApp,
        IonRouterOutlet,
    ],
})
export class AppComponent {
    constructor() {
    }
}
