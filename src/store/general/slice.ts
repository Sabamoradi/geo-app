import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getIpThunk } from "./thunks";
import { SearchIp } from "./types";


//TODO :fix any
export interface State {
  data: string;
  step_Event: string | null;
  searchedIp: SearchIp | any;
  searchIpLoading:boolean;
}

const initialState: State = {
  data: "",
  step_Event: sessionStorage.getItem("step") || "1",
  searchedIp:null,
  searchIpLoading:false
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
    builder.addCase(getIpThunk.pending, (state, action) => {
      state.searchIpLoading = true;
    });
    builder.addCase(getIpThunk.fulfilled, (state, action) => {
      state.searchIpLoading = false;
      state.searchedIp = action.payload;
    });
  },
});

export const { setData, set_StepEvent } = generalSlice.actions;

export const selectData = (state: RootState) => state.general.data;
export const selectStep_Event = (state: RootState) => state.general.step_Event;
export const selectSearchIp = (state: RootState) => state.general.searchedIp;
export const selectLoadingSearchIp = (state: RootState) => state.general.searchIpLoading;
export default generalSlice.reducer;
