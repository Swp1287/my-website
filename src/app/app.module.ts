import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { appRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [BrowserModule, FormsModule, HttpClientModule, appRoutingModule],

  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
