import { APP_STACK } from "src/navigation/screenTypes";

const enum AppActionTypes {
  SWITCH_STACK,
}

const AppInitialState = {
  newStack: APP_STACK.SPLASH,
};

type AppInitialType = typeof AppInitialState;

export { AppActionTypes, AppInitialState };
export type { AppInitialType };
