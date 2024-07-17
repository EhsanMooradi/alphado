import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Alphado';

  gameCodeFormGroup: FormGroup = new FormGroup({
    codeInput: new FormControl('', Validators.required),
  });

  joinTheGame() {
    console.log(
      'Join the game ' + this.gameCodeFormGroup.get('codeInput')?.value
    );
  }
}
