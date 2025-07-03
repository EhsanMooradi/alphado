import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthGoogleService} from "../auth/auth-google/service/auth-google.service";

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authGoogleService = inject(AuthGoogleService);
    console.log(authGoogleService.isLoggedIn())

    if (authGoogleService.isLoggedIn()) {
        return true;
    } else {
        router.navigate(['/login']);
        return false;
    }
};
