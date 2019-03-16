import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/state';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.sass']
})
export class PageTwoComponent implements OnInit, OnDestroy {
  user: Observable<User>;
  userData;

  constructor(private store: Store<AppState>) {
    this.user = store.select('management');
  }

  ngOnInit() {
    this.user.subscribe((user) => {
      this.userData = user;
    });
  }

  ngOnDestroy(): void {
  }

}
