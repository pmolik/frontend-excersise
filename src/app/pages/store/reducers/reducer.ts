import {User} from '../../interfaces/user';
import {All, UserManagementActionTypes} from '../actions';

export interface State {
  user: User | null;
}

const initialState: State = {
  user: {
    name: null,
    surname: null,
    age: null
  }
};

export function reducer(state = initialState, action: All) {
  switch (action.type) {
    case UserManagementActionTypes.SET_USER :
      return {
        user: {
          name: action.payload.name,
          surname: action.payload.surname,
          age: action.payload.age
        }
      };
    default: {
      return state;
    }
  }
}
