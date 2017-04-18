import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';

import {
  FooterComponent,
  NotFoundComponent,
  TopbarComponent,
  DialogProjectCreatorComponent,
  DialogUserNameEditComponent
} from "./components";

import { MainComponent } from "./container";

import {
  UserService
} from "./services";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({

  declarations: [
    AppComponent,
    TopbarComponent,
    MainComponent,
    FooterComponent,
    DialogProjectCreatorComponent,
    NotFoundComponent,
    DialogUserNameEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  entryComponents: [DialogProjectCreatorComponent, DialogUserNameEditComponent],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
