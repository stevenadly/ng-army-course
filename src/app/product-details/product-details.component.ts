import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { TodosService } from "../core/todos.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  currentProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private TodosService: TodosService
  ) {
    this.activatedRoute.params.subscribe((param) => {
      this.id = +param.id;
      this.currentProduct = activatedRoute.snapshot.data.productRes;

      // this.getProducucById(this.id);
    });
    this.currentProduct = activatedRoute.snapshot.data.productRes;

    // this.getProducucById(this.id);
  }

  // getProducucById(id: number) {
  //   this.TodosService.getProductById(id).subscribe((res) => {
  //     this.currentProduct = res;
  //   });
  // }
  ngOnInit(): void {}

  goTo(goto: number) {
    debugger;
    this.router.navigate(["products", goto]);
  }

  canDeactivate() {
    return false;
  }
}
