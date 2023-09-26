import { UserActionTypes } from "../types";

export const UserReducer = (state, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER: {
      return { ...state, user: action.payload };
    }
   
    default:
      return { user: undefined };
  }
};
