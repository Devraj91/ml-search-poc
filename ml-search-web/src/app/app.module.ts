import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {MdButtonModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SearchDataService } from "./search-data.service";
import { ViewDocComponent } from './view-doc/view-doc.component';
import { ViewDocService } from "./view-doc.service";
import { AnswersComponent } from './answers/answers.component';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewDocComponent,
    AnswersComponent,
    SearchContainerComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchContainerComponent
      },
      {
        path: 'view',
        component: ViewDocComponent
      },
      {
        path: 'answers',
        component: AnswersComponent
      }
  ])
  ],
  providers: [SearchDataService, ViewDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
