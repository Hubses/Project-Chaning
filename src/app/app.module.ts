import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import {
  FooterComponent,

  TopbarComponent,
  DialogProjectCreatorComponent,
  ProjectsSidebarComponent,
  ProjectsListComponent,
  ProjectEditComponent,
  PreloaderComponent
} from './components';

import {
  ProjectDetailComponent,
  AppContainer,
  NotFoundComponent,
  LoginComponent,
  ProjectsContainerComponent
} from './containers';

import {
  AuthService,
  ProjectsService,
  ProjectGeneratorService
} from './services';

import {
  AngularFireModule,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { firebaseConfig } from './firebase.config';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: 'projects', component: AppContainer, children: [
      {
        path: '',
        component: ProjectsContainerComponent
      }, {
        path: ':name',
        component: ProjectDetailComponent
      }]
  },
  { path: '', component: AppComponent },
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
    AppContainer,
    LoginComponent,
    ProjectsSidebarComponent,
    ProjectsListComponent,
    ProjectEditComponent,
    ProjectsContainerComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    AuthService,
    ProjectsService,
    ProjectGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
