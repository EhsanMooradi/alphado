import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Player } from '../../../share/models/player';

@Injectable({
  providedIn: 'root',
})
export class MakeProfileService {
  private playerSignal?: WritableSignal<Player>;
  private player?: Signal<Player>;

  constructor() {}

  createNewProfile(player: Player): void {
    if (!this.playerSignal) {
      this.playerSignal = signal(player);
      this.player = this.playerSignal.asReadonly();
    }
  }

  getPlayer(): Signal<Player> | null {
    if (this.player) {
      return this.player;
    } else {
      return null;
    }
  }
}
