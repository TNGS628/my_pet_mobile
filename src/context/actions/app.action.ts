import { APP_STACK } from "src/navigation/screenTypes";
import { AppActionTypes } from "../types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type AppPayload = {
  [AppActionTypes.SWITCH_STACK]: APP_STACK;
};

export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];
