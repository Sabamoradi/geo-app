import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getIpThunk } from "./thunks";
import { SearchIp } from "./types";


//TODO :fix any
export interface State {
  data: string;
  step_Event: string | null;
  searchedIp: SearchIp | null;
  searchIpLoading:boolean;
  mobileNumber:string;
  showNotification:boolean;
  notificationTitle:string
}

const initialState: State = {
  data: "",
  step_Event: sessionStorage.getItem("step") || "1",
  searchedIp:null,
  searchIpLoading:false,
  mobileNumber:'',
  showNotification:false,
  notificationTitle:''
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
    },
    set_showNotification:(state,action)=>{
      state.showNotification = action.payload;
    },
    set_notificationTitle:(state,action)=>{
      state.notificationTitle = action.payload;
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

export const { setData, set_StepEvent,set_mobileNumber,set_showNotification,set_notificationTitle } = generalSlice.actions;

export const selectData = (state: RootState) => state.general.data;
export const selectStep_Event = (state: RootState) => state.general.step_Event;
export const selectSearchIp = (state: RootState) => state.general.searchedIp;
export const selectLoadingSearchIp = (state: RootState) => state.general.searchIpLoading;
export const selectSetMobileNumber = (state: RootState) => state.general.mobileNumber;
export const selectShowNotification = (state: RootState) => state.general.showNotification;
export const selectNotificationTitle = (state: RootState) => state.general.notificationTitle;

export default generalSlice.reducer;
