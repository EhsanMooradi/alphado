import { Room } from './room';

export interface Player {
  id?: number;
  name: string;
  profileImage: number | string;
  roomCode: string;
}
