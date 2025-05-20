import {Component, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        IonLabel,
        IonTabButton,
        IonTabBar,
        IonTabs,
        IonIcon
    ]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
