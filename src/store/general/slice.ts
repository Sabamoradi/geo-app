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
  mobileNumber:string;
}

const initialState: State = {
  data: "",
  step_Event: sessionStorage.getItem("step") || "1",
  searchedIp:null,
  searchIpLoading:false,
  mobileNumber:''
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
    },
    set_mobileNumber:(state,action)=>{
      state.mobileNumber = action.payload;
    }
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

export const { setData, set_StepEvent,set_mobileNumber } = generalSlice.actions;

export const selectData = (state: RootState) => state.general.data;
export const selectStep_Event = (state: RootState) => state.general.step_Event;
export const selectSearchIp = (state: RootState) => state.general.searchedIp;
export const selectLoadingSearchIp = (state: RootState) => state.general.searchIpLoading;
export const selectSetMobileNumber = (state: RootState) => state.general.mobileNumber;

export default generalSlice.reducer;
