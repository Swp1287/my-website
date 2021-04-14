import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
//import { HomeComponent } from "./home/home.component";
//import { UsersComponent } from "./users/users.component";
//import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";
//import { AboutComponent } from "./about/about.component";

const appRoutes: Routes = [
  //{ path: "", component: HomeComponent },
  //{ path: "about", component: AboutComponent },
 // { path: "users", component: UsersComponent },
  //{ path: "not-found", component: PageNotFoundComponent },
  //{ path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRoutingModule {}
