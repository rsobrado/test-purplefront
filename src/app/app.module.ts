import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocDetailsComponent } from './document-detail/document-detail.component';



import { 
          MatDatepickerModule,
          MatButtonModule,
          MatInputModule,
          MatNativeDateModule ,
          MatFormFieldModule,
          MatIconModule,

        } from '@angular/material';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    DocDetailsComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
