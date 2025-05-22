import {Component, input, OnInit} from '@angular/core';
import {StudySetComponent} from "./study-set/study-set.component";
import {StudySet} from "./study-set/models/study-set";

@Component({
    selector: 'app-library',
    templateUrl: './library.component.html',
    styleUrls: ['./library.component.scss'],
    imports: [
        StudySetComponent
    ]
})
export class LibraryComponent implements OnInit {

    readonly studySets = input<StudySet[]>(
        [
            {
                id: 1,
                title: 'Study Set 1',
                questionsAndAnswers: [
                    {
                        question: 'Question 1',
                        answer: 'Answer 1'
                    }
                ],
                creator: 'Creator A'
            },
            {
                id: 2,
                title: 'Study Set 2',
                questionsAndAnswers: [
                    {
                        question: 'Question 2',
                        answer: 'Answer 2'
                    }
                ],
                creator: 'Creator B'
            },
            {
                id: 3,
                title: 'Study Set 3',
                questionsAndAnswers: [
                    {
                        question: 'Question 3',
                        answer: 'Answer 3'
                    }
                ],
                creator: 'Creator C'
            },
            {
                id: 4,
                title: 'Study Set 4',
                questionsAndAnswers: [
                    {
                        question: 'Question 4',
                        answer: 'Answer 4'
                    }
                ],
                creator: 'Creator D'
            }
        ]
    )

    constructor() {
    }

    ngOnInit() {
    }

}
