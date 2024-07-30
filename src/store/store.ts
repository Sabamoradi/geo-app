import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import {
  type TypedUseSelectorHook,
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
} from 'react-redux';

export const store = configureStore({
  reducer: {
   
  },
});

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

export type ReduxDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;