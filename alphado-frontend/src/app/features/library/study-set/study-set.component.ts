import {Component, input, OnInit} from '@angular/core';
import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonIcon,
    IonLabel, IonText
} from "@ionic/angular/standalone";
import {StudySet} from "./models/study-set";
import {Router, RouterLink} from "@angular/router";

@Component({
    selector: 'app-study-set',
    templateUrl: './study-set.component.html',
    styleUrls: ['./study-set.component.scss'],
    imports: [
        IonLabel,
        IonCardSubtitle,
        IonCard,
        IonButton,
        IonIcon,
        RouterLink,
    ]
})
export class StudySetComponent {

    readonly studySet = input<StudySet>()

    constructor(private router: Router) {
    }

    playStudySet() {
        this.router.navigate(['/study-room'])
    }


}
