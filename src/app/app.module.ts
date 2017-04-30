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
  DialogUserNameEditComponent,
  CardProjectComponent
} from './components';

import {
  ProjectDetailComponent,
  ProjectsContainerComponent
} from './containers';

import {
  UserStorageService,
  ProjectStorageService
} from './services';


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
    DialogUserNameEditComponent,
    ProjectDetailComponent,
    ProjectsContainerComponent,
    CardProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot()
  ],
  entryComponents: [DialogProjectCreatorComponent, DialogUserNameEditComponent],
  providers: [
    UserStorageService,
    ProjectStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
