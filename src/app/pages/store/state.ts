import {User} from '../interfaces/user';
import * as user from './reducers/reducer';

export interface AppState {
  userState: user.State;
}

export const reducers = {
  management: user.reducer
};
