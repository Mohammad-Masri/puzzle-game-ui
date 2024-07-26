import { IGame, IUser } from "@/dto/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface GameState {
  availableGames: string[];
  difficulties: string[];
  currentGame: IGame | undefined;
}

const initialState: GameState = {
  availableGames: [],
  difficulties: [],
  currentGame: undefined,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setAvailableGames: (state, action: PayloadAction<string[]>) => {
      state.availableGames = action.payload;
    },
    setDifficulties: (state, action: PayloadAction<string[]>) => {
      state.difficulties = action.payload;
    },

    setCurrentGame: (state, action: PayloadAction<IGame | undefined>) => {
      state.currentGame = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAvailableGames, setDifficulties, setCurrentGame } =
  gameSlice.actions;

export const selectAvailableGames = (state: RootState) =>
  state.game.availableGames;

export const selectDifficulties = (state: RootState) => state.game.difficulties;

export const selectCurrentGame = (state: RootState) => state.game.currentGame;

const GameReducer = gameSlice.reducer;

export default GameReducer;
