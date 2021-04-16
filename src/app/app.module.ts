import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Routes, RouterModule } from "@angular/router";
import { appRoutingModule } from "./app-routing.module";
import { OffshoreComponent } from './offshore/offshore.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    OffshoreComponent,
    HomeComponent,
    ProductComponent,
    ProjectsComponent
  ],

  imports: [BrowserModule, FormsModule, HttpClientModule, appRoutingModule],

  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
