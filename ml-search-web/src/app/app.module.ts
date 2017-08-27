import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { searchReducer } from './store/reducers';
import { SearchEffects } from './effects/SearchEffect';
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({search: searchReducer}),
    EffectsModule.forRoot([SearchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
