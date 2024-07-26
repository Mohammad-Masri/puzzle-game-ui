import { IUser } from "@/dto/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UserState {
  user: IUser | undefined;
}

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser: (state, action: PayloadAction<IUser | undefined>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

const UserReducer = userSlice.reducer;

export default UserReducer;
