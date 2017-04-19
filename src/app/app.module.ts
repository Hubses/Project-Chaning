import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import {
  FooterComponent,
  NotFoundComponent,
  TopbarComponent,
  DialogProjectCreatorComponent,
  DialogUserNameEditComponent,
  CreateProjectButtonComponent
} from './components';

import { ProjectDetailComponent } from './container';

import {
  UserService,
  ProjectService
} from './services';

const routes: Routes = [
  { path: '', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({

  declarations: [
    AppComponent,
    TopbarComponent,
    CreateProjectButtonComponent,
    FooterComponent,
    DialogProjectCreatorComponent,
    NotFoundComponent,
    DialogUserNameEditComponent,
    ProjectDetailComponent
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
    UserService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
