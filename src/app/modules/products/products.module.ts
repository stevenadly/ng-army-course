import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsListComponent } from "src/app/products-list/products-list.component";
import { ProductDetailsComponent } from "src/app/product-details/product-details.component";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [ProductsListComponent, ProductDetailsComponent],
  imports: [CommonModule, ProductsRoutingModule, MatListModule],
})
export class ProductsModule {}
