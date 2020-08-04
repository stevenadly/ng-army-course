import { Component, OnInit } from "@angular/core";
import { Product } from "../core/models/product";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.css"],
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [];
    Array(5)
      .fill("")
      .map((_, i) => {
        this.products.push({
          id: i,
          name: `product#${i}`,
        });
      });
    console.log("============================", this.products);
  }

  ngOnInit(): void {}
}
