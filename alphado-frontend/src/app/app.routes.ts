import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {authGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./core/auth/auth.component";
import {HomeComponent} from "./features/home/home.component";


export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: AuthComponent,
    },

];
