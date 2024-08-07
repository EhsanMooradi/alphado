import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css',
})
export class StartPageComponent {
  inputText: string = '';
  gameCodeFormGroup: FormGroup = new FormGroup({
    gameCodeFormControl: new FormControl(this.inputText, Validators.required),
  });

  constructor(private router: Router) {}

  joinTheGame() {
    if (this.gameCodeFormGroup.valid) {
      const roomcode = this.gameCodeFormGroup.get('gameCodeFormControl')?.value;
      this.router.navigate(['/makeProfile'], {
        queryParams: { roomcode: roomcode },
      });
    }
  }

  creatAGame() {}
}
