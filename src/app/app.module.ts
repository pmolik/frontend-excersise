import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UserManagementEffects} from './pages/store/effects/user-management.effects';
import {reducers} from './pages/store/state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {}),
    /*EffectsModule.forRoot([UserManagementEffects])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
