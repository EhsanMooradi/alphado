import {Component, OnInit} from '@angular/core';
import {IonButton} from "@ionic/angular/standalone";
import {OAuthService} from "angular-oauth2-oidc";
import {AuthGoogleService} from "../../core/auth/auth-google/service/auth-google.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [
        IonButton
    ]
})
export class ProfileComponent implements OnInit {

    constructor(private authGoogleService: AuthGoogleService) {
    }

    ngOnInit() {
    }

    logout() {
        this.authGoogleService.logout();

    }
}
