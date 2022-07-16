import { AuthReducer } from "./modules/auth/store/auth.reducer";
import { AUTH_STATE_NAME } from "./modules/auth/store/auth.selector";
import { AuthState } from "./modules/auth/store/auth.state";


export interface AppState {
  [AUTH_STATE_NAME]: AuthState | null;
}

export const appReducer = {
  [AUTH_STATE_NAME]: AuthReducer,
};
