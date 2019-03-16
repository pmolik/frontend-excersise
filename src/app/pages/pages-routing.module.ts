import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';

const routes: Routes = [
  {
    path: 'one',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  },
  {
    path: '**',
    redirectTo: 'one'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
