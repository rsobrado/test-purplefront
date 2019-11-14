import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatDatepickerModule,
  MatButtonModule,
  MatInputModule,
  MatNativeDateModule ,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
  
} from '@angular/material';

import { DocDetailsComponent } from './document-detail/document-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    DocDetailsComponent,
    DashboardComponent,
    DocumentListComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
