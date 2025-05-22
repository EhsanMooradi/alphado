import {Component, input, OnInit} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {StudySet} from "../../features/library/study-set/models/study-set";

@Component({
    selector: 'app-tabar',
    templateUrl: './tabbar.component.html',
    styleUrls: ['./tabbar.component.scss'],
    imports: [
        IonTabBar,
        IonTabs,
        IonTabButton,
        IonLabel,
        IonIcon,
        RouterLink
    ]
})
export class TabbarComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {
    }

}
