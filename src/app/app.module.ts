import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SortListComponent } from './sort-list/sort-list.component';
import { SortItemComponent } from './sort-item/sort-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SortListComponent,
    SortItemComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
