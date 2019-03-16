import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'page',
    loadChildren: './pages/pages.module#PagesModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
