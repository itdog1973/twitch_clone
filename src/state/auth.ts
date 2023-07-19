import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/shared/types";

interface AuthState {
  user: User | null;
  streams: any[];
}

const initialState: AuthState = {
  user: null,
  streams: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
    },
    setStreams: (state, action: PayloadAction<any>) => {
      state.streams = action.payload;
    },
  },
});

export const { setLogin, setLogout, setStreams } = authSlice.actions;

export default authSlice.reducer;
