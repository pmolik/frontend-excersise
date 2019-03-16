import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import {SetUser, UserManagementActionTypes} from '../actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators/map';
import {Router} from '@angular/router';
import {exhaustMap} from 'rxjs-compat/operator/exhaustMap';

@Injectable()
export class UserManagementEffects {
  constructor(
    private actions: Actions,
    private router: Router
  ) {
  }

  @Effect()
  featchUser: Observable<any> = this.actions
    .ofType(UserManagementActionTypes.SET_USER)
    .pipe(
      map((action: SetUser) => SetUser),
    );

  @Effect({dispatch: false})
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(UserManagementActionTypes.SET_USER_SUCCESS),
    /*tap((user) => {
      this.router.navigateByUrl('/');
    })*/
  );
}
