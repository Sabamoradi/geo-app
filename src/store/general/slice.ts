import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getIpThunk } from "./thunks";
import { SearchIp } from "./types";

export interface State {
  data: string;
  step_Event: string | null;
  searchedIp: any | SearchIp;
}

const initialState: State = {
  data: "",
  step_Event: sessionStorage.getItem("step") || "1",
  searchedIp: {},
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    set_StepEvent: (state, action) => {
      state.step_Event = action.payload;
      sessionStorage.setItem("step", action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getIpThunk.fulfilled, (state, action) => {
      state.searchedIp = action.payload;
      console.log(state.searchedIp);
      
    });
  },
});

export const { setData, set_StepEvent } = generalSlice.actions;

export const selectData = (state: RootState) => state.general.data;
export const selectStep_Event = (state: RootState) => state.general.step_Event;
export const selectSearchIp = (state: RootState) =>
  state.general.searchedIp;
export default generalSlice.reducer;
