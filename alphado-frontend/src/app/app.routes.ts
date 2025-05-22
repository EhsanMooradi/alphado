import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {authGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./core/auth/auth.component";
import {HomeComponent} from "./features/home/home.component";
import {LibraryComponent} from "./features/library/library.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {StudyRoomComponent} from "./features/library/study-set/study-room/study-room.component";


export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
    },
    {
        path: 'library',
        component: LibraryComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'study-room',
                component: StudyRoomComponent,
            }
        ],

    },

    {
        path: 'login',
        component: AuthComponent,
    },

];
