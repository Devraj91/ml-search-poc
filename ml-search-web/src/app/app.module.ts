import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchDataService } from "./search-data.service";
import { ViewDocComponent } from './view-doc/view-doc.component';
import { ViewDocService } from "./view-doc.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewDocComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'view',
        component: ViewDocComponent
      },
      {
        path: 'view/:text',
        component: ViewDocComponent
      }
  ])
  ],
  providers: [SearchDataService, ViewDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
