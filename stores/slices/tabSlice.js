import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTab: "Home",
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedTab } = tabSlice.actions;

export default tabSlice.reducer;
