import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule, MdSnackBarRef } from '@angular/material';

import { AppComponent } from './app.component';

import {
  FooterComponent,
  NotFoundComponent,
  TopbarComponent,
  DialogProjectCreatorComponent,
  DialogLoginComponent,
  CardProjectComponent
} from './components';

import {
  ProjectDetailComponent,
  ProjectsContainerComponent,
  LoginContainerComponent
} from './containers';

import {
  UserStorageService,
  ProjectStorageService,
  AppStorageService
} from './services';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { firebaseConfig } from './firebase.config';


const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsContainerComponent },
  { path: 'project/:name', component: ProjectDetailComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    DialogProjectCreatorComponent,
    NotFoundComponent,
    DialogLoginComponent,
    ProjectDetailComponent,
    ProjectsContainerComponent,
    CardProjectComponent,
    LoginContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  entryComponents: [DialogProjectCreatorComponent, DialogLoginComponent],
  providers: [
    UserStorageService,
    ProjectStorageService,
    AppStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
