import {Component, inject, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";
import {JsonPipe} from "@angular/common";
import {AuthGoogleServiceService} from "../../core/auth/auth-google/auth-google-service.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        IonLabel,
        IonTabButton,
        IonTabBar,
        IonTabs,
        IonIcon,
        JsonPipe
    ]
})
export class HomeComponent implements OnInit {

    private authService = inject(AuthGoogleServiceService)
    private router = inject(Router);
    user: any

    constructor() {
    }

    ngOnInit() {
        this.user = this.authService.userInfo;
    }

}
