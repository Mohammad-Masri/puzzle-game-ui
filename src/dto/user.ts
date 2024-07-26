export interface IUser {
  _id: string;
  name: string;
  username: string;
}

export interface IGame {
  _id: string;
  type: string;
  difficulty: string;
  isRunning: boolean;
  board: any;
  durationInMinutes: number;
  scour: number;
  createdAt: string;
}
