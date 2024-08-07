import { Injectable } from '@angular/core';
import { question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  constructor() {}

  public checkAnswer(
    questions: question[],
    questionIndex: number,
    answer: string
  ): boolean {
    if (
      questions[questionIndex].answer.toLocaleLowerCase() ===
      answer.toLocaleLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
}
