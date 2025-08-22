import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user: string;
}
const initialState: User = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    newUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
  },
});

export const { newUser } = userSlice.actions;
export default userSlice.reducer;
