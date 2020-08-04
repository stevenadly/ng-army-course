import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules,
} from "@angular/router";
import { PersonsComponent } from "./persons/persons.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";
import { TeamsComponent } from "./teams/teams.component";
import { AddTeamComponent } from "./add-team/add-team.component";
import { EditTeamComponent } from "./edit-team/edit-team.component";
import { HomeComponent } from "./home/home.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { HomeSidebarComponent } from "./home-sidebar/home-sidebar.component";
import { ProductsSidebarComponent } from "./products-sidebar/products-sidebar.component";
import { from } from "rxjs";
import { AuthGuard } from "./core/guards/Auth-guard";
import { AuthChildrenGuard } from "./core/guards/auth-children-guard";
import { loadingGuard } from "./core/guards/loading-guard";
import { productResolver } from "./core/guards/product.resolver";
import { RoleGuardGuard } from "./core/guards/role-guard.guard";

const routes: Routes = [
  // { path: "", component: PersonsComponent, pathMatch: "full" },
  // { path: "app-template-driven-form", component: TemplateDrivenFormComponent },
  // {
  //   path: "teams/:id",
  //   component: TeamsComponent,
  //   children: [
  //     { path: "", redirectTo: "add", pathMatch: "full" },
  //     { path: "add", component: AddTeamComponent },
  //     { path: "edit", component: EditTeamComponent },
  //   ],
  // },

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  {
    path: "products",
    // component: ProductsListComponent,
    loadChildren: () =>
      import("./modules/products/products.module").then(
        (m) => m.ProductsModule
      ),
    canActivate: [RoleGuardGuard],
    data: {
      role: "admddin",
    },

    // canActivateChild: [AuthChildrenGuard],

    // canActivate: [AuthGuard],
  },

  { path: "", component: HomeSidebarComponent, outlet: "sidebar" },
  {
    path: "products",
    component: ProductsSidebarComponent,
    outlet: "sidebar",
  },
  // { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
