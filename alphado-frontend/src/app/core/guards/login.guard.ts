import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthGoogleService} from "../auth/auth-google/service/auth-google.service";

export const loginGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authGoogleService = inject(AuthGoogleService);
    if (authGoogleService.isLoggedIn()) {
        router.navigate(['/home']);
        return false;
    } else {
        return true;
    }
};
