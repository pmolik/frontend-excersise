import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {AppState} from '../store/state';
import {Store} from '@ngrx/store';
import {SetUser} from '../store/actions';
import {User} from '../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.sass']
})
export class PageOneComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.pattern('[\\D]*')],
      surname: ['', Validators.pattern('[\\D]*')],
      age: ['', Validators.pattern('[\\d]*')]
    });
  }

  onFormSubmit() {
    this.user = this.form.value;
    this.store.dispatch(new SetUser({
        name: this.form.value.name,
        surname: this.form.value.surname,
        age: this.form.value.age
      })
    );
    this.router.navigate(['page/two']);
  }

  ngOnInit() {
  }

}
