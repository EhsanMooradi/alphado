import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {authGuard} from "./core/guards/auth.guard";
import {AuthComponent} from "./core/auth/auth.component";
import {HomeComponent} from "./features/home/home.component";
import {LibraryComponent} from "./features/library/library.component";
import {ProfileComponent} from "./features/profile/profile.component";
import {StudyRoomComponent} from "./features/library/study-set/study-room/study-room.component";
import {TabbarComponent} from "./core/tabar/tabbar.component";
import {loginGuard} from "./core/guards/login.guard";


export const routes: Routes = [

    {
        path: '',
        component: TabbarComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'library',
                component: LibraryComponent,
                children: [
                    {
                        path: 'study_room/:id',
                        component: StudyRoomComponent,
                    },
                ]
            },
        ]
    },

    {
        path: 'login',
        component: AuthComponent,
    },

];
