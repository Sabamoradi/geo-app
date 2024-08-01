import { createAppAsyncThunk } from "../appAsyncThunk";
import { getSearchIp } from "./api";

export const getIpThunk = createAppAsyncThunk(
  "general/getSearchIp",
  async (data:string) => {
    const response = (await getSearchIp(data)).data;
    return response;
  }
);
