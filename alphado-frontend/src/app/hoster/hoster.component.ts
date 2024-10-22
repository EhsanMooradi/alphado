import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {LoadingSpinnerComponent} from "../share/components/loading-spinner/loading-spinner.component";

@Component({
  selector: 'app-hoster',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    LoadingSpinnerComponent
  ],
  templateUrl: './hoster.component.html',
  styleUrl: './hoster.component.css'
})
export class HosterComponent {
  inputText: string = '';
  isLoading: boolean = true

  gameCodeFormGroup: FormGroup = new FormGroup({
    gameCodeFormControl: new FormControl(this.inputText, Validators.required),
  });

  ngAfterViewInit(): void {
    setTimeout(() => (this.isLoading = false), 1000);
  }

  constructor(private router: Router,  private activatedRoute: ActivatedRoute) {}

  createNewGame() {
    if (this.gameCodeFormGroup.valid) {
      this.router.navigate(['create-question-and-answer'],{relativeTo: this.activatedRoute});
    }
  }

}
