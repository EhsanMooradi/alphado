import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-container.component.html',
  styleUrl: './word-container.component.css',
})
export class WordContainerComponent {
  word: string[] = [];
  @Input() charachter: string[] = [];
  @Input() maxWordLength: number = 0;

  range(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  removeChar(index: number): void {
    this.charachter[index] = '';
  }
}
