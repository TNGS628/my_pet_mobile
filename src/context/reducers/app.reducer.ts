import { AppActions } from "../actions/app.action";
import { AppActionTypes, AppInitialType } from "../types";

export const AppReducer = (state: AppInitialType, action: AppActions) => {
  switch (action.type) {
    case AppActionTypes.SWITCH_STACK: {
      return { ...state, newStack: action.payload };
    }
    default:
      return state;
  }
};
