import { Routes } from '@angular/router';
import { MakeProfileComponent } from './player/make-profile/make-profile.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GameContainerComponent } from './player/game-container/game-container.component';
import { LoadingScreenComponent } from './share/loading-screen/loading-screen.component';

export const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'makeProfile', component: MakeProfileComponent },
  { path: 'game', component: GameContainerComponent },

  { path: '**', redirectTo: '' },
];
