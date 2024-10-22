import { Routes } from '@angular/router';
import { MakeProfileComponent } from './player/make-profile/make-profile.component';
import { StartPageComponent } from './start-page/start-page.component';
import { GameContainerComponent } from './player/game-container/game-container.component';
import { LoadingScreenComponent } from './share/loading-screen/loading-screen.component';
import {HosterComponent} from "./hoster/hoster.component";
import {CreateQuestionsComponent} from "./hoster/create-questions/create-questions.component";

export const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'make-new-game', component: HosterComponent, children: [
      { path: 'create-question-and-answer', component: CreateQuestionsComponent },
    ]},
  { path: 'makeProfile', component: MakeProfileComponent },
  { path: 'game', component: GameContainerComponent },

  { path: '**', redirectTo: '' },
];
