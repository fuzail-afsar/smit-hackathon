import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signOutUser } from "../services/firebase/auth";

const initialState = {
  profile: "",
};

export const removeProfile = createAsyncThunk(
  "user/removeProfile",
  async () => {
    try {
      await signOutUser();
    } catch (err) {
      throw err;
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeProfile.fulfilled, (state, action) => {
      state.profile = "";
    });
  },
});

// Action creators are generated for each case reducer function
export const { setProfile } = userSlice.actions;

export default userSlice.reducer;
