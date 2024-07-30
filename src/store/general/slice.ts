import { createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../store";

export interface State {
    data:string
}

const initialState: State = {
  data:''
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = generalSlice.actions;

export const selectData = (state: ReduxState) =>
  state.general.data;

export default generalSlice.reducer;
