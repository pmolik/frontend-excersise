import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.sass']
})
export class PageOneComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.pattern('[\\D]*')],
      surname: ['', Validators.pattern('[\\D]*')],
      age: ['', Validators.pattern('[\\d]*')]
    });
  }

  ngOnInit() {
  }

}
