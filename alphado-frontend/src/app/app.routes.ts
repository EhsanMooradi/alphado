import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {authGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./core/auth/auth.component";


export const routes: Routes = [
    {
        path: 'home',
        component: AppComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: AuthComponent,
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
