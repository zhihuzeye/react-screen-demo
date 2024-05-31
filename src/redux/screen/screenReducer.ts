import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_GET_TRAFFIC_TREND_DATA, API_GET_TOP_SHIPPING_PROVINCES, API_GET_INDEX_DATA,
  API_GET_EXPRESS_CARRIER_DATA, API_GET_EXPRESS_USER_DATA, API_GET_EXPRESS_MODE_DATA
} from '../../services/api.service'
import axios from "axios";

interface ScreenState {
  loading: boolean;
  data: any;
  error: string | null;

  trendData: any;
  topData: any;
  indexData: any;
  carrierData: any;
  userData: any;
  modeData: any;
}

const initialState: ScreenState = {
  loading: false,
  data: null,
  error: null,

  trendData: null,
  topData: null,
  indexData: null,
  carrierData: null,
  userData: null,
  modeData: null,
};

export const fetchScreenData = createAsyncThunk("screen/fetchScreenData",
  async (paramaters: {
    url: string
  }, { rejectWithValue }) => {
    try {
      const response = await axios.get(paramaters.url);
      return {
        ...paramaters,
        data: response?.data?.data
      };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// 大屏
export const screenSlice = createSlice({
  name: "screen",
  initialState,
  reducers: {
    // 这些是普通的 reducer 函数
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScreenData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchScreenData.fulfilled, (state, action: PayloadAction<any>) => {
        const { url, data } = action.payload;
        switch (url) {
          case API_GET_TRAFFIC_TREND_DATA:
            state.trendData = data;
            break;
          case API_GET_TOP_SHIPPING_PROVINCES:
            state.topData = data;
            break;
          case API_GET_INDEX_DATA:
            state.indexData = data;
            break;
          case API_GET_EXPRESS_CARRIER_DATA:
            state.carrierData = data;
            break;
          case API_GET_EXPRESS_USER_DATA:
            state.userData = data;
            break;
          case API_GET_EXPRESS_MODE_DATA:
            state.modeData = data;
            break;
          default:
            break;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchScreenData.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
      })
  },
});

export default screenSlice.reducer;
