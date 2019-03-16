import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../store/state';
import {SetUser} from '../store/actions';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.sass']
})
export class PageTwoComponent implements OnInit, OnDestroy {
  user: Observable<User>;
  userData;
  pictureVisibility = false;
  bannerVisibility = false;
  showError = false;

  constructor(private store: Store<AppState>) {
    this.user = store.select('management');
  }

  onAccess(): void {
    parseInt(this.userData.user.age, 10) >= 18 ? this.pictureVisibility = true : this.showError = true;
  }

  ngOnInit() {
    this.user.subscribe((user) => {
      this.userData = user;
      this.userData.user.name !== null && this.userData.user.surname !== null ? this.bannerVisibility = true : this.bannerVisibility = false;
    });
  }

  ngOnDestroy(): void {
    this.pictureVisibility = false;
    this.bannerVisibility = false;
    this.showError = false;
    this.store.dispatch(new SetUser({
      name: null,
      surname: null,
      age: null
    }));
  }

}
