import { Component } from '@angular/core';
import { GameLogicService } from './service/game-logic.service';
import { question } from './models/question';
import { WordContainerComponent } from './word-container/word-container.component';
import { AlphabetContainerComponent } from './alphabet-container/alphabet-container.component';

@Component({
  selector: 'app-game-container',
  standalone: true,
  imports: [WordContainerComponent, AlphabetContainerComponent],
  templateUrl: './game-container.component.html',
  styleUrl: './game-container.component.css',
})
export class GameContainerComponent {
  word: string = '';
  maxWordLength: number = 0;
  question: string = '';
  questionIndex: number = 0;
  questionMaxIndex: number = 0;
  questions: question[] = [{ question: 'Was geht', answer: 'nix' }];

  constructor(private logic: GameLogicService) {}

  ngOnInit() {
    this.word = '';
    this.maxWordLength = this.questions[this.questionIndex].answer.length;
    this.question = this.questions[this.questionIndex].question;
    this.questionMaxIndex = this.questions.length;
  }

  onSelectStart(event: Event): void {
    event.preventDefault();
  }

  onMouseDown(event: MouseEvent): void {
    event.preventDefault();
  }

  getWord(event: string) {
    if (event === '⌫') {
      this.word = this.word.substring(0, this.word.length - 1);
    }

    if (this.word.length === this.maxWordLength) {
      this.checkTheWord();
    }

    if (this.word.length < this.maxWordLength) {
      if (event === '␣') {
        this.word += ' ';
      } else if (event !== '✓' && event !== '⌫') {
        this.word += event.toLocaleLowerCase();
      }
    }
  }

  checkTheWord() {
    if (this.logic.checkAnswer(this.questions, this.questionIndex, this.word)) {
      alert('Richtig 🥳');
      if (this.questionIndex + 1 === this.questionMaxIndex) {
        this.question = 'Fertig! ✅';
        this.word = '';
        this.maxWordLength = 0;
      } else {
        this.questionIndex++;
        this.ngOnInit();
      }
    }
  }
}
