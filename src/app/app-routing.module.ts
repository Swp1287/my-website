import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from './product/product.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from "@angular/router";
import { OffshoreComponent } from './offshore/offshore.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "offshore", component: OffshoreComponent },
  { path: "product", component: ProductComponent },
  { path: "projects", component: ProjectsComponent },
  //{ path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRoutingModule {}
