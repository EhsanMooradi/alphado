import {Component, OnInit} from '@angular/core';
import {IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";
import {AuthGoogleService} from "./auth-google/service/auth-google.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [
        IonButton,
        IonIcon,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthComponent {

    protected formLogin: FormGroup = new FormGroup({
        email: new FormControl('',),
        password: new FormControl('')
    })

    constructor(private authService: AuthGoogleService, private router: Router) {
    }

    login() {
        const email = this.formLogin.get('email')?.value;
        const password = this.formLogin.get('password')?.value;
        if (email && password) {
            if (email === 'admin' && password === 'admin') {
                localStorage.setItem('isLoggedIn', 'true');
                this.router.navigate(['/home']);

            }
        }
    }

    loginWithGoogle() {
        this.authService.login()
    }


}
