import {Component, OnInit} from '@angular/core';
import {IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [
        IonContent,
        IonList,
        IonItem,
        IonInput,
        IonLabel,
        IonButton,
        IonIcon
    ]
})
export class AuthComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
