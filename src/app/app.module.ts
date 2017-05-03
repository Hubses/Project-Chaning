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
  CardProjectComponent,
  LoginComponent,
  ProjectsSidebarComponent,
  ProjectsListComponent
} from './components';

import {
  ProjectDetailComponent,
  ProjectsContainerComponent,
} from './containers';

import {
  UserStorageService,
  ProjectStorageService,
  AppStorageService,
  AuthService,
  ProjectsService
} from './services';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { firebaseConfig } from './firebase.config';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
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
    ProjectDetailComponent,
    ProjectsContainerComponent,
    CardProjectComponent,
    LoginComponent,
    ProjectsSidebarComponent,
    ProjectsListComponent,
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
  entryComponents: [DialogProjectCreatorComponent],
  providers: [
    UserStorageService,
    ProjectStorageService,
    AppStorageService,
    AuthService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
