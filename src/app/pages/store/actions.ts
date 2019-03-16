import {Action} from '@ngrx/store';
import {User} from '../interfaces/user';

export enum UserManagementActionTypes {
  SET_USER = '[User-management] set user data',
  SET_USER_SUCCESS = '[User-management] Success set user data'
}

export class SetUser implements Action {
  readonly type = UserManagementActionTypes.SET_USER;

  constructor(public payload: User) {
  }
}

export type All = SetUser;
