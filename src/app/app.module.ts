import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatTreeModule,
} from '@angular/material';
import { ControlsComponent } from './controls/controls.component';
import { FinderComponent } from './finder/finder.component';
import { FolderViewComponent } from './finder/folder-view/folder-view.component';
import { FileViewComponent } from './finder/file-view/file-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ControlsComponent,
    FinderComponent,
    FolderViewComponent,
    FileViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
