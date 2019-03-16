import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [PageOneComponent, PageTwoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {
}
