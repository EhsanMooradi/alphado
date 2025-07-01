import {Component, input, OnInit} from '@angular/core';
import {
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {StudySet} from "../../features/library/study-set/models/study-set";
import {addIcons} from "ionicons";
import {home, library, person} from "ionicons/icons";
import {ProfileComponent} from "../../features/profile/profile.component";
import {LibraryComponent} from "../../features/library/library.component";

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
    ]
})
export class TabbarComponent {

    constructor() {
        addIcons({library, home, person});
    }


}
