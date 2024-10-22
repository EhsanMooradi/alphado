import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alphabet-container',
  standalone: true,
  imports: [],
  templateUrl: './alphabet-container.component.html',
  styleUrl: './alphabet-container.component.css',
})
export class AlphabetContainerComponent {
  alphabet: string[] = [
    'a',
    'ä',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'ö',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'ü',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  @Output() letterToSend = new EventEmitter<string>();
  @Input() answerWord = 'nix';
  
  alphabetContainer: string[] = this.generateTheWordContainer(this.answerWord);

  sendLetter(letter: string) {
    this.letterToSend.emit(letter);
  }

  generateTheWordContainer(word: string): string[] {
    let answerAsArray = word.split('');
    let alphabet: string[] = [];

    for (let i = 0; i < answerAsArray.length; i++) {
      alphabet.push(answerAsArray[i]);
      alphabet.push(this.alphabet[this.getRandomInt(0, this.alphabet.length)]);
    }

    return alphabet;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
