import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoadingSpinnerComponent } from '../../share/components/loading-spinner/loading-spinner.component';
import { MakeProfileService } from './services/make-profile.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-make-profile',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    RouterLink,
  ],
  templateUrl: './make-profile.component.html',
  styleUrl: './make-profile.component.css',
})
export class MakeProfileComponent {
  protected maxProfiles = 3;
  protected profileIndex = 0;
  protected isLoading = true;
  protected formGroupPlayer: FormGroup = new FormGroup({
    playerName: new FormControl('', Validators.required),
    playerProfileImage: new FormControl('', Validators.required),
  });

  constructor(
    private makeProfileService: MakeProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => (this.isLoading = false), 2000);
  }

  createPlayer(): void {
    const roomCode = this.route.snapshot.queryParamMap.get('roomcode');
    console.log(roomCode);
    if (roomCode) {
      this.makeProfileService.createNewProfile({
        name: this.formGroupPlayer.get('playerName')?.value,
        profileImage: this.profileIndex,
        roomCode: roomCode,
      });
      this.router.navigate(['/game'], { queryParams: { roomCode: roomCode } });
    }
  }

  getProfileIndex(): string {
    return 'assets/profile' + this.profileIndex + '.png';
  }

  nextProfile() {
    if (this.profileIndex < this.maxProfiles - 1) {
      this.profileIndex++;
    }
  }

  previousProfile() {
    if (this.profileIndex > 0) {
      this.profileIndex--;
    }
  }
}
