import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from "@angular/material";

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabItem1Component } from './tabs/tab-item1/tab-item1.component';
import { TabItem2Component } from './tabs/tab-item2/tab-item2.component';
import { DialogNameComponent } from './dialog-name/dialog-name.component';

import {
  ProjectService,
  UserService
} from "./services";
import { TabItem3Component } from './tabs/tab-item3/tab-item3.component';


@NgModule({

  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    MainComponent,
    FooterComponent,
    SidebarItemComponent,
    TabsComponent,
    TabItem1Component,
    DialogNameComponent,
    TabItem2Component,
    TabItem3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MaterialModule
  ],
  entryComponents: [DialogNameComponent],
  providers: [
    ProjectService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
