import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocDetailsComponent } from './doc-details/doc-details.component'


import { 
          MatDatepickerModule,
          MatButtonModule,
          MatInputModule,
          MatNativeDateModule ,
          MatFormFieldModule,
          MatIconModule
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
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
