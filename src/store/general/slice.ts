import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface State {
  data: string;
  step_Event: string | null;
}

const initialState: State = {
  data: "",
  step_Event: sessionStorage.getItem("step") || "1",
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
});

export const { setData, set_StepEvent } = generalSlice.actions;

export const selectData = (state: RootState) => state.general.data;
export const selectStep_Event = (state: RootState) => state.general.step_Event;
export default generalSlice.reducer;
