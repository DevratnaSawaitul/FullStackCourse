import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, prevValue: 0 },
  // or we can directly use initialState from line no. 3
  reducers: {
    // actions
    action1: (state) => {
      console.log("in inc");
      state.prevValue = state.value;
      state.value += 1;
    },
    action2: (state) => {
      console.log("in dec");
      state.prevValue = state.value;
      state.value -= 1;
    },
  },
});


// export so we can use 
export const {action1, action2} = counterSlice.actions;
export default counterSlice.reducer;