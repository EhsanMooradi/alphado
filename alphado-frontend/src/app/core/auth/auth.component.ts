import {Component, OnInit} from '@angular/core';
import {IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";
import {AuthGoogleServiceService} from "./auth-google/auth-google-service.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [
        IonList,
        IonItem,
        IonInput,
        IonLabel,
        IonButton,
        IonIcon
    ]
})
export class AuthComponent {

    constructor(private authService: AuthGoogleServiceService) {
    }

    user: any;

    login() {
        this.authService.login()
    }


}
