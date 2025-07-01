import {Component, inject, OnInit} from '@angular/core';
import {AuthGoogleService} from "../../core/auth/auth-google/service/auth-google.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: []
})
export class HomeComponent {

    private authService = inject(AuthGoogleService)
    private router = inject(Router);
    user: any

    isLoggedIn: boolean = false;

    constructor(authGoogleService: AuthGoogleService) {
        this.isLoggedIn = authGoogleService.isLoggedIn()
    }

}
