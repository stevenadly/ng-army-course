import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "src/app/products-list/products-list.component";
import { ProductDetailsComponent } from "src/app/product-details/product-details.component";
import { productResolver } from "src/app/core/guards/product.resolver";

const routes: Routes = [
  {
    path: "",
    component: ProductsListComponent,
    children: [
      {
        path: ":id",
        component: ProductDetailsComponent,
        resolve: {
          productRes: productResolver,
        },
        // canDeactivate: [loadingGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
